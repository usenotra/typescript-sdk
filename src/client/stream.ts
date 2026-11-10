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
    // Each network chunk is parsed synchronously; only finished events are yielded.
    const parser = new LineParser(this.#format);
    for await (const payloads of readChunks(body, parser)) {
      for (const payload of payloads) {
        yield JSON.parse(payload) as T;
      }
    }
  }

  #claim(): void {
    if (this.#used) {
      throw new NotraConnectionError("This stream was already consumed");
    }
    this.#used = true;
  }
}

/** Turns lines into JSON payloads: one per NDJSON line, or one per server-sent event. */
class LineParser {
  readonly #sse: boolean;
  #data: string[] = [];

  constructor(format: StreamFormat) {
    this.#sse = format === "sse";
  }

  line(line: string, out: string[]): void {
    if (!this.#sse) {
      if (line.trim() !== "" && line !== "[DONE]") {
        out.push(line);
      }
      return;
    }
    if (line === "") {
      this.end(out);
    } else if (line.startsWith("data:")) {
      this.#data.push(line.slice(line.startsWith("data: ") ? 6 : 5));
    }
  }

  /** Emits a pending event, at a blank line or the end of the stream. */
  end(out: string[]): void {
    if (this.#data.length === 0) {
      return;
    }
    const payload = this.#data.join("\n");
    this.#data = [];
    if (payload.trim() !== "" && payload !== "[DONE]") {
      out.push(payload);
    }
  }
}

/** Reads the body and yields the payloads each chunk completes. Lines end on LF, CRLF or CR. */
async function* readChunks(body: ReadableStream<Uint8Array>, parser: LineParser): AsyncGenerator<string[]> {
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
      const out: string[] = [];
      let start = 0;
      newline.lastIndex = 0;
      for (let match = newline.exec(buffered); match; match = newline.exec(buffered)) {
        parser.line(buffered.slice(start, match.index), out);
        start = match.index + match[0].length;
        afterCarriageReturn = match[0] === "\r" && start === buffered.length;
      }
      buffered = buffered.slice(start);
      if (out.length > 0) {
        yield out;
      }
    }
    const out: string[] = [];
    buffered += decoder.decode();
    if (buffered) {
      parser.line(buffered, out);
    }
    parser.end(out);
    if (out.length > 0) {
      yield out;
    }
  } finally {
    // Stopping early (break, return or a parse error) closes the connection.
    if (!done) {
      await reader.cancel().catch(() => undefined);
    }
    reader.releaseLock();
  }
}
