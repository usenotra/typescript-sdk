# AI traffic and web analytics

The tracking side of `@usenotra/sdk`: server middleware for AI traffic attribution, agent feedback, MCP server analytics and the notra.js web analytics script. Each lives at its own import path, so importing one never pulls in the API client or the others.

The AI traffic middleware captures every page request your
site serves and sends a neutral request envelope to Notra. All classification, crawler
versus AI referral versus human, happens server side at ingest, so a stale local table
never costs you traffic. Requests classified as human are discarded at ingest and never
stored. The core tracker ships no signature table. The Next.js adapter
(`@usenotra/sdk/next`) bundles the matcher for its optional `tagLinks`, because it has to
decide at the edge which responses to rewrite for AI agents.

No runtime dependencies. No Node APIs in the core, so it runs on edge runtimes.

## Install

```bash
bun add @usenotra/sdk
```

## Next.js

```ts
// proxy.ts on Next.js 16, middleware.ts before that
import { createGeoProxy } from "@usenotra/sdk/next";
import { NextResponse } from "next/server";

const geo = createGeoProxy({ token: process.env.NOTRA_GEO_TOKEN ?? "" });

export function proxy(request: Request, event: { waitUntil(p: Promise<unknown>): void }) {
  geo(request, event);
  return NextResponse.next();
}
```

`geo(request, event)` never throws and never blocks the response. When an event with
`waitUntil` is passed, the send is registered on it so it survives the response.

## Nuxt and Nitro

```ts
// server/middleware/geo.ts
import { createGeoHandler } from "@usenotra/sdk/nuxt";

const geo = createGeoHandler({ token: process.env.NOTRA_GEO_TOKEN ?? "" });

export default defineEventHandler(async (event) => {
  await geo(event);
});
```

The handler accepts an H3 event with a `node.req`, or any object exposing a standard
web `request`. Geo headers are usually absent behind Nitro, so those fields stay
undefined and ingest falls back to IP based lookup.

## TanStack Start

```ts
// src/start.ts
import { createMiddleware, createStart } from "@tanstack/react-start";
import { createGeoMiddleware } from "@usenotra/sdk/tanstack";

const geo = createMiddleware().server(createGeoMiddleware({
  token: process.env.NOTRA_GEO_TOKEN!,
  endpoint: "https://ingest.usenotra.com",
}));

export const startInstance = createStart(() => ({
  requestMiddleware: [geo],
}));
```

The middleware captures requests alongside your route handler and waits for the send before returning, so tracking completes on serverless hosts. It preserves the downstream response and errors. If `src/start.ts` already exists, add `geo` to its existing `requestMiddleware` array.

## Astro

```ts
// src/middleware.ts
import { createGeoMiddleware } from "@usenotra/sdk/astro";

export const onRequest = createGeoMiddleware({
  token: import.meta.env.NOTRA_GEO_TOKEN ?? "",
  endpoint: "https://ingest.usenotra.com",
});
```

The middleware captures requests alongside your route handler and waits for the send before returning. If `src/middleware.ts` already exists, compose with `sequence` from `astro:middleware`. Astro must serve pages from a server adapter (`output: "server"` or hybrid) so requests exist at runtime; a static build has nothing to capture after deploy.

## SvelteKit

```ts
// src/hooks.server.ts
import { env } from "$env/dynamic/private";
import { createGeoHandle } from "@usenotra/sdk/sveltekit";

export const handle = createGeoHandle({
  token: env.NOTRA_GEO_TOKEN ?? "",
  endpoint: "https://ingest.usenotra.com",
});
```

The handle captures requests alongside `resolve` and waits for the send before returning. If `src/hooks.server.ts` already has a `handle`, compose with `sequence` from `@sveltejs/kit/hooks`.

## React Router

```ts
// app/root.tsx
import { createGeoMiddleware } from "@usenotra/sdk/react-router";
import type { Route } from "./+types/root";

const geo = createGeoMiddleware({
  token: process.env.NOTRA_GEO_TOKEN!,
  endpoint: "https://ingest.usenotra.com",
});

export const middleware: Route.MiddlewareFunction[] = [geo];
```

The middleware sends the event after `next()` returns, so the response never waits on it. Long-running Node servers need nothing extra. On serverless hosts pass the host's `waitUntil` so the send outlives the response, for example `import { waitUntil } from "@vercel/functions"` on Vercel or `import { waitUntil } from "cloudflare:workers"` on Cloudflare. React Router 8 always runs middleware; on React Router 7.9 or later set `future: { v8_middleware: true }` in `react-router.config.ts`.

