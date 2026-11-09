import { expect, test } from "bun:test";

import { flushMcpEvents, trackMcpTransport } from "../../src/mcp.js";

type Handler = (message: unknown, extra?: unknown) => void;

class InnerTransport {
  onmessage?: Handler | undefined;

  receive(message: unknown) {
    this.onmessage?.(message);
  }
}

// Mirrors NodeStreamableHTTPServerTransport, whose onmessage accessor forwards
// to the web-standard transport that actually dispatches incoming messages.
class DelegatingTransport {
  inner = new InnerTransport();
  sent: unknown[] = [];

  get onmessage() {
    return this.inner.onmessage;
  }

  set onmessage(handler: Handler | undefined) {
    this.inner.onmessage = handler;
  }

  async send(message: unknown) {
    this.sent.push(message);
  }
}

class PlainTransport {
  onmessage?: Handler;
  sent: unknown[] = [];

  receive(message: unknown) {
    this.onmessage?.(message);
  }

  async send(message: unknown) {
    this.sent.push(message);
  }
}

const initialize = {
  jsonrpc: "2.0",
  id: 1,
  method: "initialize",
  params: {
    protocolVersion: "2025-06-18",
    clientInfo: { name: "client", version: "1" },
  },
};

const initializeResult = {
  jsonrpc: "2.0",
  id: 1,
  result: {
    protocolVersion: "2025-06-18",
    serverInfo: { name: "server", version: "2" },
  },
};

function trackEvents<T extends DelegatingTransport | PlainTransport>(
  transport: T
) {
  const bodies: string[] = [];
  const tracked = trackMcpTransport(transport, {
    token: "test-token",
    fetch: async (_input, init) => {
      bodies.push(String(init?.body));
      return new Response(null, { status: 202 });
    },
  });
  return { tracked, bodies };
}

test("messages reach the handler of a transport whose onmessage delegates", async () => {
  const transport = new DelegatingTransport();
  const { tracked, bodies } = trackEvents(transport);
  const received: unknown[] = [];

  tracked.onmessage = (message) => {
    received.push(message);
    void tracked.send(initializeResult);
  };
  transport.inner.receive(initialize);
  await flushMcpEvents();

  expect(received).toEqual([initialize]);
  expect(transport.sent).toEqual([initializeResult]);
  expect(JSON.parse(bodies[0] ?? "")).toMatchObject({
    type: "mcp",
    events: [
      {
        method: "initialize",
        status: "ok",
        client: { name: "client", version: "1" },
        server: { name: "server", version: "2" },
      },
    ],
  });
});

test("a handler set before tracking keeps receiving delegated messages", () => {
  const transport = new DelegatingTransport();
  const received: unknown[] = [];
  transport.onmessage = (message) => received.push(message);

  trackEvents(transport);
  transport.inner.receive(initialize);

  expect(received).toEqual([initialize]);
});

test("clearing the handler clears it on the delegated transport", () => {
  const transport = new DelegatingTransport();
  const { tracked } = trackEvents(transport);

  tracked.onmessage = () => undefined;
  tracked.onmessage = undefined;

  expect(transport.inner.onmessage).toBeUndefined();
  expect(tracked.onmessage).toBeUndefined();
});

test("tracking a transport twice delivers and reports each message once", async () => {
  const transport = new PlainTransport();
  const received: unknown[] = [];
  transport.onmessage = (message) => received.push(message);

  const { bodies } = trackEvents(transport);
  trackEvents(transport);
  transport.receive(initialize);
  await transport.send(initializeResult);
  await flushMcpEvents();

  expect(received).toEqual([initialize]);
  expect(bodies).toHaveLength(1);
  expect(JSON.parse(bodies[0] ?? "").events).toHaveLength(1);
});

test("messages reach the handler of a transport with a plain onmessage field", () => {
  const transport = new PlainTransport();
  const { tracked } = trackEvents(transport);
  const received: unknown[] = [];

  tracked.onmessage = (message) => received.push(message);
  transport.receive(initialize);

  expect(received).toEqual([initialize]);
});
