import { expect, test } from "bun:test";

import { shouldTrackRequest, tagHtmlLinks, tagMarkdownResponse } from "../../src/geo.js";
import { tagMarkdownLinks } from "../../src/markdown.js";
import { createGeoHandler as createNetlifyHandler } from "../../src/netlify.js";
import { createGeoProxy } from "../../src/next.js";
import { toWebRequest } from "../../src/tracking/nuxt.js";

const AGENT = "Mozilla/5.0 (compatible; ChatGPT-User/1.0; +https://openai.com/bot)";

function recorder(response: () => Response = () => new Response(null, { status: 202 })) {
  const calls: string[] = [];
  const fetch = async (input: string | URL | Request) => {
    calls.push(String(input instanceof Request ? input.url : input));
    return response();
  };
  return { calls, fetch };
}

test("Nuxt: a malformed x-forwarded-proto header never throws", () => {
  const node = (headers: Record<string, string>, url = "/docs") => ({ node: { req: { method: "GET", url, headers } } });
  expect(toWebRequest(node({ host: "example.com", "x-forwarded-proto": "%%%" }))?.url).toBe("https://example.com/docs");
  expect(toWebRequest(node({ host: "example.com", "x-forwarded-proto": "HTTP, https" }))?.url).toBe("http://example.com/docs");
  expect(toWebRequest(node({ host: "example.com" }, "http://proxy.example/a"))?.url).toBe("http://proxy.example/a");
  expect(toWebRequest(node({ host: "bad host" }))).toBeNull();
});

test("links: /\\host counts as another host and keeps no journey id", () => {
  const html = '<a href="/\\evil.com/x">a</a><a href="/docs">b</a>';
  const tagged = tagHtmlLinks(html, "journey01", { host: "example.com" });
  expect(tagged).toContain('href="/\\evil.com/x"');
  expect(tagged).toContain('href="/docs?ntr=journey01"');
  const markdown = tagMarkdownLinks("[a](/\\evil.com/x) [b](/docs)", "journey01", { host: "example.com" });
  expect(markdown).toBe("[a](/\\evil.com/x) [b](/docs?ntr=journey01)");
});

test("Next: the internal tagging fetch is not tracked as a second visit", async () => {
  const ingest = recorder();
  const proxy = createGeoProxy({ token: "t", fetch: ingest.fetch });
  const inner = new Request("https://example.com/llms.txt", {
    headers: { "user-agent": AGENT, "x-notra-geo-tag": "1" },
  });
  expect(await proxy(inner)).toBeUndefined();
  await new Promise((resolve) => setTimeout(resolve, 0));
  expect(ingest.calls).toHaveLength(0);
});

test("tagging: a page that can't be tagged is answered as fetched, so the route runs once", async () => {
  const request = new Request("https://example.com/llms.txt", { headers: { "user-agent": AGENT } });
  const notFound = await tagMarkdownResponse(request, {}, {
    fetch: async () => new Response("missing", { status: 404, headers: { "content-type": "text/plain", "content-encoding": "gzip" } }),
  });
  expect(notFound?.status).toBe(404);
  expect(await notFound?.text()).toBe("missing");
  expect(notFound?.headers.has("content-encoding")).toBe(false);

  const binary = await tagMarkdownResponse(request, {}, {
    fetch: async () => new Response("PDF", { headers: { "content-type": "application/pdf" } }),
  });
  expect(binary?.headers.get("content-type")).toBe("application/pdf");
});

test("Netlify: without a token nothing is sent", () => {
  const ingest = recorder();
  createNetlifyHandler({ token: "", fetch: ingest.fetch })(new Request("https://example.com/", { headers: { "user-agent": AGENT } }));
  expect(ingest.calls).toHaveLength(0);
});

test("llms.txt is tracked even under an asset prefix", () => {
  const request = (path: string) => new Request(`https://example.com${path}`, { headers: { "user-agent": AGENT } });
  for (const path of ["/_next/static/llms.txt", "/llms-full.txt"]) {
    expect(shouldTrackRequest(request(path), new URL(request(path).url))).toBe(true);
  }
  const asset = request("/_next/static/chunk.js");
  expect(shouldTrackRequest(asset, new URL(asset.url))).toBe(false);
});