## Netlify Edge Functions

```ts
// netlify/edge-functions/geo.ts
import { createGeoHandler } from "@usenotra/sdk/netlify";

const geo = createGeoHandler({ token: Deno.env.get("NOTRA_GEO_TOKEN") ?? "" });

export default (request: Request, context: Context) => {
  geo(request, context);
};

export const config = { path: "/*" };
```

Netlify's `context.geo` is mapped into the envelope and `context.waitUntil` keeps the
send alive.

## Options

| Option | Default | Meaning |
| --- | --- | --- |
| `token` | required | Per organization ingest token |
| `endpoint` | `https://ingest.usenotra.com` | Ingest origin, the SDK appends `/api/geo/ingest` |
| `exclude` | `["/api"]` | Paths to skip. Pass `[]` to disable |
| `sample` | `1` | Fraction of eligible requests to send, 0 to 1 |
| `onError` | none | Called for network failures and non-success HTTP responses, including 401, 429 and 502. The SDK never throws |
| `fetch` | global `fetch` | Injectable fetch, for tests |
| `waitUntil` | none | React Router only. Keeps the send alive after the response on serverless hosts |

Requests go directly to `https://ingest.usenotra.com` when `endpoint` is omitted.
The SDK does not automatically retry through the dashboard. To switch back to
the dashboard ingestion route, set `endpoint: "https://app.usenotra.com"` and
redeploy your site. Self-hosted installations must set `endpoint` to their own
ingestion origin.

### What gets captured

Only `GET` requests that look like pages. Asset requests are skipped: anything under
`/_next/`, `/_nuxt/`, `/_vercel/`, `/_astro/`, `/_app/immutable/`, `/static/`, and any path ending in a
common static extension such as `.css`, `.js`, `.png`, `.svg`, `.xml` or `.txt`.
`llms.txt` and `llms-full.txt` are the exception: they are always captured.

`exclude` entries can be:

- a string, matching that path and everything below it, so `"/api"` also excludes
  `/api/users`
- a `RegExp`, tested against the pathname
- a function `(request, url) => boolean`

Passing `exclude: []` removes the default and captures every page path.

## Payload

Each capture POSTs this JSON to `${endpoint}/api/geo/ingest` with an
`authorization: Bearer <token>` header, `keepalive`, and a 2 second timeout.

```ts
type GeoRequestPayload = {
  timestamp?: string;
  method: string;
  url: string;
  ip?: string;
  geo?: {
    country?: string;
    region?: string;
    city?: string;
    timezone?: string;
    latitude?: string;
    longitude?: string;
  };
  referer?: string;
  userAgent?: string;
  accept?: string;
  acceptLanguage?: string;
  requestId?: string;
};
```

`ip` comes from the first entry of `x-forwarded-for`, then `x-real-ip`, then
`x-vercel-forwarded-for`. `geo` comes from the `x-vercel-ip-*` headers with
`cf-ipcountry` as a country fallback, or from the platform context on Netlify.
`requestId` comes from `x-request-id` or `x-vercel-id`.

No request body, no cookies, and no headers beyond the ones listed above are ever
read or sent.

## Journey attribution for markdown

`@usenotra/sdk/markdown` tags the links you hand to an agent so every follow up
request is attributed to the same crawl session. Links carry a short `ntr` id,
and the ingest side stores it as the journey for that visit.

```ts
import {
  getJourneyId,
  mintJourneyId,
  tagMarkdownLinks,
} from "@usenotra/sdk/markdown";

export async function GET(request: Request) {
  const markdown = await readMarkdown();
  const journeyId = getJourneyId(request) ?? mintJourneyId();

  return new Response(
    tagMarkdownLinks(markdown, journeyId, { host: "example.com" }),
    { headers: { "content-type": "text/markdown; charset=utf-8" } }
  );
}
```

- `mintJourneyId()` returns a new url safe id built from `crypto.getRandomValues`
- `getJourneyId(request)` reads a valid `ntr` param from a `Request`, `URL` or
  string and returns `null` when there is none
- `tagMarkdownLinks(markdown, journeyId, options)` rewrites inline links and
  reference definitions in place

