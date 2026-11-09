import { describe, expect, test } from "bun:test";

import {
  Notra,
  NotraAPIError,
  NotraConnectionError,
  NotraRateLimitError,
  NotraStream,
  NotraTimeoutError,
  VERSION,
  type NotraOptions,
} from "../../src/index.js";

interface Call {
  url: URL;
  init: RequestInit;
  headers: Headers;
}

function client(responses: Array<Response | Error | (() => Promise<Response>)>, options: NotraOptions = {}) {
  const calls: Call[] = [];
  const fetch = async (input: RequestInfo | URL, init: RequestInit = {}) => {
    calls.push({ url: new URL(String(input)), init, headers: new Headers(init.headers) });
    const next = responses.shift();
    if (next === undefined) {
      throw new Error("No response left");
    }
    if (next instanceof Error) {
      throw next;
    }
    return typeof next === "function" ? next() : next;
  };
  const notra = new Notra({ apiKey: "ntr_test", fetch: fetch as typeof globalThis.fetch, ...options });
  return { notra, calls };
}

const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", ...headers } });

describe("requests", () => {
  test("sends the API key, the workspace and a JSON accept header", async () => {
    const { notra, calls } = client([json({ status: "ok" })], { organization: "acme" });
    expect(await notra.discovery.getPublicApiStatus()).toEqual({ status: "ok" } as never);
    const [call] = calls;
    expect(call?.url.toString()).toBe("https://api.usenotra.com/v1/status");
    expect(call?.init.method).toBe("GET");
    expect(call?.headers.get("authorization")).toBe("Bearer ntr_test");
    expect(call?.headers.get("x-notra-organization-id")).toBe("acme");
    expect(call?.headers.get("accept")).toBe("application/json");
    expect(call?.headers.get("user-agent")).toBe(`@usenotra/sdk/${VERSION}`);
  });

  test("apiKey can be a function, asked again for every attempt", async () => {
    let issued = 0;
    const { notra, calls } = client([json({ error: "Busy" }, 503, { "retry-after": "0" }), json({})], {
      apiKey: async () => `token_${++issued}`,
    });
    await notra.discovery.getPublicApiStatus();
    expect(calls.map((call) => call.headers.get("authorization"))).toEqual(["Bearer token_1", "Bearer token_2"]);
  });

  test("fills and encodes path parameters, and serializes query parameters", async () => {
    const { notra, calls } = client([json({}), json({})]);
    await notra.content.getPost({ postId: "a b/c" });
    await notra.content.listPosts({ limit: 10, page: 2, sort: "desc" });
    expect(calls[0]?.url.pathname).toBe("/v1/posts/a%20b%2Fc");
    expect(Object.fromEntries(calls[1]?.url.searchParams ?? [])).toEqual({ limit: "10", page: "2", sort: "desc" });
  });

  test("sends the body as JSON and skips undefined query values", async () => {
    const { notra, calls } = client([json({ post: {} }, 201)]);
    await notra.content.createPost({ body: { title: "Hello" } as never });
    expect(calls[0]?.init.method).toBe("POST");
    expect(calls[0]?.headers.get("content-type")).toBe("application/json");
    expect(JSON.parse(String(calls[0]?.init.body))).toEqual({ title: "Hello" });
  });

  test("environment and baseUrl choose the host", async () => {
    const sandbox = client([json({})], { environment: "sandbox" });
    await sandbox.notra.discovery.getPublicApiStatus();
    expect(sandbox.calls[0]?.url.origin).toBe("https://demo-api.usenotra.com");
    const proxy = client([json({})], { environment: "sandbox", baseUrl: "https://proxy.example/notra/" });
    await proxy.notra.discovery.getPublicApiStatus();
    expect(proxy.calls[0]?.url.toString()).toBe("https://proxy.example/notra/v1/status");
  });

  test("a missing path parameter fails before any request", async () => {
    const { notra, calls } = client([]);
    await expect(notra.content.getPost({ postId: "" })).rejects.toThrow('Missing path parameter "postId"');
    expect(calls).toHaveLength(0);
  });

  test("trailing slashes on baseUrl are ignored", async () => {
    const { notra, calls } = client([json({})], { baseUrl: "https://proxy.example////" });
    await notra.discovery.getPublicApiStatus();
    expect(calls[0]?.url.toString()).toBe("https://proxy.example/v1/status");
  });

  test("request() turns a malformed success body into a NotraError", async () => {
    const { notra } = client([new Response("<html>", { status: 200 })]);
    await expect(notra.request("GET", "/v1/new")).rejects.toThrow("Expected JSON");
  });

  test("request() reaches endpoints the SDK doesn't know yet", async () => {
    const { notra, calls } = client([json({ ok: true })]);
    expect(await notra.request("GET", "/v1/new", { query: { a: 1 } })).toEqual({ ok: true });
    expect(calls[0]?.url.toString()).toBe("https://api.usenotra.com/v1/new?a=1");
  });
});

