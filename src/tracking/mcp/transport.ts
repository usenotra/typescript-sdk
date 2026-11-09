import { reportGeoError } from "../send.js";
import { McpBatcher } from "./batcher.js";
import { byteLength, captureJson } from "./capture.js";
import {
  MCP_MAX_PENDING_REQUESTS,
  DEFAULT_MCP_EXCLUDED_METHODS,
  MCP_CONTEXT_VALUE_MAX_LENGTH,
  MCP_ERROR_MESSAGE_MAX_LENGTH,
  MCP_INTENT_PARAMETER,
  MCP_INTENT_PARAMETER_DESCRIPTION,
  MCP_MODEL_PARAMETER,
  MCP_MODEL_PARAMETER_DESCRIPTION,
  MCP_TARGET_MAX_LENGTH,
  MCP_TOOL_DESCRIPTION_MAX_LENGTH,
} from "./constants.js";
import type {
  McpAnalyticsOptions,
  McpEvent,
  McpPeerInfo,
  McpPendingRequest,
  McpRequestContext,
  McpToolListing,
  McpTransportLike,
} from "./types.js";

const trackedTransports = new WeakSet<McpTransportLike>();

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function readPeer(value: unknown): McpPeerInfo | undefined {
  if (!isRecord(value)) {
    return undefined;
  }
  return { name: readString(value["name"]), version: readString(value["version"]) };
}

function readRequestId(id: unknown): string | number | undefined {
  return typeof id === "string" || typeof id === "number" ? id : undefined;
}

function readTarget(params: Record<string, unknown>): string | undefined {
  const target = readString(params["name"]) ?? readString(params["uri"]);
  return target?.slice(0, MCP_TARGET_MAX_LENGTH);
}

function readToolErrorText(result: Record<string, unknown>): string {
  const first = Array.isArray(result["content"]) ? result["content"][0] : undefined;
  return isRecord(first) ? (readString(first["text"]) ?? "") : "";
}

function takeContextValue(
  args: Record<string, unknown>,
  key: string
): string | undefined {
  const value = readString(args[key])?.slice(0, MCP_CONTEXT_VALUE_MAX_LENGTH);
  delete args[key];
  return value;
}

function readUiResource(tool: Record<string, unknown>): string | undefined {
  const meta = isRecord(tool["_meta"]) ? tool["_meta"] : {};
  const ui = isRecord(meta["ui"]) ? meta["ui"] : {};
  return (
    readString(ui["resourceUri"]) ?? readString(meta["ui/resourceUri"])
  )?.slice(0, MCP_TARGET_MAX_LENGTH);
}

function readToolListing(result: Record<string, unknown>): McpToolListing[] {
  if (!Array.isArray(result["tools"])) {
    return [];
  }
  return result["tools"].filter(isRecord).flatMap((tool) => {
    const name = readString(tool["name"]);
    return name
      ? [
          {
            name,
            description: readString(tool["description"])?.slice(
              0,
              MCP_TOOL_DESCRIPTION_MAX_LENGTH
            ),
            uiResource: readUiResource(tool),
          },
        ]
      : [];
  });
}

function addContextParameters(result: Record<string, unknown>): void {
  if (!Array.isArray(result["tools"])) {
    return;
  }
  for (const tool of result["tools"]) {
    if (!(isRecord(tool) && isRecord(tool["inputSchema"]))) {
      continue;
    }
    const properties = isRecord(tool["inputSchema"]["properties"])
      ? tool["inputSchema"]["properties"]
      : {};
    properties[MCP_INTENT_PARAMETER] ??= {
      type: "string",
      description: MCP_INTENT_PARAMETER_DESCRIPTION,
    };
    properties[MCP_MODEL_PARAMETER] ??= {
      type: "string",
      description: MCP_MODEL_PARAMETER_DESCRIPTION,
    };
    tool["inputSchema"]["properties"] = properties;
  }
}

function readRequestContext(extra: unknown): McpRequestContext {
  if (!isRecord(extra)) {
    return {};
  }
  const auth = isRecord(extra["authInfo"]) ? extra["authInfo"] : undefined;
  return {
    sessionId: readString(extra["sessionId"]),
    authInfo: auth
      ? {
          clientId: readString(auth["clientId"]),
          scopes: Array.isArray(auth["scopes"])
            ? auth["scopes"].filter((scope) => typeof scope === "string")
            : undefined,
          extra: isRecord(auth["extra"]) ? auth["extra"] : undefined,
        }
      : undefined,
  };
}

