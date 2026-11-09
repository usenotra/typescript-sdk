import type { FetchLike } from "../fetch.js";
import { VERSION } from "../version.js";
import { NotraConnectionError, NotraError, NotraTimeoutError, apiError } from "./errors.js";
import { NotraStream } from "./stream.js";
import type { HttpMethod, NotraOptions, OperationSpec, RequestOptions } from "./types.js";

const PRODUCTION_URL = "https://api.usenotra.com";
const SANDBOX_URL = "https://demo-api.usenotra.com";
const DEFAULT_TIMEOUT_MS = 60_000;
const DEFAULT_MAX_RETRIES = 2;
const MAX_RETRY_DELAY_MS = 60_000;
/** Statuses retried for any method: the request was not processed. */
const RETRY_ALWAYS = new Set([429, 503]);
/** Statuses also retried for methods that are safe to repeat. */
const RETRY_IDEMPOTENT = new Set([408, 500, 502, 504]);
const IDEMPOTENT_METHODS = new Set<HttpMethod>(["GET", "PUT", "DELETE"]);

export interface RawRequest {
  method: HttpMethod;
  path: string;
  query?: Record<string, unknown> | undefined;
  body?: unknown;
  accept?: string | undefined;
}

export class Transport {
  readonly #apiKey: NotraOptions["apiKey"];
  readonly #organization: string | undefined;
  readonly #baseUrl: string;
  readonly #timeoutMs: number;
  readonly #maxRetries: number;
  readonly #headers: Record<string, string>;
  readonly #fetch: FetchLike;

  constructor(options: NotraOptions = {}) {
    this.#apiKey = options.apiKey ?? env("NOTRA_API_KEY");
    this.#organization = options.organization ?? env("NOTRA_ORGANIZATION_ID");
    this.#baseUrl = (options.baseUrl ?? (options.environment === "sandbox" ? SANDBOX_URL : PRODUCTION_URL)).replace(/\/+$/, "");
    this.#timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.#maxRetries = options.maxRetries ?? DEFAULT_MAX_RETRIES;
    this.#headers = options.headers ?? {};
    this.#fetch = options.fetch ?? ((input, init) => globalThis.fetch(input, init));
  }

  /** Calls a generated operation: fills its path, splits query and body, parses the answer. */
  async call(operation: OperationSpec, params: Record<string, unknown> | undefined, options?: RequestOptions): Promise<unknown> {
    const values = params ?? {};
    let path = operation.path;
    for (const name of operation.pathParams) {
      const value = values[name];
      if (value === undefined || value === null || value === "") {
        throw new NotraError(`Missing path parameter "${name}" for ${operation.method} ${operation.path}`);
      }
      path = path.replace(`{${name}}`, encodeURIComponent(String(value)));
    }
    const query: Record<string, unknown> = {};
    for (const name of operation.queryParams) {
      query[name] = values[name];
    }
    const response = await this.send(
      {
        method: operation.method,
        path,
        query,
        body: operation.body ? values["body"] : undefined,
        accept: operation.response === "sse" ? "text/event-stream" : operation.response === "ndjson" ? "application/x-ndjson" : "application/json",
      },
      options
    );
    if (operation.response !== "json") {
      return new NotraStream(response, operation.response);
    }
    return parseBody(response);
  }

  /** Sends a request with auth, timeout and retries. Throws for non-2xx answers. */
  async send(request: RawRequest, options: RequestOptions = {}): Promise<Response> {
    const url = this.#url(request.path, request.query);
    const maxRetries = options.maxRetries ?? this.#maxRetries;
    const timeoutMs = options.timeoutMs ?? this.#timeoutMs;
    const body = request.body === undefined ? null : JSON.stringify(request.body);

    for (let attempt = 0; ; attempt += 1) {
      const headers = await this.#requestHeaders(request, options);
      let response: Response;
      try {
        response = await this.#fetchWithTimeout(url, { method: request.method, headers, body }, timeoutMs, options.signal);
      } catch (error) {
        if (options.signal?.aborted) {
          throw new NotraConnectionError("Request aborted", { cause: error });
        }
        if (attempt < maxRetries && IDEMPOTENT_METHODS.has(request.method)) {
          await sleep(backoff(attempt), options.signal);
          continue;
        }
        throw error instanceof NotraError ? error : new NotraConnectionError(connectionMessage(error), { cause: error });
      }
      if (response.ok) {
        return response;
      }
      if (attempt < maxRetries && shouldRetry(request.method, response.status)) {
        const delay = retryDelay(response.headers) ?? backoff(attempt);
        await response.body?.cancel();
        await sleep(delay, options.signal);
        continue;
      }
      throw apiError(response.status, await parseErrorBody(response), response.headers);
    }
  }

