import { expect, test } from "bun:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { createGeoMiddleware as astroMiddleware } from "../src/astro.js";
import { submitFeedback } from "../src/feedback.js";
import { Tracker, tagHtmlLinks, tagMarkdownResponse } from "../src/geo.js";
import { tagMarkdownLinks } from "../src/markdown.js";
import { flushMcpEvents, trackMcpTransport } from "../src/mcp.js";
import { createGeoHandler as netlifyHandler } from "../src/netlify.js";
import { createGeoProxy } from "../src/next.js";
import { NotraAnalytics } from "../src/react.js";
import { NOTRA_SCRIPT_PLUS_RELEASE, NOTRA_SCRIPT_RELEASE, notraScriptTag } from "../src/script.js";
import { toWebRequest } from "../src/tracking/nuxt.js";

const AGENT = "Mozilla/5.0 (compatible; ChatGPT-User/1.0; +https://openai.com/bot)";
const BROWSER = "Mozilla/5.0 Chrome/130.0.0.0 Safari/537.36";
const JOURNEY = "journey01";

function ingest() {
  const bodies: Array<Record<string, unknown>> = [];
  const fetch = async (_input: string | URL | Request, init?: RequestInit) => {
    bodies.push(JSON.parse(String(init?.body)) as Record<string, unknown>);
    return new Response(null, { status: 202 });
  };
  return { bodies, fetch };
}

const page = (path: string, headers: Record<string, string> = { "user-agent": BROWSER }) =>
  new Request(`https://example.com${path}`, { headers });

test("the script tag loads the pinned build with its integrity unless told otherwise", () => {
  const webKey = "nwk.org.project.0000";
  const base = `data-key="${webKey}" data-api="https://ingest.usenotra.com/api/collect"`;
  expect(notraScriptTag({ webKey })).toBe(
    `<script defer src="https://static.usenotra.com/${NOTRA_SCRIPT_RELEASE.file}" ${base} integrity="${NOTRA_SCRIPT_RELEASE.integrity}" crossorigin="anonymous"></script>`
  );
  expect(notraScriptTag({ webKey, errors: true })).toContain(`${NOTRA_SCRIPT_PLUS_RELEASE.file}"`);
  expect(notraScriptTag({ webKey, pinned: false, hash: true })).toBe(
    `<script defer src="https://static.usenotra.com/notra.js" ${base} data-hash></script>`
  );
  expect(notraScriptTag({ webKey, endpoint: "https://stats.example/" })).toContain('src="https://stats.example/api/notra.');
  expect(notraScriptTag({ webKey, api: '"><x' })).toContain('data-api="&quot;&gt;&lt;x"');
  expect(() => notraScriptTag({ webKey: "secret" })).toThrow("nwk.");

  expect(renderToStaticMarkup(createElement(NotraAnalytics, { webKey }))).toBe(
    `<script src="https://static.usenotra.com/${NOTRA_SCRIPT_RELEASE.file}" ${base} integrity="${NOTRA_SCRIPT_RELEASE.integrity}" crossorigin="anonymous" async=""></script>`
  );
  expect(renderToStaticMarkup(createElement(NotraAnalytics, { webKey: "", disabled: true }))).toBe("");
});

test("the tracker sends pages and llms.txt, but not assets, and nothing without a token", async () => {
  const { bodies, fetch } = ingest();
  const tracker = new Tracker({ token: "t", fetch, exclude: [/^\/private/g] });
  for (const path of ["/docs", "/_next/static/llms.txt", "/_next/static/chunk.js", "/logo.png", "/private", "/private"]) {
    await tracker.track(page(path, { "user-agent": BROWSER, "sec-fetch-mode": "navigate" }));
  }
  expect(bodies.map((body) => body["url"])).toEqual(["https://example.com/docs", "https://example.com/_next/static/llms.txt"]);
  expect(bodies[0]).toMatchObject({ method: "GET", signals: { fetchMode: "navigate", prefetch: false } });

  const silent = ingest();
  await new Tracker({ token: "", fetch: silent.fetch }).track(page("/docs"));
  netlifyHandler({ token: "", fetch: silent.fetch })(page("/docs"));
  expect(silent.bodies).toHaveLength(0);
});

