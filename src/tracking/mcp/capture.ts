import {
  MCP_CAPTURE_MAX_LENGTH,
  MCP_CAPTURE_STRING_MAX_LENGTH,
  MCP_REDACTED_VALUE,
  MCP_SENSITIVE_KEY_PATTERN,
} from "./constants.js";

function redact(value: unknown): unknown {
  if (typeof value === "string") {
    return value.length > MCP_CAPTURE_STRING_MAX_LENGTH
      ? `${value.slice(0, MCP_CAPTURE_STRING_MAX_LENGTH)}…`
      : value;
  }
  if (Array.isArray(value)) {
    return value.map(redact);
  }
  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [
        key,
        MCP_SENSITIVE_KEY_PATTERN.test(key) ? MCP_REDACTED_VALUE : redact(entry),
      ])
    );
  }
  return value;
}

export function captureJson(value: unknown): string | undefined {
  if (value === undefined) {
    return undefined;
  }
  return JSON.stringify(redact(value)).slice(0, MCP_CAPTURE_MAX_LENGTH);
}

export function byteLength(value: unknown): number {
  return value === undefined
    ? 0
    : new TextEncoder().encode(JSON.stringify(value)).length;
}
