/** Base class of every error the Notra API client throws. */
export class NotraError extends Error {
  override name = "NotraError";
}

/** The API answered with a non-2xx status. */
export class NotraAPIError extends NotraError {
  override name = "NotraAPIError";
  /** HTTP status, such as 404. */
  readonly status: number;
  /** Machine-readable error code from the response body, when the API sends one. */
  readonly code: string | undefined;
  /** What to do about it, when the API says so. */
  readonly recovery: string | undefined;
  /** The parsed response body, or its text when it isn't JSON. */
  readonly body: unknown;
  readonly headers: Headers;
  /** `x-request-id` of the response, for support requests. */
  readonly requestId: string | undefined;

  constructor(status: number, body: unknown, headers: Headers) {
    const fields = isRecord(body) ? body : {};
    const message = typeof fields["error"] === "string" ? fields["error"] : `Request failed with status ${status}`;
    super(message);
    this.status = status;
    this.code = typeof fields["code"] === "string" ? fields["code"] : undefined;
    this.recovery = typeof fields["recovery"] === "string" ? fields["recovery"] : undefined;
    this.body = body;
    this.headers = headers;
    this.requestId = headers.get("x-request-id") ?? undefined;
  }
}

/** 429: too many requests. The client already retried before throwing this. */
export class NotraRateLimitError extends NotraAPIError {
  override name = "NotraRateLimitError";
  /** Requests allowed in the current window, when the API reports it. */
  readonly limit: number | undefined;
  readonly remaining: number | undefined;
  /** When the window resets, when the API reports it. */
  readonly reset: number | undefined;

  constructor(body: unknown, headers: Headers) {
    super(429, body, headers);
    const fields = isRecord(body) ? body : {};
    this.limit = numberOrUndefined(fields["limit"]);
    this.remaining = numberOrUndefined(fields["remaining"]);
    this.reset = numberOrUndefined(fields["reset"]);
  }
}

/** The request never got an answer: network failure, DNS, TLS or abort. */
export class NotraConnectionError extends NotraError {
  override name = "NotraConnectionError";
}

/** The request took longer than `timeoutMs`. */
export class NotraTimeoutError extends NotraConnectionError {
  override name = "NotraTimeoutError";
}

export function apiError(status: number, body: unknown, headers: Headers): NotraAPIError {
  return status === 429 ? new NotraRateLimitError(body, headers) : new NotraAPIError(status, body, headers);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function numberOrUndefined(value: unknown): number | undefined {
  return typeof value === "number" ? value : undefined;
}
