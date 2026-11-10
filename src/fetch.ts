/** Any fetch-compatible function: the global `fetch`, undici's, or a wrapper. */
export type FetchLike = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;