Only same site targets are tagged: paths starting with `/`, and absolute urls
whose host matches `options.host`. Existing query strings are preserved
(`/docs?a=1` becomes `/docs?a=1&ntr=<id>`), fragments stay at the end
(`/docs?a=1#usage` becomes `/docs?a=1&ntr=<id>#usage`), and anchors, `mailto:`,
`tel:`, image embeds, external hosts and links that already carry an `ntr` param
are left untouched. Fenced code blocks and inline code spans are never rewritten.

Requests captured by the tracker already carry the full url, so no tracker
configuration is needed for journeys to show up.

## One-switch tagging (Next.js)

On Next.js you do not have to touch every markdown route. Turn on `tagLinks` and the
proxy tags markdown responses for AI agents on the way out.

```ts
// proxy.ts on Next.js 16, middleware.ts before that
import { createGeoProxy } from "@usenotra/sdk/next";
import { NextResponse } from "next/server";

const geo = createGeoProxy({
  token: process.env.NOTRA_GEO_TOKEN ?? "",
  tagLinks: true,
});

export async function proxy(request: Request, event: { waitUntil(p: Promise<unknown>): void }) {
  const tagged = await geo(request, event);
  if (tagged) {
    return tagged;
  }
  return NextResponse.next();
}
```

`tagLinks` accepts `true` for the defaults, or an object:

| Field | Default | Meaning |
| --- | --- | --- |
| `host` | request hostname | Host treated as same site when tagging absolute urls |
| `paths` | `.md`, `llms.txt`, `llms-full.txt` | Which routes are markdown shaped |
| `html` | `false` | Also tag the anchors in HTML pages served to AI agents |

`paths` entries use the same matching semantics as `exclude`: a string matches that
path and everything below it, a `RegExp` is tested against the pathname.

### Mechanics

For each request the proxy checks, in order:

1. the loop guard header `x-notra-geo-tag` is absent
2. the method is `GET`
3. the user agent matches a known AI agent from the shipped signature table
4. the pathname matches one of the `paths` matchers

When all four hold, the proxy resolves the journey id from the incoming `ntr` param or
mints a new one, then fetches the same url again with the original request headers plus
`x-notra-geo-tag: 1`. That second request re-enters the proxy, sees the guard header and
falls straight through to your route, so there is no loop. The origin response is only
rewritten when it is `ok` and its content type contains `text/markdown` or `text/plain`.
Anything else falls through untouched and the proxy behaves exactly as it did before.

### HTML pages

With `html: true` the same flow covers ordinary pages. When the pathname does not match
the markdown matchers, the proxy falls back to the HTML path: it applies the tracker's
own filter first, so `/api`, everything in `exclude`, and every asset path or static
extension are skipped and never refetched. The origin response is rewritten only when it
is `ok` and its content type contains `text/html`. Markdown always wins on markdown
shaped paths, so nothing about the existing behaviour changes.

`tagHtmlLinks(html, journeyId, options)` is also exported on its own from
`@usenotra/sdk/html` for stacks without the Next.js proxy.

What it rewrites, and only this: the `href` of `<a>` start tags, single or double
quoted, when the target is a path starting with `/` or an absolute url whose host
matches `options.host`. Existing query strings and fragments survive, with the param
inserted before the fragment, and `&amp;` encoded queries stay encoded.

What it never touches:

- `<link>` tags, so `rel="canonical"`, stylesheets, preloads and alternates are left
  exactly as the origin wrote them
- `src` attributes on images, scripts, iframes and media
- anything inside `<script>` or `<style>`, since the rewrite is scoped to `<a` start
  tags
- `mailto:`, `tel:`, `javascript:`, `data:` and fragment only hrefs
- protocol relative urls pointing at another host, and any external host
- urls that already carry an `ntr` param

An invalid journey id returns the input unchanged. Relative hrefs that do not start
with `/` are left alone rather than guessed at.

Because the whole path is gated on the AI agent user agent check, human visitors and
search crawlers get the untouched origin response byte for byte. There is no cloaking
of content, only an extra query param on internal links for agents, and no effect on
your CDN or browser caching for normal traffic.

On success the request is tracked as usual and the proxy returns a new `Response` with
the tagged body, the origin status and the origin headers minus `content-length`.

Human traffic never pays for this: the agent check happens before the origin fetch, so a
normal browser request goes through the untouched path.

Tagging needs no ingest token. With `token` empty the proxy still tags and simply sends
no envelope.

### Other stacks

`tagMarkdownLinks` stays the way to tag per route on Nuxt, Astro, SvelteKit, Netlify or anything else.
Call it inside the handler that builds the markdown, as shown above.

