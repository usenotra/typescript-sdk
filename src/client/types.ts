import type { FetchLike } from "../fetch.js";
import type { StreamFormat } from "./stream.js";

export interface NotraOptions {
  /**
   * Your Notra API key, or a function returning a current token (for example
   * an OAuth access token that rotates), called before every attempt.
   * Defaults to the `NOTRA_API_KEY` environment variable.
   */
  apiKey?: string | (() => string | Promise<string>) | undefined;
  /**
   * Workspace id or slug, sent as `X-Notra-Organization-Id`. Needed with an
   * account API key when you belong to more than one workspace. Defaults to
   * the `NOTRA_ORGANIZATION_ID` environment variable.
   */
  organization?: string | undefined;
  /** `"sandbox"` uses the sample-data sandbox at demo-api.usenotra.com. Defaults to `"production"`. */
  environment?: "production" | "sandbox" | undefined;
  /** Overrides `environment`, for example for a proxy. */
  baseUrl?: string | undefined;
  /** Per-request timeout, including retries' individual attempts. Defaults to 60 seconds. */
  timeoutMs?: number | undefined;
  /** Retries for rate limits, server errors and network failures. Defaults to 2. */
  maxRetries?: number | undefined;
  /** Headers sent with every request. */
  headers?: Record<string, string> | undefined;
  /** A custom `fetch`, for example for tests or an instrumented client. */
  fetch?: FetchLike | undefined;
}

export interface RequestOptions {
  signal?: AbortSignal | undefined;
  timeoutMs?: number | undefined;
  maxRetries?: number | undefined;
  headers?: Record<string, string> | undefined;
}

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/** How the generated methods describe an endpoint to the transport. */
export interface OperationSpec {
  method: HttpMethod;
  path: string;
  pathParams: readonly string[];
  queryParams: readonly string[];
  body: boolean;
  response: "json" | StreamFormat;
}

/** Shows an intersection as one flat object type in editor hovers. */
export type Prettify<T> = { [K in keyof T]: T[K] } & {};

/** A chunk of the chat UI message stream (Vercel AI SDK format), such as `{ type: "text-delta", id, delta }`. */
export interface NotraChatChunk {
  /** `start`, `text-delta`, `tool-input-available`, `finish`, `error` and so on. */
  type: string;
  id?: string | undefined;
  /** The new text of a `text-delta` or `reasoning-delta` chunk. */
  delta?: string | undefined;
  /** The message of an `error` chunk. */
  errorText?: string | undefined;
  /** On `start` and `finish`: includes `chatId`. */
  messageMetadata?: Record<string, unknown> | undefined;
  [key: string]: unknown;
}

/** An event of an agent session stream, such as `input.requested`. */
export type NotraAgentEvent = { type: string } & Record<string, unknown>;
