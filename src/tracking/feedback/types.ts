import type { FetchLike } from "../../fetch.js";
import type { FEEDBACK_KINDS, FEEDBACK_SENTIMENTS } from "./constants.js";

export type FeedbackKind = (typeof FEEDBACK_KINDS)[number];
export type FeedbackSentiment = (typeof FEEDBACK_SENTIMENTS)[number];

export interface FeedbackInput {
  message: string;
  title?: string | undefined;
  kind?: FeedbackKind | undefined;
  sentiment?: FeedbackSentiment | undefined;
  contextUrl?: string | undefined;
  agentClient?: string | undefined;
  agentModel?: string | undefined;
  toolVersion?: string | undefined;
  externalId?: string | undefined;
  idempotencyKey?: string | undefined;
  projectId?: string | undefined;
  metadata?: Record<string, unknown> | undefined;
  /** Channel the feedback came through. `submitFeedback` sends `"sdk"`, the MCP tool `"mcp"`. */
  source?: "mcp" | "api" | "sdk" | undefined;
}

export interface FeedbackClientOptions {
  url?: string | undefined;
  token?: string | undefined;
  endpoint?: string | undefined;
  fetch?: FetchLike | undefined;
  timeoutMs?: number | undefined;
}

export interface FeedbackSubmitResult {
  id: string;
  deduplicated: boolean;
}

export interface FeedbackToolOptions extends FeedbackClientOptions {
  productName?: string | undefined;
  toolName?: string | undefined;
  description?: string | undefined;
  defaults?: Pick<
    FeedbackInput,
    "agentClient" | "agentModel" | "toolVersion" | "projectId" | "metadata"
  >;
  onError?: ((error: unknown) => void) | undefined;
}

export interface FeedbackToolResult {
  content: { type: "text"; text: string }[];
  structuredContent?: FeedbackSubmitResult | undefined;
  isError?: boolean | undefined;
}

export interface FeedbackToolServer {
  registerTool(
    name: string,
    config: {
      description: string;
      annotations?: Record<string, unknown> | undefined;
      inputSchema: Record<string, unknown>;
      outputSchema?: Record<string, unknown> | undefined;
    },
    handler: (args: Record<string, unknown>) => Promise<FeedbackToolResult>
  ): unknown;
}