## Core API

`@usenotra/sdk/geo` exports the pieces the framework adapters are built from:

- `Tracker` — `new Tracker(options).track(request)` returns a promise that never
  rejects
- `serializeRequest(request)` — builds the envelope from a standard `Request`
- `shouldTrackRequest(request, url, exclude?)` — the GET, asset and exclude filter
- `sendRequestLog(payload, options)` — the fire and forget POST

## Signature table

`@usenotra/sdk/signatures` and `@usenotra/sdk/classify` still ship the sourced AI agent
signature table and its matcher. The tracker does not use them. The ingest side uses
them to classify each captured envelope server side, and the Next.js `tagLinks` proxy
uses the matcher locally to decide which responses to tag. Every entry carries a
`source` URL and a confidence of `verified`, `reported` or `heuristic`. See
[SOURCES.md](./SOURCES.md), which also documents agents that are deliberately absent
because they cannot be honestly detected by user agent, including Pi, ChatGPT Atlas,
`Google-Extended` and `Applebot-Extended`.

User agent matching is spoofable. The `verification` field on each signature points at
the operator's published IP range list or reverse DNS method where one exists.

## Agent feedback

`@usenotra/sdk/feedback` adds a `submit_feedback` tool to your MCP server so the agents using your product can report bugs, request features and leave praise in your Notra inbox. Copy your feedback URL from the Feedback page in your dashboard. It is unique to your organization and needs no token.

```ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerFeedbackTool } from "@usenotra/sdk/feedback";

const server = new McpServer({ name: "acme", version: "1.0.0" });

registerFeedbackTool(server, {
  url: "https://api.usenotra.com/v1/feedback/acme",
  productName: "Acme",
});
```

Outside of MCP, `submitFeedback(input, { url })` posts a single entry and resolves with `{ id, deduplicated }`. The MCP helper needs `zod` (already required by the MCP SDK); the plain client has no dependencies.

## MCP server analytics

`@usenotra/sdk/mcp` reports every JSON-RPC request your MCP server answers to the MCP server tab under Analytics. Wrap the transport before you connect it. This works with stdio, Streamable HTTP, SSE and any transport that exposes `send` and `onmessage`.

```ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { trackMcpTransport } from "@usenotra/sdk/mcp";

const server = new McpServer({ name: "acme", version: "1.0.0" });

await server.connect(
  trackMcpTransport(new StdioServerTransport(), {
    token: process.env.NOTRA_GEO_TOKEN ?? "",
  })
);
```

Each event carries the method, the tool, resource or prompt name, the status (`ok`, `tool_error` when a tool returns `isError`, or `rpc_error` with the JSON-RPC error code and message), latency, response size, the `Mcp-Session-Id` (or a per-connection id on stdio), and the client and server names, versions and protocol version from `initialize`. Each `tools/list` answer also records the advertised tool names and descriptions, so the dashboard can show tools that are never called, plus the `ui://` resource of tools that ship an MCP Apps interface. Reads of `ui://` resources count as interface renders. Requests your server sends to the client (`elicitation/create`, `sampling/createMessage`, `roots/list`) are reported too, tied to the tool call that triggered them; elicitations also record whether the user accepted, declined or cancelled. Pass `relatedRequestId` when you call `elicitInput` so the event knows its tool. Events are buffered for up to a second and sent in batches of up to 100 events or 240 KB. Reaching 100 queued events sends them right away. An event that is too large on its own loses its captured arguments and response first, then its tool descriptions. Every event counts toward the same monthly AI traffic events quota as page tracking.

Arguments and results never leave your server unless you opt in:

```ts
trackMcpTransport(transport, {
  token: process.env.NOTRA_GEO_TOKEN ?? "",
  // Adds optional `_intent` and `_model` parameters to every tool and strips
  // them before your handler runs, so agents can say why they call a tool.
  contextParameters: true,
  // Records arguments and tool results with keys like `token` or `password`
  // redacted and long strings clipped.
  captureArguments: true,
  captureResponses: true,
  // Attributes calls to your own users, for example from OAuth.
  identify: ({ authInfo }) => authInfo?.clientId,
  // Edits or drops an event before it is sent.
  beforeSend: (event) => (event.target === "internal_tool" ? null : event),
});
```

`ping` is skipped by default; pass `excludeMethods` to change that. Closing the transport sends the remaining events. On serverless runtimes pass `waitUntil`, or `await flushMcpEvents()` before the function returns.