describe("errors", () => {
  test("non-2xx answers throw NotraAPIError with the API's code, recovery and request id", async () => {
    const { notra } = client([
      json({ error: "Missing API key", code: "MISSING_API_KEY", recovery: "Send a key" }, 401, { "x-request-id": "req_1" }),
    ]);
    const error = await notra.discovery.getPublicApiStatus().catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(NotraAPIError);
    expect(error).toMatchObject({ status: 401, message: "Missing API key", code: "MISSING_API_KEY", recovery: "Send a key", requestId: "req_1" });
  });

  test("a non-JSON error body is kept as text", async () => {
    const { notra } = client([new Response("Bad gateway", { status: 400 })]);
    const error = (await notra.discovery.getPublicApiStatus().catch((caught: unknown) => caught)) as NotraAPIError;
    expect(error.body).toBe("Bad gateway");
    expect(error.message).toBe("Request failed with status 400");
  });

  test("a network failure is a NotraConnectionError", async () => {
    const { notra } = client([new TypeError("fetch failed")], { maxRetries: 0 });
    await expect(notra.discovery.getPublicApiStatus()).rejects.toBeInstanceOf(NotraConnectionError);
  });

  test("timeoutMs aborts a slow request with NotraTimeoutError", async () => {
    const slow = () =>
      new Promise<Response>((_resolve, reject) => {
        setTimeout(() => reject(new DOMException("aborted", "AbortError")), 50);
      });
    const { notra } = client([slow], { timeoutMs: 10, maxRetries: 0 });
    await expect(notra.discovery.getPublicApiStatus()).rejects.toBeInstanceOf(NotraTimeoutError);
  });
});

describe("retries", () => {
  test("429 waits for Retry-After, then succeeds", async () => {
    const { notra, calls } = client([json({ error: "Slow down", limit: 1, remaining: 0, reset: 1 }, 429, { "retry-after": "0" }), json({ status: "ok" })]);
    expect(await notra.discovery.getPublicApiStatus()).toEqual({ status: "ok" } as never);
    expect(calls).toHaveLength(2);
  });

  test("after the last retry a 429 throws NotraRateLimitError with the window", async () => {
    const limited = () => json({ error: "Slow down", limit: 120, remaining: 0, reset: 42 }, 429, { "retry-after": "0" });
    const { notra, calls } = client([limited(), limited()], { maxRetries: 1 });
    const error = await notra.discovery.getPublicApiStatus().catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(NotraRateLimitError);
    expect(error).toMatchObject({ limit: 120, remaining: 0, reset: 42 });
    expect(calls).toHaveLength(2);
  });

  test("503 is retried for GET but never for POST, which may have run", async () => {
    const get = client([json({ error: "Busy" }, 503, { "retry-after": "0" }), json({})]);
    await get.notra.content.getPost({ postId: "p" });
    expect(get.calls).toHaveLength(2);

    const post = client([json({ error: "Busy" }, 503, { "retry-after": "0" })]);
    await expect(post.notra.content.createPost({ body: { title: "x" } as never })).rejects.toMatchObject({ status: 503 });
    expect(post.calls).toHaveLength(1);
  });

  test("5xx is retried for GET but never for POST", async () => {
    const get = client([json({ error: "Down" }, 502, { "retry-after": "0" }), json({})]);
    await get.notra.content.getPost({ postId: "p" });
    expect(get.calls).toHaveLength(2);

    const post = client([json({ error: "Down" }, 502, { "retry-after": "0" })]);
    await expect(post.notra.content.createPost({ body: { title: "x" } as never })).rejects.toMatchObject({ status: 502 });
    expect(post.calls).toHaveLength(1);
  });

  test("network failures are retried only for methods safe to repeat", async () => {
    const get = client([new TypeError("fetch failed"), json({})]);
    await get.notra.content.getPost({ postId: "p" });
    expect(get.calls).toHaveLength(2);

    const post = client([new TypeError("fetch failed")]);
    await expect(post.notra.content.createPost({ body: { title: "x" } as never })).rejects.toBeInstanceOf(NotraConnectionError);
    expect(post.calls).toHaveLength(1);
  });

  test("an aborted signal stops without retrying", async () => {
    const controller = new AbortController();
    controller.abort();
    const { notra, calls } = client([new DOMException("aborted", "AbortError")]);
    await expect(notra.discovery.getPublicApiStatus({ signal: controller.signal })).rejects.toBeInstanceOf(NotraConnectionError);
    expect(calls).toHaveLength(1);
  });
});

