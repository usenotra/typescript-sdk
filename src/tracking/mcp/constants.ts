export const DEFAULT_MCP_EXCLUDED_METHODS = ["ping"];

export const MCP_ERROR_MESSAGE_MAX_LENGTH = 1024;

export const MCP_TARGET_MAX_LENGTH = 2048;

export const MCP_TOOL_DESCRIPTION_MAX_LENGTH = 512;

export const MCP_CONTEXT_VALUE_MAX_LENGTH = 512;

export const MCP_CAPTURE_MAX_LENGTH = 4096;

export const MCP_CAPTURE_STRING_MAX_LENGTH = 256;

export const MCP_BATCH_MAX_EVENTS = 100;

export const MCP_BATCH_MAX_BYTES = 240 * 1024;

export const MCP_FLUSH_INTERVAL_MS = 1000;

export const MCP_INTENT_PARAMETER = "_intent";

export const MCP_MODEL_PARAMETER = "_model";

export const MCP_INTENT_PARAMETER_DESCRIPTION =
  "Optional. One short sentence on what you are trying to accomplish with this call.";

export const MCP_MODEL_PARAMETER_DESCRIPTION =
  "Optional. The model identifier you are running as, for example claude-opus-5-5.";

export const MCP_REDACTED_VALUE = "[redacted]";

export const MCP_SENSITIVE_KEY_PATTERN =
  /pass(word)?|secret|token|api[-_]?key|auth|cookie|credential|private|session/i;