## Web analytics script

`notra.js` counts the people who visit your site, without cookies. The helpers below write its script tag for you. By default the tag loads the build pinned in this SDK release with its Subresource Integrity hash, so the browser refuses to run the script if a single byte changes. A new SDK release pins the newest build; update the package to move to it.

Web analytics is in private beta: it needs the `web-analytics` beta turned on for your workspace, and until then page views are not counted. Copy your project's public web key (`nwk.…`) from the script tag under **Settings → Tracking**. It is not a secret.

### React and Next.js

```tsx
// app/layout.tsx
import { NotraAnalytics } from "@usenotra/sdk/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NotraAnalytics
          webKey="nwk.…"
          disabled={process.env.NODE_ENV !== "production"}
        />
      </body>
    </html>
  );
}
```

`NotraAnalytics` uses no hooks and needs no `"use client"`, so it renders in Server Components, in SSR and in Next.js App Router root layouts. Put it once in your root layout, inside `<head>` or `<body>`. It renders an `async` script: React 19 moves `async` scripts into `<head>`, renders the same `src` only once, and runs it when it is first rendered on the client. React never runs other `<script>` elements it renders on the client, and React 18 does not run this one either, so on React 18 keep it in a layout that is server rendered. `disabled` renders nothing.

### Plain HTML, Astro and other templates

```astro
---
// src/layouts/Base.astro
import { notraScriptTag } from "@usenotra/sdk/script";

const notra = notraScriptTag({ webKey: "nwk.…" });
---
<html>
  <head>
    <Fragment set:html={notra} />
  </head>
  <body><slot /></body>
</html>
```

`notraScriptTag(options)` returns the HTML string with every value escaped:

```html
<script defer src="https://static.usenotra.com/notra.ce3c872ef9c9.js" data-key="nwk.…" data-api="https://ingest.usenotra.com/api/collect" integrity="sha384-…" crossorigin="anonymous"></script>
```

`notraScript(options)` returns the same attributes as an object (`src`, `defer`, `data-key`, `data-api`, `data-hash`, `integrity`, `crossOrigin`) for other renderers. `NOTRA_SCRIPT_RELEASE` and `NOTRA_SCRIPT_PLUS_RELEASE` hold the pinned file names and integrity values.

### Script options

| Option | Default | Meaning |
| --- | --- | --- |
| `webKey` | required | The project's public web key. Must start with `nwk.`, otherwise the helpers throw |
| `errors` | `false` | Load `notra.plus.js`, which also reports uncaught JavaScript errors |
| `hash` | `false` | Count `#hash` route changes as page views (`data-hash`) |
| `api` | `https://ingest.usenotra.com/api/collect`; with `endpoint` or `src`, `/api/collect` on the script's origin | Beacon endpoint (`data-api`). Set it when you proxy page views through your own domain |
| `pinned` | `true` | Load the pinned build with `integrity` and `crossorigin="anonymous"`. `false` loads `notra.js`, which always serves the latest build, without `integrity` |
| `endpoint` | Notra's script host, `https://static.usenotra.com` | Origin of a self-hosted ingest or proxy that serves the script at `/api/notra.js` and takes page views at `/api/collect` |
| `src` | none | Full script URL, for self-hosting. Replaces `endpoint`, `errors` and `pinned` |
| `integrity` | the pinned build's hash | `sha384-…` value. With `src`, pass it to keep the check, for example `NOTRA_SCRIPT_RELEASE.integrity` when you serve that file unchanged |
| `disabled` | `false` | `NotraAnalytics` only. Renders nothing |

By default the script loads from `static.usenotra.com`, Notra's script host on Cloudflare's edge, and page views go to `ingest.usenotra.com`. For a Content-Security-Policy, allow `script-src https://static.usenotra.com` and `connect-src https://ingest.usenotra.com`.

A self-hosted ingest at `endpoint` must serve the same pinned builds, or set `pinned: false`. A proxy must pass the pinned file through byte for byte; compression is fine, minifying breaks the hash.

### Updating the pinned builds

Each SDK release pins the newest notra.js builds. Maintainers run `GH_TOKEN=$(gh auth token) bun run sync`: it takes the build file names and their `sha384` integrity values from the reviewed source of usenotra/notra, checks that `static.usenotra.com` serves exactly those bytes, and rewrites `src/tracking/script/releases.ts`. See [CONTRIBUTING.md](../../CONTRIBUTING.md).
