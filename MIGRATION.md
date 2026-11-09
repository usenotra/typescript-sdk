# Migrating to @usenotra/sdk 2.0

2.0 replaces the generated 1.x client with a hand-built one and brings everything from `@usenotra/geo` into the same package. Most code keeps working: every 1.x method kept its name, its group and its parameters.

- [From @usenotra/sdk 1.x](#from-usenotrasdk-1x)
- [From @usenotra/geo](#from-usenotrageo)

## From @usenotra/sdk 1.x

```bash
npm install @usenotra/sdk@2
```

2.0 needs Node.js 20 or newer (or Bun, Deno, or an edge runtime).

### What stays the same

- All 100 methods of 1.x have the same name in the same group, such as `notra.geo.getGeoTrafficLog()` and `notra.content.updatePost()`.
- Parameters are still one object: path and query parameters by name, the JSON body as `body`, as in `notra.content.updatePost({ postId, body: { title } })`.
- Responses have the same fields.

2.0 also adds the endpoints 1.x never had: `notra.webhooks` and `notra.sites`, 157 methods in total. See [docs/API.md](docs/API.md).

### Client options

| 1.x | 2.0 |
| --- | --- |
| `new Notra({ bearerAuth })` | `new Notra({ apiKey })`; a function returning a token still works |
| `NOTRA_BEARER_AUTH` | `NOTRA_API_KEY` |
| Header `X-Notra-Organization-Id` by hand | `new Notra({ organization: "acme" })` or `NOTRA_ORGANIZATION_ID` |
| `serverURL` | `baseUrl` |
| | `environment: "sandbox"` for demo-api.usenotra.com |
| `retryConfig` | `maxRetries` (backoff and `Retry-After` are built in) |
| `timeoutMs` | `timeoutMs` |
| `httpClient` (with hooks) | `fetch`: pass any fetch-compatible function to add logging or tracing |
| `userAgent` | `headers: { "User-Agent": "…" }` |
| `debugLogger`, `NOTRA_DEBUG` | Removed; log in your own `fetch` |

Per-request options are the second argument, as before: `{ signal, timeoutMs, maxRetries, headers }`.

### Errors

`NotraError` is now the base class of every error. The HTTP error, with the status, is `NotraAPIError`:

| 1.x | 2.0 |
| --- | --- |
| `NotraError` with `statusCode` | `NotraAPIError` with `status` |
| `errors.ErrorResponse` (`error`, `code`, `recovery`) | `NotraAPIError`: `message`, `code`, `recovery` |
| `errors.RateLimitErrorResponse` | `NotraRateLimitError`: `limit`, `remaining`, `reset` |
| `NotraDefaultError` | `NotraAPIError` |
| `ConnectionError`, `RequestAbortedError`, `UnexpectedClientError` | `NotraConnectionError` |
| `RequestTimeoutError` | `NotraTimeoutError` |
| `ResponseValidationError`, `SDKValidationError`, `InvalidRequestError` | Removed: responses aren't validated at runtime anymore, and TypeScript checks requests |

```ts
// 1.x
if (error instanceof NotraError) console.log(error.statusCode);
// 2.0
if (error instanceof NotraAPIError) console.log(error.status, error.code, error.requestId);
```

TypeScript reports every leftover `statusCode`, so the compiler finds these for you.

### Types

- Import every type from the package root. `@usenotra/sdk/models`, `@usenotra/sdk/models/operations` and `@usenotra/sdk/models/errors` are gone.
- Schemas keep their names (`GeoProject`, `ErrorResponse`, …). Each method also has `<Method>Params` and `<Method>Result` types, which replace the `<Method>Request` and `<Method>Response` operation types:

```ts
// 1.x
import type { GetGeoTrafficLogRequest } from "@usenotra/sdk/models/operations";
// 2.0
import type { GetGeoTrafficLogParams, GetGeoTrafficLogResult } from "@usenotra/sdk";
```

- Enum objects such as `UpdatePostStatusRequest.Draft` are gone. Pass the string, `"draft"`; TypeScript still checks it.
- Dates stay ISO strings, as the API sends them. 1.x turned a few fields of `listGeoShelfSources` results (`checkedAt`, `dueAt`, `resolvedAt`, `firstCitedAt`, `lastCitedAt`, `createdAt`, `updatedAt`, `lastFetchedAt`) into `Date` objects; wrap them in `new Date()` where you need one.
- Standalone functions (`@usenotra/sdk/funcs/…`) and `NotraCore` are gone. Use the methods on `new Notra()`, which tree-shake well at about 8 KB gzipped for the whole client.

### Chat streams

1.x read the whole chat stream into a string (`{ headers, result }`). 2.0 streams it:

```ts
const stream = await notra.chats.createChat({ body: { message: "Hi" } });
const chatId = stream.response.headers.get("x-chat-id");
for await (const chunk of stream) {
  if (chunk.type === "text-delta") process.stdout.write(chunk.delta ?? "");
}
```

`stream.toReadableStream()` hands you the raw AI SDK UI message stream instead.

## From @usenotra/geo

`@usenotra/geo` now lives in `@usenotra/sdk`, with the same code and the same options at the same subpaths:

```bash
npm uninstall @usenotra/geo
npm install @usenotra/sdk
```

| Before | After |
| --- | --- |
| `@usenotra/geo` | `@usenotra/sdk/geo` |
| `@usenotra/geo/next` | `@usenotra/sdk/next` |
| `@usenotra/geo/nuxt`, `/netlify`, `/tanstack`, `/astro`, `/sveltekit`, `/react-router` | `@usenotra/sdk/nuxt`, `/netlify`, `/tanstack`, `/astro`, `/sveltekit`, `/react-router` |
| `@usenotra/geo/react`, `/script` | `@usenotra/sdk/react`, `/script` |
| `@usenotra/geo/mcp`, `/feedback` | `@usenotra/sdk/mcp`, `/feedback` |
| `@usenotra/geo/markdown`, `/html`, `/classify`, `/signatures` | `@usenotra/sdk/markdown`, `/html`, `/classify`, `/signatures` |

One command updates the imports:

```bash
grep -rl "@usenotra/geo" src | xargs sed -i.bak -E "s#@usenotra/geo([\"'])#@usenotra/sdk/geo\1#g; s#@usenotra/geo/#@usenotra/sdk/#g"
```

Nothing else changes, except that every `fetch` option now accepts any fetch-compatible function. The last `@usenotra/geo` release re-exports `@usenotra/sdk`, so nothing breaks before you switch.