test("tracking failures never break the page", async () => {
  const response = new Response("page");
  const failing = async () => {
    throw new Error("network unavailable");
  };
  const errors: unknown[] = [];
  const served = await astroMiddleware({ token: "t", fetch: failing, onError: (error) => errors.push(error) })(
    { request: page("/") },
    async () => response
  );
  expect(served).toBe(response);
  expect(errors).toHaveLength(1);

  const node = (headers: Record<string, string>, url = "/docs") => ({ node: { req: { method: "GET", url, headers } } });
  expect(toWebRequest(node({ host: "example.com", "x-forwarded-proto": "%%%" }))?.url).toBe("https://example.com/docs");
  expect(toWebRequest(node({ host: "example.com", "x-forwarded-proto": "HTTP, https" }))?.url).toBe("http://example.com/docs");
  expect(toWebRequest(node({ host: "example.com" }, "http://proxy.example/a"))?.url).toBe("http://proxy.example/a");
  expect(toWebRequest(node({ host: "bad host" }))).toBeNull();
});

test.each([
  ["[a](/x)", "[a](/x?ntr=journey01)"],
  ['[t](/x "Title") ![img](/i.png)', '[t](/x?ntr=journey01 "Title") ![img](/i.png)'],
  ["[guide](/docs/v1_(legacy))", "[guide](/docs/v1_(legacy)?ntr=journey01)"],
  ["[API [v2]](/docs) [a](/x#s?ntr=old)", "[API [v2]](/docs?ntr=journey01) [a](/x?ntr=journey01#s?ntr=old)"],
  ["[ref]: /docs\n", "[ref]: /docs?ntr=journey01\n"],
  ["\\[escaped](/x)", "\\[escaped](/x)"],
  ["[ext](https://other.com/x) [evil](/\\evil.com/x)", "[ext](https://other.com/x) [evil](/\\evil.com/x)"],
  ["`` [a](/x) `` [b](/y)", "`` [a](/x) `` [b](/y?ntr=journey01)"],
  ["```js\nconst s = `[a](/x)`;\n```\n[c](/z)", "```js\nconst s = `[a](/x)`;\n```\n[c](/z?ntr=journey01)"],
  ["~~~~\n```\n[a](/x)\n~~~~\n[b](/y)", "~~~~\n```\n[a](/x)\n~~~~\n[b](/y?ntr=journey01)"],
  ["```\n[unclosed](/x)", "```\n[unclosed](/x)"],
])("Markdown %j", (input, expected) => {
  expect(tagMarkdownLinks(input, JOURNEY, { host: "example.com" })).toBe(expected);
});

test.each([
  ['<a href="/x">', '<a href="/x?ntr=journey01">'],
  ["<a href='/x?a=1&amp;b=2'>", "<a href='/x?a=1&amp;b=2&amp;ntr=journey01'>"],
  ['<a href=" /x ">', '<a href=" /x?ntr=journey01 ">'],
  ['<a data-x=" href=\'/bad\'" href="/real">', '<a data-x=" href=\'/bad\'" href="/real?ntr=journey01">'],
  ['<a href="https://other.com/x"><a href="/\\evil.com/x">', '<a href="https://other.com/x"><a href="/\\evil.com/x">'],
  ['<script>"<a href="/x">"</script><!-- <a href="/c"> --><a HREF="/y">', '<script>"<a href="/x">"</script><!-- <a href="/c"> --><a HREF="/y?ntr=journey01">'],
  ['İİ<SCRIPT><a href="/x"></SCRIPT><a href="/y">', 'İİ<SCRIPT><a href="/x"></SCRIPT><a href="/y?ntr=journey01">'],
])("HTML %j", (input, expected) => {
  expect(tagHtmlLinks(input, JOURNEY, { host: "example.com" })).toBe(expected);
});