  #url(path: string, query: Record<string, unknown> | undefined): string {
    const url = new URL(`${this.#baseUrl}${path.startsWith("/") ? path : `/${path}`}`);
    for (const [name, value] of Object.entries(query ?? {})) {
      if (value === undefined || value === null) {
        continue;
      }
      url.searchParams.append(name, value instanceof Date ? value.toISOString() : String(value));
    }
    return url.toString();
  }

  async #requestHeaders(request: RawRequest, options: RequestOptions): Promise<Headers> {
    const headers = new Headers({ Accept: request.accept ?? "application/json" });
    // Browsers set their own User-Agent, and a custom one can force a CORS preflight.
    if (!("document" in globalThis)) {
      headers.set("User-Agent", `@usenotra/sdk/${VERSION}`);
    }
    if (request.body !== undefined) {
      headers.set("Content-Type", "application/json");
    }
    const apiKey = typeof this.#apiKey === "function" ? await this.#apiKey() : this.#apiKey;
    if (apiKey) {
      headers.set("Authorization", `Bearer ${apiKey}`);
    }
    if (this.#organization) {
      headers.set("X-Notra-Organization-Id", this.#organization);
    }
    for (const [name, value] of Object.entries({ ...this.#headers, ...options.headers })) {
      headers.set(name, value);
    }
    return headers;
  }

  async #fetchWithTimeout(url: string, init: RequestInit, timeoutMs: number, signal: AbortSignal | undefined): Promise<Response> {
    const controller = new AbortController();
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, timeoutMs);
    const abort = () => controller.abort();
    if (signal?.aborted) {
      controller.abort();
    }
    signal?.addEventListener("abort", abort, { once: true });
    try {
      return await this.#fetch(url, { ...init, signal: controller.signal });
    } catch (error) {
      if (timedOut) {
        throw new NotraTimeoutError(`Request timed out after ${timeoutMs} ms`, { cause: error });
      }
      throw error;
    } finally {
      clearTimeout(timer);
      signal?.removeEventListener("abort", abort);
    }
  }
}

function shouldRetry(method: HttpMethod, status: number): boolean {
  return RETRY_ALWAYS.has(status) || (IDEMPOTENT_METHODS.has(method) && RETRY_IDEMPOTENT.has(status));
}

/** `Retry-After` in seconds or as a date, else the rate limit window's reset in seconds. */
function retryDelay(headers: Headers): number | undefined {
  const retryAfter = headers.get("retry-after");
  if (retryAfter) {
    const seconds = Number(retryAfter);
    const ms = Number.isFinite(seconds) ? seconds * 1000 : Date.parse(retryAfter) - Date.now();
    if (Number.isFinite(ms)) {
      return Math.min(Math.max(ms, 0), MAX_RETRY_DELAY_MS);
    }
  }
  const reset = Number(headers.get("ratelimit-reset"));
  if (headers.has("ratelimit-reset") && Number.isFinite(reset) && reset >= 0) {
    return Math.min(reset * 1000, MAX_RETRY_DELAY_MS);
  }
  return undefined;
}

function backoff(attempt: number): number {
  const base = Math.min(500 * 2 ** attempt, 8000);
  return base / 2 + Math.random() * (base / 2);
}

function sleep(ms: number, signal: AbortSignal | undefined): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new NotraConnectionError("Request aborted"));
      return;
    }
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      reject(new NotraConnectionError("Request aborted"));
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

async function parseBody(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) {
    return undefined;
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new NotraError(`Expected JSON from ${response.url || "the API"}, got: ${text.slice(0, 200)}`);
  }
}

async function parseErrorBody(response: Response): Promise<unknown> {
  const text = await response.text().catch(() => "");
  try {
    return text ? JSON.parse(text) : undefined;
  } catch {
    return text;
  }
}

function connectionMessage(error: unknown): string {
  return error instanceof Error ? `Could not reach the Notra API: ${error.message}` : "Could not reach the Notra API";
}

function env(name: string): string | undefined {
  const value = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.[name];
  return value || undefined;
}
