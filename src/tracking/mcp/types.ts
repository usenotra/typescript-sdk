import type { FetchLike } from "../../fetch.js";
import type { WaitUntil } from "../types.js";

export type McpEventStatus = "ok" | "tool_error" | "rpc_error";

export interface McpPeerInfo {
  name?: string | undefined;
  version?: string | undefined;
}

export interface McpToolListing {
  name: string;
  description?: string | undefined;
  /** The `ui://` resource an MCP Apps host renders for this tool. */
  uiResource?: string | undefined;
}

export interface McpEvent {
  timestamp: string;
  sessionId: string;
  protocolVersion?: string | undefined;
  server?: McpPeerInfo | undefined;
  client?: McpPeerInfo | undefined;
  /** Order of the request within its connection, for events that share a millisecond. */
  sequence?: number | undefined;
  method: string;
  target?: string | undefined;
  status: McpEventStatus;
  errorCode?: number | undefined;
  errorMessage?: string | undefined;
  durationMs: number;
  responseBytes?: number | undefined;
  userId?: string | undefined;
  intent?: string | undefined;
  model?: string | undefined;
  arguments?: string | undefined;
  response?: string | undefined;
  /** The user's answer to an elicitation: `accept`, `decline` or `cancel`. */
  outcome?: string | undefined;
  tools?: McpToolListing[] | undefined;
}

export interface McpEventBatch {
  type: "mcp";
  events: McpEvent[];
}

export interface McpTransportLike {
  sessionId?: string | undefined;
  // Bivariant on purpose: real transports type `message` as their JSON-RPC message.
  onmessage?: { handler(message: unknown, extra?: unknown): void }["handler"] | undefined;
  send(message: unknown, options?: unknown): Promise<void>;
  close?: (() => Promise<void>) | undefined;
}

export interface McpRequestContext {
  authInfo?:
    | {
        clientId?: string | undefined;
        scopes?: string[] | undefined;
        extra?: Record<string, unknown> | undefined;
      }
    | undefined;
  sessionId?: string | undefined;
}

export interface McpAnalyticsOptions {
  token: string;
  endpoint?: string | undefined;
  excludeMethods?: string[] | undefined;
  /** Adds optional `_intent` and `_model` parameters to every tool so agents can say why they call it. */
  contextParameters?: boolean | undefined;
  /** Records tool arguments with sensitive keys redacted and long strings clipped. */
  captureArguments?: boolean | undefined;
  /** Records tool results, redacted and clipped like arguments. */
  captureResponses?: boolean | undefined;
  /** Returns the user behind a request, for example from `extra.authInfo`. */
  identify?: ((context: McpRequestContext) => string | undefined) | undefined;
  /** Edits or drops an event before it is sent. */
  beforeSend?: ((event: McpEvent) => McpEvent | null) | undefined;
  waitUntil?: WaitUntil | undefined;
  flushIntervalMs?: number | undefined;
  onError?: ((error: unknown) => void) | undefined;
  fetch?: FetchLike | undefined;
}

export interface McpPendingRequest {
  sequence: number;
  method: string;
  target?: string | undefined;
  startedAt: number;
  timestamp: string;
  userId?: string | undefined;
  intent?: string | undefined;
  model?: string | undefined;
  arguments?: string | undefined;
}
