import { expect, test } from "bun:test";

import {
  Notra,
  NotraAPIError,
  NotraConnectionError,
  NotraRateLimitError,
  NotraTimeoutError,
  VERSION,
  type NotraOptions,
} from "../src/index.js";

type Reply = Response | Error | (() => Promise<Response>);

function client(replies: Reply[], options: NotraOptions = {}) {
  const calls: Array<{ url: URL; init: RequestInit; headers: Headers }> = [];
  const fetch = async (input: string | URL | Request, init: RequestInit = {}) => {
    calls.push({ url: new URL(String(input)), init, headers: new Headers(init.headers) });
    const reply = replies.shift();
    if (reply === undefined || reply instanceof Error) {
      throw reply ?? new Error("No reply left");
    }
    return typeof reply === "function" ? reply() : reply;
  };
  return { notra: new Notra({ apiKey: "ntr_test", fetch, ...options }), calls };
}

const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", ...headers } });
const busy = (status: number) => json({ error: "Busy", limit: 1, remaining: 0, reset: 9 }, status, { "retry-after": "0" });

test("builds each request from the method's parameters and the client options", async () => {
  let token = 0;
  const { notra, calls } = client([json({ post: null }), json({ posts: [] }), json({}, 201)], {
    apiKey: async () => `token_${++token}`,
    organization: "acme",
    baseUrl: "https://proxy.example/notra//",
  });
  await notra.content.getPost({ postId: "a b/c" });
  await notra.content.listPosts({ limit: 10, sort: "desc" });
  await notra.content.createPost({ body: { title: "Hi", contentType: "changelog" } });

  expect(calls.map((call) => `${call.init.method} ${call.url}`)).toEqual([
    "GET https://proxy.example/notra/v1/posts/a%20b%2Fc",
    "GET https://proxy.example/notra/v1/posts?sort=desc&limit=10",
    "POST https://proxy.example/notra/v1/posts",
  ]);
  expect(calls.map((call) => call.headers.get("authorization"))).toEqual(["Bearer token_1", "Bearer token_2", "Bearer token_3"]);
  expect(calls[0]?.headers.get("x-notra-organization-id")).toBe("acme");
  expect(calls[0]?.headers.get("user-agent")).toBe(`@usenotra/sdk/${VERSION}`);
  expect(JSON.parse(String(calls[2]?.init.body))).toEqual({ title: "Hi", contentType: "changelog" });
  await expect(notra.content.getPost({ postId: "" })).rejects.toThrow('Missing path parameter "postId"');
  expect(calls).toHaveLength(3);
});

test("sandbox environment and request() for endpoints the SDK doesn't know yet", async () => {
  const { notra, calls } = client([json({ ok: true }), new Response("<html>")], { environment: "sandbox" });
  expect(await notra.request("GET", "/v1/new", { query: { a: 1 } })).toEqual({ ok: true });
  expect(calls[0]?.url.toString()).toBe("https://demo-api.usenotra.com/v1/new?a=1");
  await expect(notra.request("GET", "/v1/new")).rejects.toThrow("Expected JSON");
});

test("failures become typed errors", async () => {
  const slow = () => new Promise<Response>((_resolve, reject) => setTimeout(() => reject(new Error("aborted")), 50));
  const { notra } = client(
    [
      json({ error: "Missing API key", code: "MISSING_API_KEY", recovery: "Send a key" }, 401, { "x-request-id": "req_1" }),
      busy(429),
      new TypeError("fetch failed"),
      slow,
    ],
    { maxRetries: 0, timeoutMs: 10 }
  );
  const status = () => notra.discovery.getPublicApiStatus().catch((error: unknown) => error);

  const unauthorized = await status();
  expect(unauthorized).toBeInstanceOf(NotraAPIError);
  expect(unauthorized).toMatchObject({ status: 401, message: "Missing API key", code: "MISSING_API_KEY", recovery: "Send a key", requestId: "req_1" });
  expect(await status()).toBeInstanceOf(NotraRateLimitError);
  expect(await status()).toBeInstanceOf(NotraConnectionError);
  expect(await status()).toBeInstanceOf(NotraTimeoutError);
});

test("retries 429 for every method, but 5xx and network failures only when repeating is safe", async () => {
  const get = client([new TypeError("fetch failed"), busy(429), busy(503), json({ status: "ok" })], { maxRetries: 3 });
  expect(await get.notra.discovery.getPublicApiStatus()).toEqual({ status: "ok" } as never);
  expect(get.calls).toHaveLength(4);

  const post = client([busy(429), busy(503)], { maxRetries: 3 });
  const body = { title: "Hi", contentType: "changelog" } as const;
  await expect(post.notra.content.createPost({ body })).rejects.toMatchObject({ status: 503 });
  expect(post.calls).toHaveLength(2);
});

test("streams parse SSE and NDJSON across chunks, and stopping early closes the response", async () => {
  const chunked = (...chunks: string[]) =>
    new ReadableStream<Uint8Array>({
      start(controller) {
        for (const chunk of chunks) controller.enqueue(new TextEncoder().encode(chunk));
        controller.close();
      },
    });
  let cancelled = false;
  const endless = new ReadableStream<Uint8Array>({
    pull: (controller) => controller.enqueue(new TextEncoder().encode('data: {"type":"tick"}\n\n')),
    cancel: () => {
      cancelled = true;
    },
  });
  const { notra } = client([
    new Response(chunked('data: {"type":"start"}\r', '\n\r\ndata: {"type":"text-del', 'ta","delta":"Hi"}\r\rdata: [DONE]\n\n'), {
      headers: { "x-chat-id": "c1" },
    }),
    new Response(chunked('{"type":"a"}\n{"ty', 'pe":"b"}\n[DONE]')),
    new Response(endless),
  ]);

  const chat = await notra.chats.createChat({ body: { message: "Hi" } });
  expect(chat.response.headers.get("x-chat-id")).toBe("c1");
  const chunks = [];
  for await (const chunk of chat) chunks.push(chunk);
  expect(chunks).toEqual([{ type: "start" }, { type: "text-delta", delta: "Hi" }]);
  expect(() => chat.toReadableStream()).toThrow("already consumed");

  const events = [];
  for await (const event of await notra.agent.streamAgentSessionEvents({ sessionId: "s1" })) events.push(event.type);
  expect(events).toEqual(["a", "b"]);

  for await (const _ of await notra.chats.createChat({ body: { message: "Hi" } })) break;
  expect(cancelled).toBe(true);
});