function eachMessage(
  message: unknown,
  visit: (message: Record<string, unknown>) => void
): void {
  for (const item of Array.isArray(message) ? message : [message]) {
    if (isRecord(item)) {
      visit(item);
    }
  }
}

function findSetter(
  target: object,
  key: PropertyKey
): ((value: unknown) => void) | undefined {
  for (
    let owner: object | null = target;
    owner;
    owner = Object.getPrototypeOf(owner)
  ) {
    const descriptor = Object.getOwnPropertyDescriptor(owner, key);
    if (descriptor) {
      return descriptor.set;
    }
  }
  return undefined;
}

/**
 * Wraps an MCP transport (stdio, Streamable HTTP, SSE or any object with
 * `send` and `onmessage`) and reports one event per JSON-RPC request the
 * server answers, plus one per request the server sends to the client
 * (elicitation, sampling, roots), in batches. Arguments and results stay in the process
 * unless `captureArguments` or `captureResponses` is set. Tracking a
 * transport that is already tracked returns it unchanged.
 */
/** Keeps an unanswered request, dropping the oldest when a client never answers. */
function remember(
  requests: Map<string | number, McpPendingRequest>,
  id: string | number,
  request: McpPendingRequest
): void {
  if (requests.size >= MCP_MAX_PENDING_REQUESTS) {
    const oldest = requests.keys().next();
    if (!oldest.done) {
      requests.delete(oldest.value);
    }
  }
  requests.set(id, request);
}

