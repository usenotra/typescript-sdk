import { NotraConnectionError } from "./errors.js";

/** How a streaming endpoint frames its events. */
export type StreamFormat = "sse" | "ndjson";

/**
 * A streaming response. Iterate it with `for await` to get each parsed event,
 * or forward the raw bytes with `toReadableStream()`, for example straight to
 * a browser. It can be consumed once.
 */
export class NotraStream<T> implements AsyncIterable<T> {
  /** The underlying response, for headers such as `x-chat-id`. */
  readonly response: Response;
  readonly #format: StreamFormat;
  #used = false;

  constructor(response: Response, format: StreamFormat) {
    this.response = response;
    this.#format = format;
  }

  /** The raw event stream, unparsed. */
  toReadableStream(): ReadableStream<Uint8Array> {
    this.#claim();
    return this.response.body ?? new ReadableStream({ start: (controller) => controller.close() });
  }

  async *[Symbol.asyncIterator](): AsyncIterator<T> {
    this.#claim();
    const body = this.response.body;
    if (!body) {
      return;
    }
    const lines = this.#format === "sse" ? sseData(readLines(body)) : readLines(body);
    for await (const line of lines) {
      if (line.trim() === "" || line === "[DONE]") {
        continue;
      }
      yield JSON.parse(line) as T;
    }
  }

  #claim(): void {
    if (this.#used) {
      throw new NotraConnectionError("This stream was already consumed");
    }
    this.#used = true;
  }
}

async function* readLines(body: ReadableStream<Uint8Array>): AsyncGenerator<string> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffered = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      buffered += decoder.decode(value, { stream: true });
      let newline = buffered.indexOf("\n");
      while (newline !== -1) {
        yield buffered.slice(0, newline).replace(/\r$/, "");
        buffered = buffered.slice(newline + 1);
        newline = buffered.indexOf("\n");
      }
    }
    buffered += decoder.decode();
    if (buffered) {
      yield buffered;
    }
  } finally {
    reader.releaseLock();
  }
}

/** The `data:` payload of each server-sent event; multi-line data is joined. */
async function* sseData(lines: AsyncGenerator<string>): AsyncGenerator<string> {
  let data: string[] = [];
  for await (const line of lines) {
    if (line === "") {
      if (data.length > 0) {
        yield data.join("\n");
        data = [];
      }
    } else if (line.startsWith("data:")) {
      data.push(line.slice(line.startsWith("data: ") ? 6 : 5));
    }
  }
  if (data.length > 0) {
    yield data.join("\n");
  }
}
