# Changelog

## 2.0.0

One SDK for everything Notra. See [MIGRATION.md](MIGRATION.md).

- **New API client**, built on the OpenAPI spec without a code generator runtime: no dependencies, about 8 KB gzipped instead of 37 KB, and every method still has its 1.x name and parameters.
- **Every endpoint:** 157 methods, including the new `notra.webhooks` and `notra.sites` groups.
- **Real streaming** for chats and agent sessions with `NotraStream`, instead of reading the whole stream into a string.
- **Workspaces and sandbox** as options: `organization` and `environment: "sandbox"`.
- **Clearer errors:** `NotraAPIError` with `status`, `code`, `recovery` and `requestId`; `NotraRateLimitError`, `NotraConnectionError` and `NotraTimeoutError`.
- **Safe retries:** `POST` requests are never repeated after a network failure or a 5xx; `Retry-After` and the rate limit window set the wait.
- **`@usenotra/geo` moved in** under the same subpaths: `@usenotra/sdk/next`, `/nuxt`, `/astro`, `/sveltekit`, `/tanstack`, `/react-router`, `/netlify`, `/mcp`, `/feedback`, `/markdown`, `/html`, `/classify`, `/signatures` and `/geo`.
- **Web analytics:** `<NotraAnalytics />` from `@usenotra/sdk/react` and `notraScriptTag()` from `@usenotra/sdk/script` load notra.js pinned with its Subresource Integrity hash.
- **Releases** are published from GitHub Actions with npm trusted publishing and provenance.