test("tagLinks answers agents with tagged Markdown, the route runs once, and visitors can't hide", async () => {
  const sent = ingest();
  const origin: Request[] = [];
  const fetch = async (input: string | URL | Request, init?: RequestInit) => {
    if (String(input).includes("/api/geo/ingest")) {
      return sent.fetch(input, init);
    }
    origin.push(new Request(String(input), init));
    return new Response("[docs](/docs)", { headers: { "content-type": "text/markdown", "content-encoding": "gzip" } });
  };
  const proxy = createGeoProxy({ token: "t", tagLinks: true, fetch });

  const tagged = await proxy(page("/llms.txt", { "user-agent": AGENT }));
  expect(await tagged?.text()).toMatch(/^\[docs\]\(\/docs\?ntr=[\w-]+\)$/);
  expect(tagged?.headers.has("content-encoding")).toBe(false);
  expect(tagged?.headers.get("cache-control")).toBe("private, no-store");

  // The proxy's own fetch carries a guard derived from the token and isn't counted again.
  const guard = origin[0]?.headers.get("x-notra-geo-tag") ?? "";
  expect(guard).toMatch(/^[0-9a-f]{32}$/);
  expect(await proxy(page("/llms.txt", { "user-agent": AGENT, "x-notra-geo-tag": guard }))).toBeUndefined();
  // A visitor sending a made-up guard is still counted.
  await proxy(page("/docs", { "user-agent": BROWSER, "x-notra-geo-tag": "1" }));
  await new Promise((resolve) => setTimeout(resolve, 0));
  expect(sent.bodies.map((body) => body["url"])).toEqual(["https://example.com/llms.txt", "https://example.com/docs"]);

  // A page that can't be tagged is answered as fetched instead of running the route again.
  const missing = await tagMarkdownResponse(page("/llms.txt", { "user-agent": AGENT }), {}, {
    fetch: async () => new Response("missing", { status: 404, headers: { "content-type": "text/plain" } }),
  });
  expect([missing?.status, await missing?.text()]).toEqual([404, "missing"]);
});

test("MCP analytics wraps any transport once and reports each request", async () => {
  type Handler = (message: unknown) => void;
  class Inner {
    onmessage?: Handler | undefined;
  }
  // Like the SDK's Streamable HTTP transport, onmessage forwards to an inner transport.
  class Delegating {
    inner = new Inner();
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
  const { bodies, fetch } = ingest();
  const transport = new Delegating();
  const tracked = trackMcpTransport(trackMcpTransport(transport, { token: "t", fetch }), { token: "t", fetch });
  const received: unknown[] = [];
  tracked.onmessage = (message) => received.push(message);

  const initialize = { jsonrpc: "2.0", id: 1, method: "initialize", params: { clientInfo: { name: "client", version: "1" } } };
  transport.inner.onmessage?.(initialize);
  await tracked.send({ jsonrpc: "2.0", id: 1, result: { serverInfo: { name: "server", version: "2" } } });
  await flushMcpEvents();

  expect(received).toEqual([initialize]);
  expect(bodies).toHaveLength(1);
  expect(bodies[0]).toMatchObject({ type: "mcp", events: [{ method: "initialize", status: "ok", client: { name: "client" }, server: { name: "server" } }] });
});

test("feedback is sent with its source", async () => {
  let body: unknown;
  await submitFeedback(
    { message: "Great docs" },
    {
      url: "https://api.usenotra.com/v1/feedback/inbox_1",
      fetch: async (_input, init) => {
        body = JSON.parse(String(init?.body));
        return new Response(JSON.stringify({ feedback: { id: "f1" }, deduplicated: false }), { status: 201 });
      },
    }
  );
  expect(body).toEqual({ source: "sdk", message: "Great docs" });
});
