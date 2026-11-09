import type { FetchLike } from "../fetch.js";
export type AiAgentCategory =
  | "training-crawler"
  | "search-index"
  | "assistant-browse";

export type AiAgentConfidence = "verified" | "reported" | "heuristic";

type AiAgentMatchMode = "contains" | "exact";

export interface AiAgentSignature {
  agent: string;
  vendor: string;
  category: AiAgentCategory;
  userAgents: string[];
  match?: AiAgentMatchMode | undefined;
  confidence: AiAgentConfidence;
  verification: string | null;
  source: string;
}

export interface AiAgentMatch {
  agent: string;
  vendor: string;
  category: AiAgentCategory;
  confidence: AiAgentConfidence;
}

export interface GeoLocation {
  country?: string | undefined;
  region?: string | undefined;
  city?: string | undefined;
  timezone?: string | undefined;
  latitude?: string | undefined;
  longitude?: string | undefined;
}

export interface GeoRequestSignals {
  clientHints: boolean;
  fetchMode: string | null;
  tracing: boolean;
  prefetch?: boolean | undefined;
}

export interface GeoRequestPayload {
  timestamp?: string | undefined;
  method: string;
  url: string;
  ip?: string | undefined;
  geo?: GeoLocation | undefined;
  referer?: string | undefined;
  userAgent?: string | undefined;
  accept?: string | undefined;
  acceptLanguage?: string | undefined;
  requestId?: string | undefined;
  status?: number | undefined;
  signals?: GeoRequestSignals | undefined;
}

export interface TagMarkdownLinksOptions {
  host?: string | undefined;
}

export interface TagHtmlLinksOptions {
  host?: string | undefined;
}

export type GeoPathRule =
  | string
  | RegExp
  | ((request: Request, url: URL) => boolean);

export type GeoExcludeRule = GeoPathRule;

export interface GeoTagLinksConfig {
  host?: string | undefined;
  paths?: (string | RegExp)[] | undefined;
  html?: boolean | undefined;
}

export type GeoTagLinksOption = boolean | GeoTagLinksConfig;

export interface GeoTagResponseOptions {
  fetch?: FetchLike | undefined;
  /** Value of the loop-guard header on the internal fetch. Defaults to `"1"`. */
  guard?: string | undefined;
  onError?: ((error: unknown) => void) | undefined;
  exclude?: GeoExcludeRule[] | undefined;
}

export type GeoTagMode = "markdown" | "html";

export interface GeoTrackerOptions {
  token: string;
  endpoint?: string | undefined;
  exclude?: GeoExcludeRule[] | undefined;
  sample?: number | undefined;
  onError?: ((error: unknown) => void) | undefined;
  fetch?: FetchLike | undefined;
}

export interface GeoNextOptions extends GeoTrackerOptions {
  tagLinks?: GeoTagLinksOption | undefined;
}

export type WaitUntil = (promise: Promise<unknown>) => void;

export interface GeoReactRouterOptions extends GeoTrackerOptions {
  waitUntil?: WaitUntil | undefined;
}

export interface ReactRouterMiddlewareArgs {
  request: Request;
}

export interface WaitUntilContext {
  waitUntil(promise: Promise<unknown>): void;
}

export interface NetlifyGeoContext {
  city?: string | undefined;
  country?: { code?: string } | undefined;
  subdivision?: { code?: string } | undefined;
  timezone?: string | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
}

export interface NetlifyContext {
  waitUntil?(promise: Promise<unknown>): void;
  geo?: NetlifyGeoContext | undefined;
}

export interface NodeRequestLike {
  method?: string | undefined;
  url?: string | undefined;
  headers: Record<string, string | string[] | undefined>;
}

export interface NitroEventLike {
  node?: { req: NodeRequestLike } | undefined;
  request?: Request | undefined;
}

export interface TanStackMiddlewareContext<T> {
  request: Request;
  next(): T | Promise<T>;
}

export interface AstroMiddlewareContext {
  request: Request;
}

export interface SvelteKitHandleInput<TEvent, TResponse> {
  event: TEvent;
  resolve(event: TEvent): TResponse | Promise<TResponse>;
}