describe("streams", () => {
  const body = (text: string) =>
    new ReadableStream<Uint8Array>({
      start(controller) {
        const bytes = new TextEncoder().encode(text);
        // Split mid-line to prove events survive chunk boundaries.
        controller.enqueue(bytes.slice(0, 7));
        controller.enqueue(bytes.slice(7));
        controller.close();
      },
    });

  test("chat endpoints yield each server-sent event and stop at [DONE]", async () => {
    const sse = 'data: {"type":"start"}\n\ndata: {"type":"text-delta","delta":"Hi"}\n\ndata: [DONE]\n\n';
    const { notra, calls } = client([new Response(body(sse), { headers: { "content-type": "text/event-stream", "x-chat-id": "c1" } })]);
    const stream = await notra.chats.createChat({ body: { message: "Hello" } });
    expect(stream).toBeInstanceOf(NotraStream);
    expect(stream.response.headers.get("x-chat-id")).toBe("c1");
    expect(calls[0]?.headers.get("accept")).toBe("text/event-stream");
    const events = [];
    for await (const event of stream) {
      events.push(event);
    }
    expect(events).toEqual([{ type: "start" }, { type: "text-delta", delta: "Hi" }]);
    expect(() => stream.toReadableStream()).toThrow("already consumed");
  });

  test("CR and CRLF line endings work, even split across chunks", async () => {
    const chunks = ['data: {"type":"a"}\r', '\r', 'data: {"type":"b"}\r', '\n\r\ndata: {"type":"c"}\r\r'];
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        for (const chunk of chunks) {
          controller.enqueue(new TextEncoder().encode(chunk));
        }
        controller.close();
      },
    });
    const { notra } = client([new Response(stream, { headers: { "content-type": "text/event-stream" } })]);
    const events = [];
    for await (const event of await notra.chats.createChat({ body: { message: "Hi" } })) {
      events.push(event.type);
    }
    expect(events).toEqual(["a", "b", "c"]);
  });

  test("breaking out of a stream cancels the response", async () => {
    let cancelled = false;
    const endless = new ReadableStream<Uint8Array>({
      pull(controller) {
        controller.enqueue(new TextEncoder().encode('data: {"type":"tick"}\n\n'));
      },
      cancel() {
        cancelled = true;
      },
    });
    const { notra } = client([new Response(endless, { headers: { "content-type": "text/event-stream" } })]);
    for await (const event of await notra.chats.createChat({ body: { message: "Hi" } })) {
      expect(event.type).toBe("tick");
      break;
    }
    expect(cancelled).toBe(true);
  });

  test("agent sessions yield each NDJSON line", async () => {
    const ndjson = '{"type":"a"}\n{"type":"b"}\n';
    const { notra } = client([new Response(body(ndjson), { headers: { "content-type": "application/x-ndjson" } })]);
    const events = [];
    for await (const event of await notra.agent.streamAgentSessionEvents({ sessionId: "s1" })) {
      events.push(event.type);
    }
    expect(events).toEqual(["a", "b"]);
  });
});
