# @usenotra/sdk

The official Notra SDK for TypeScript and JavaScript:

- **API client.** Every Notra API endpoint as a typed method, with retries, timeouts and streaming. No runtime dependencies.
- **AI traffic.** Middleware for Next.js, Nuxt, Astro, SvelteKit, TanStack Start, React Router and Netlify that shows you AI crawlers, AI assistant fetches and AI referrals.
- **Web analytics.** `<NotraAnalytics />` and a script tag helper for notra.js, pinned with its Subresource Integrity hash.
- **MCP analytics and agent feedback** for your own MCP server.

Each part has its own import path, so you only ship what you use.

```bash
npm install @usenotra/sdk
```

## API client

```ts
import { Notra } from "@usenotra/sdk";

const notra = new Notra(); // reads NOTRA_API_KEY

const { projects } = await notra.geo.listProjects();
const post = await notra.content.getPost({ postId: "post_123" });
const created = await notra.content.createPost({
  body: { title: "What shipped this week", contentType: "changelog" },
});
```

Every method is named after its `operationId` in the [API reference](https://www.usenotra.com/docs/api/getting-started) and grouped like it: `notra.content`, `notra.geo`, `notra.chats`, `notra.sites` and so on. A method takes one object: path and query parameters by name, the JSON body as `body`. All 157 methods are listed in [docs/API.md](docs/API.md).

Request and response types are exported for every method and schema:

```ts
import type { GetPostResult, ListPostsParams, GeoProject } from "@usenotra/sdk";
```

### Authentication

```ts
const notra = new Notra({
  apiKey: process.env.NOTRA_API_KEY, // the default
  organization: "acme", // workspace id or slug, see below
});
```

- `apiKey` defaults to `NOTRA_API_KEY`. It can also be a function that returns a current token, called before every attempt, for example an OAuth access token that rotates.
- `organization` sets `X-Notra-Organization-Id`. Account API keys need it when you belong to more than one workspace; it defaults to `NOTRA_ORGANIZATION_ID`.
- `environment: "sandbox"` talks to the sandbox with sample data at `demo-api.usenotra.com`. Get a free sandbox key at [demo.usenotra.com](https://demo.usenotra.com).
- `baseUrl` overrides the host, for example for a proxy.

Keep API keys on the server. Never ship them to a browser.

### Errors

Every error extends `NotraError`:

```ts
import { NotraAPIError, NotraConnectionError, NotraRateLimitError } from "@usenotra/sdk";

try {
  await notra.content.getPost({ postId: "post_that_does_not_exist" }); // 404
} catch (error) {
  if (error instanceof NotraRateLimitError) {
    console.log(`Rate limited, window resets in ${error.reset}`);
  } else if (error instanceof NotraAPIError) {
    console.log(error.status, error.code, error.message, error.recovery, error.requestId);
  } else if (error instanceof NotraConnectionError) {
    console.log("Network problem or timeout", error.cause);
  }
}
```

| Error | When |
| --- | --- |
| `NotraAPIError` | The API answered with a non-2xx status. Has `status`, `code`, `message`, `recovery`, `body`, `headers` and `requestId`. |
| `NotraRateLimitError` | A `NotraAPIError` for 429, after the retries, with `limit`, `remaining` and `reset`. |
| `NotraConnectionError` | No answer: network failure, DNS, TLS or an aborted signal. |
| `NotraTimeoutError` | A `NotraConnectionError`: the request took longer than `timeoutMs`. |

### Retries and timeouts

Requests are retried twice by default, with exponential backoff that honours `Retry-After` and the rate limit window:

- 429 is retried for every method, because a rate-limited request wasn't processed.
- Network failures and 408, 500, 502, 503 and 504 are retried only for `GET`, `PUT` and `DELETE`. A `POST` or `PATCH` is retried only after a 429, which the API rejected without running it.

```ts
const notra = new Notra({ maxRetries: 4, timeoutMs: 30_000 });

// Per request
await notra.geo.listProjects({ maxRetries: 0, signal: AbortSignal.timeout(5000) });
await notra.content.getPost({ postId: "post_123" }, { headers: { "X-Trace": "abc" } });
```

### Streaming

The streaming endpoints, `chats.createChat()`, `chats.postChatMessage()` and `agent.streamAgentSessionEvents()`, return a `NotraStream`. Iterate it, or pass its bytes straight on:

```ts
const stream = await notra.chats.createChat({ body: { message: "Summarize what shipped last week" } });
console.log("Chat", stream.response.headers.get("x-chat-id"));

for await (const chunk of stream) {
  if (chunk.type === "text-delta") {
    process.stdout.write(chunk.delta ?? "");
  }
}

// Or, in a route handler, forward the AI SDK UI message stream as is:
return new Response(stream.toReadableStream(), { headers: { "Content-Type": "text/event-stream" } });
```

### Endpoints newer than this SDK

`notra.request()` calls any endpoint with the same auth, retries and errors:

```ts
const result = await notra.request("GET", "/v1/new-endpoint", { query: { limit: 10 } });
```

## AI traffic

Add the middleware for your framework to see AI crawlers, AI assistant fetches and AI referrals in Notra. Tracking never blocks or slows a response and runs on edge runtimes; only the optional Next.js `tagLinks`, which rewrites links in responses for AI agents, fetches the page before answering.

```ts
// proxy.ts (Next.js 16; middleware.ts before that)
import { createGeoProxy } from "@usenotra/sdk/next";
import { NextResponse } from "next/server";

const geo = createGeoProxy({ token: process.env.NOTRA_GEO_TOKEN ?? "" });

export async function proxy(request: Request, event: { waitUntil(p: Promise<unknown>): void }) {
  // Returns a response only when it rewrote one (tagLinks); otherwise carry on.
  return (await geo(request, event)) ?? NextResponse.next();
}
```

| Import | Framework |
| --- | --- |
| `@usenotra/sdk/next` | Next.js `proxy.ts` or `middleware.ts` |
| `@usenotra/sdk/nuxt` | Nuxt and Nitro |
| `@usenotra/sdk/astro` | Astro |
| `@usenotra/sdk/sveltekit` | SvelteKit |
| `@usenotra/sdk/tanstack` | TanStack Start |
| `@usenotra/sdk/react-router` | React Router |
| `@usenotra/sdk/netlify` | Netlify Edge Functions |
| `@usenotra/sdk/geo` | The core tracker, for anything else |

`@usenotra/sdk/markdown` and `/html` add journey attribution to the links you serve AI agents, and `/classify` and `/signatures` hold the AI agent signature table.

## Web analytics

`notra.js` counts the people who visit your site, without cookies. These helpers write its script tag with your public web key (`nwk.…`, from **Settings → Tracking** in Notra):

```tsx
// app/layout.tsx
import { NotraAnalytics } from "@usenotra/sdk/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NotraAnalytics webKey="nwk.…" disabled={process.env.NODE_ENV !== "production"} />
      </body>
    </html>
  );
}
```

```ts
// Astro, plain HTML or any other template
import { notraScriptTag } from "@usenotra/sdk/script";

const tag = notraScriptTag({ webKey: "nwk.…" });
```

The tag loads the notra.js build pinned in this SDK version with its `integrity` hash, so the browser refuses to run the script if a single byte changes. You never set the hash yourself, and updating `@usenotra/sdk` moves you to the newest build. React is an optional peer dependency, needed only for `@usenotra/sdk/react`.

## MCP analytics and agent feedback

```ts
import { trackMcpTransport } from "@usenotra/sdk/mcp";
import { registerFeedbackTool } from "@usenotra/sdk/feedback";
```

`trackMcpTransport` reports the requests your MCP server answers (except `ping`, which you can include with `excludeMethods`), and `registerFeedbackTool` adds a `submit_feedback` tool so the agents using your product can report bugs and leave praise in your Notra inbox. `@usenotra/sdk/feedback` needs `zod`, which every MCP server already has through the MCP SDK.

Every option of the tracking side is in the [tracking guide](docs/tracking/README.md).

## Runtimes

Node.js 20 or newer, Bun, Deno, Cloudflare Workers, Vercel and Netlify Edge, and modern browsers. ESM and CommonJS are both included.

## Upgrading

Coming from `@usenotra/sdk` 1.x or `@usenotra/geo`? See [MIGRATION.md](MIGRATION.md). Method names and parameters stayed the same.

## Contributing

The API client is generated from the Notra OpenAPI spec; see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
