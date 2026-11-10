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

/** Splits a byte stream into lines on LF, CRLF or CR, as SSE allows. */
async function* readLines(body: ReadableStream<Uint8Array>): AsyncGenerator<string> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  const newline = /\r\n?|\n/g;
  let buffered = "";
  let done = false;
  // A chunk ended on CR; skip the LF if the next chunk starts with one.
  let afterCarriageReturn = false;
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) {
        done = true;
        break;
      }
      buffered += decoder.decode(chunk.value, { stream: true });
      if (afterCarriageReturn && buffered.startsWith("\n")) {
        buffered = buffered.slice(1);
      }
      afterCarriageReturn = false;
      let start = 0;
      newline.lastIndex = 0;
      for (let match = newline.exec(buffered); match; match = newline.exec(buffered)) {
        yield buffered.slice(start, match.index);
        start = match.index + match[0].length;
        afterCarriageReturn = match[0] === "\r" && start === buffered.length;
      }
      buffered = buffered.slice(start);
    }
    buffered += decoder.decode();
    if (buffered) {
      yield buffered;
    }
  } finally {
    // Stopping early (break, return or a parse error) closes the connection.
    if (!done) {
      await reader.cancel().catch(() => undefined);
    }
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
