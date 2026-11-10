import { reportGeoError, sendRequestLog } from "../send.js";
import { byteLength } from "./capture.js";
import {
  MCP_BATCH_MAX_BYTES,
  MCP_BATCH_MAX_EVENTS,
  MCP_FLUSH_INTERVAL_MS,
} from "./constants.js";
import type { McpAnalyticsOptions, McpEvent } from "./types.js";

const batchers = new Set<McpBatcher>();

function shrink(event: McpEvent): McpEvent | undefined {
  const candidates = [
    event,
    { ...event, arguments: undefined, response: undefined },
    {
      ...event,
      arguments: undefined,
      response: undefined,
      tools: event.tools?.map((tool) => ({ name: tool.name })),
    },
  ];
  return candidates.find(
    (candidate) => byteLength(candidate) < MCP_BATCH_MAX_BYTES
  );
}

function takeBatch(queue: McpEvent[]): McpEvent[] {
  let bytes = 0;
  let count = 0;
  for (const event of queue) {
    const size = byteLength(event) + 1;
    if (
      count === MCP_BATCH_MAX_EVENTS ||
      (count > 0 && bytes + size > MCP_BATCH_MAX_BYTES)
    ) {
      break;
    }
    bytes += size;
    count += 1;
  }
  return queue.splice(0, count);
}

export class McpBatcher {
  readonly #options: McpAnalyticsOptions;
  #queue: McpEvent[] = [];
  #timer: ReturnType<typeof setTimeout> | undefined;
  #settle: (() => void) | undefined;
  #inFlight: Promise<unknown> = Promise.resolve();

  constructor(options: McpAnalyticsOptions) {
    this.#options = options;
  }

  push(event: McpEvent): void {
    const fitted = shrink(event);
    if (!fitted) {
      reportGeoError(
        this.#options.onError,
        new Error(`MCP event for ${event.method} is too large to send`)
      );
      return;
    }
    this.#queue.push(fitted);
    // Registered only while it has events, so transports that are never closed don't leak.
    batchers.add(this);
    if (this.#queue.length >= MCP_BATCH_MAX_EVENTS) {
      this.#keepAlive(this.flush());
      return;
    }
    if (this.#timer) {
      return;
    }
    this.#timer = setTimeout(() => {
      void this.flush();
    }, this.#options.flushIntervalMs ?? MCP_FLUSH_INTERVAL_MS);
    const handle: unknown = this.#timer;
    if (
      typeof handle === "object" &&
      handle !== null &&
      "unref" in handle &&
      typeof handle.unref === "function"
    ) {
      handle.unref();
    }
    this.#keepAlive(
      new Promise((resolve) => {
        this.#settle = resolve;
      })
    );
  }

  async flush(): Promise<void> {
    clearTimeout(this.#timer);
    this.#timer = undefined;
    const settle = this.#settle;
    this.#settle = undefined;
    const sends: Promise<void>[] = [];
    while (this.#queue.length > 0) {
      const events = takeBatch(this.#queue);
      sends.push(sendRequestLog({ type: "mcp", events }, this.#options));
    }
    // A flush that is still sending counts too, so close() really waits.
    const previous = this.#inFlight;
    const current = Promise.all([previous, ...sends]).then(() => undefined);
    this.#inFlight = current;
    try {
      await current;
    } finally {
      if (this.#inFlight === current) {
        this.#inFlight = Promise.resolve();
        if (this.#queue.length === 0) {
          batchers.delete(this);
        }
      }
      settle?.();
    }
  }

  async close(): Promise<void> {
    batchers.delete(this);
    await this.flush();
  }

  #keepAlive(promise: Promise<void>): void {
    try {
      this.#options.waitUntil?.(promise);
    } catch (error) {
      this.#options.onError?.(error);
    }
  }
}

/** Sends every queued MCP event now; await it before a serverless function returns. */
export async function flushMcpEvents(): Promise<void> {
  await Promise.all([...batchers].map((batcher) => batcher.flush()));
}