export function trackMcpTransport<T extends McpTransportLike>(
  transport: T,
  options: McpAnalyticsOptions
): T {
  if (!options.token || trackedTransports.has(transport)) {
    return transport;
  }
  trackedTransports.add(transport);

  const excluded = new Set(
    options.excludeMethods ?? DEFAULT_MCP_EXCLUDED_METHODS
  );
  const batcher = new McpBatcher(options);
  const pending = new Map<string | number, McpPendingRequest>();
  const outgoing = new Map<string | number, McpPendingRequest>();
  const fallbackSessionId = crypto.randomUUID();
  let client: McpPeerInfo | undefined;
  let server: McpPeerInfo | undefined;
  let protocolVersion: string | undefined;
  let sequence = 0;

  const report = (event: McpEvent) => {
    try {
      const final = options.beforeSend ? options.beforeSend(event) : event;
      if (final) {
        batcher.push(final);
      }
    } catch (error) {
      reportGeoError(options.onError, error);
    }
  };

  const observeRequest = (message: Record<string, unknown>, extra: unknown) => {
    const id = readRequestId(message["id"]);
    const method = readString(message["method"]);
    if (id === undefined || method === undefined) {
      return;
    }
    const params = isRecord(message["params"]) ? message["params"] : {};
    if (method === "initialize") {
      client = readPeer(params["clientInfo"]);
      protocolVersion = readString(params["protocolVersion"]);
    }
    const args = isRecord(params["arguments"]) ? params["arguments"] : undefined;
    const strip = options.contextParameters && method === "tools/call";
    const intent =
      strip && args
        ? takeContextValue(args, MCP_INTENT_PARAMETER)
        : undefined;
    const model =
      strip && args
        ? takeContextValue(args, MCP_MODEL_PARAMETER)
        : undefined;
    if (excluded.has(method)) {
      return;
    }
    remember(pending, id, {
      sequence: sequence++,
      method,
      target: readTarget(params),
      startedAt: performance.now(),
      timestamp: new Date().toISOString(),
      userId: options.identify?.(readRequestContext(extra))?.slice(
        0,
        MCP_CONTEXT_VALUE_MAX_LENGTH
      ),
      intent,
      model,
      arguments: options.captureArguments ? captureJson(args) : undefined,
    });
  };

  const finish = (
    request: McpPendingRequest,
    message: Record<string, unknown>
  ) => {
    const event: McpEvent = {
      timestamp: request.timestamp,
      sessionId: transport.sessionId ?? fallbackSessionId,
      sequence: request.sequence,
      method: request.method,
      target: request.target,
      status: "ok",
      durationMs: Math.max(0, Math.round(performance.now() - request.startedAt)),
      userId: request.userId,
      intent: request.intent,
      model: request.model,
      arguments: request.arguments,
    };

    if (isRecord(message["error"])) {
      event.status = "rpc_error";
      event.errorCode =
        typeof message["error"]["code"] === "number" ? message["error"]["code"] : 0;
      event.errorMessage = readString(message["error"]["message"])?.slice(
        0,
        MCP_ERROR_MESSAGE_MAX_LENGTH
      );
    } else if (isRecord(message["result"])) {
      const { result } = message;
      if (request.method === "initialize") {
        server = readPeer(result["serverInfo"]);
        protocolVersion = readString(result["protocolVersion"]) ?? protocolVersion;
      }
      if (request.method === "tools/list") {
        event.tools = readToolListing(result);
        if (options.contextParameters) {
          addContextParameters(result);
        }
      }
      event.responseBytes = byteLength(result);
      if (request.method === "elicitation/create") {
        event.outcome = readString(result["action"]);
      }
      if (result["isError"] === true) {
        event.status = "tool_error";
        event.errorMessage = readToolErrorText(result).slice(
          0,
          MCP_ERROR_MESSAGE_MAX_LENGTH
        );
      }
      if (options.captureResponses && request.method === "tools/call") {
        event.response = captureJson(result);
      }
    }

    report({ ...event, protocolVersion, server, client });
  };

  const observeResponse = (message: Record<string, unknown>) => {
    const id = readRequestId(message["id"]);
    if (id === undefined || "method" in message) {
      return;
    }
    const request = pending.get(id);
    if (request) {
      pending.delete(id);
      finish(request, message);
    }
  };

  const observeClientResponse = (message: Record<string, unknown>) => {
    const id = readRequestId(message["id"]);
    if (id === undefined || "method" in message) {
      return;
    }
    const request = outgoing.get(id);
    if (request) {
      outgoing.delete(id);
      finish(request, message);
    }
  };

  const observeServerRequest = (
    message: Record<string, unknown>,
    sendOptions: unknown
  ) => {
    const id = readRequestId(message["id"]);
    const method = readString(message["method"]);
    if (id === undefined || method === undefined || excluded.has(method)) {
      return;
    }
    const relatedId = isRecord(sendOptions)
      ? readRequestId(sendOptions["relatedRequestId"])
      : undefined;
    const related = relatedId === undefined ? undefined : pending.get(relatedId);
    const params = isRecord(message["params"]) ? message["params"] : undefined;
    remember(outgoing, id, {
      sequence: sequence++,
      method,
      target: related?.target,
      startedAt: performance.now(),
      timestamp: new Date().toISOString(),
      userId: related?.userId,
      intent: related?.intent,
      model: related?.model,
      arguments: options.captureArguments ? captureJson(params) : undefined,
    });
  };

  let handler = transport.onmessage;
  const onIncoming = (message: unknown, extra?: unknown) => {
    try {
      eachMessage(message, (item) => {
        observeRequest(item, extra);
        observeClientResponse(item);
      });
    } catch (error) {
      reportGeoError(options.onError, error);
    }
    handler?.call(transport, message, extra);
  };
  // Transports such as NodeStreamableHTTPServerTransport implement onmessage
  // as an accessor that hands the handler to an inner transport. The own
  // property below shadows it, so keep feeding the original setter.
  const setInner = findSetter(transport, "onmessage");
  Object.defineProperty(transport, "onmessage", {
    configurable: true,
    enumerable: true,
    get: () => (handler ? onIncoming : undefined),
    set: (value: McpTransportLike["onmessage"]) => {
      handler = value;
      setInner?.call(transport, value ? onIncoming : undefined);
    },
  });
  if (handler) {
    setInner?.call(transport, onIncoming);
  }

  const send = transport.send.bind(transport);
  Object.defineProperty(transport, "send", {
    configurable: true,
    writable: true,
    value: async (message: unknown, sendOptions?: unknown) => {
      // Requests to the client are registered first: its answer can arrive before send() resolves.
      const observe = (watch: (item: Record<string, unknown>) => void) => {
        try {
          eachMessage(message, watch);
        } catch (error) {
          reportGeoError(options.onError, error);
        }
      };
      observe((item) => observeServerRequest(item, sendOptions));
      try {
        await send(message, sendOptions);
      } catch (error) {
        observe((item) => {
          const id = readRequestId(item["id"]);
          if (id !== undefined) {
            outgoing.delete(id);
          }
        });
        throw error;
      }
      // A response counts once it was actually delivered.
      observe(observeResponse);
    },
  });

  const close = transport.close?.bind(transport);
  if (close) {
    Object.defineProperty(transport, "close", {
      configurable: true,
      writable: true,
      value: async () => {
        await batcher.close();
        await close();
      },
    });
  }

  return transport;
}
