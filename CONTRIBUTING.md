# Contributing

```bash
bun install
bun run check-types && bun run lint && bun run test && bun run build
```

## How the API client is made

The client in `src/generated/` is generated from `spec/openapi.json`, a copy of https://api.usenotra.com/openapi.json. Don't edit generated files; change the API in usenotra/notra, then sync:

```bash
GH_TOKEN=$(gh auth token) bun run sync
```

`bun run sync` does three things:

1. `scripts/sync-spec.ts` downloads the current OpenAPI spec.
2. `scripts/sync-notra-script.ts` pins the notra.js builds from the reviewed source of usenotra/notra (`packages/web-tracker`) and checks that `static.usenotra.com` serves exactly those bytes. It refuses to pin anything else.
3. `scripts/generate.ts` writes `src/generated/schema.ts` (types, via openapi-typescript), `src/generated/api.ts` (one class per API tag, one method per `operationId`) and `docs/API.md`.

A test fails when the generated files don't match the spec, so CI catches a forgotten `bun run generate`. The Sync workflow runs this every day and opens a pull request when something changed.

Hand-written code:

| Path | What |
| --- | --- |
| `src/client/` | `Notra`, the transport (auth, retries, timeouts), errors and streams |
| `src/tracking/` | AI traffic middleware, web analytics script, MCP analytics and feedback |
| `src/*.ts` | The public entry points, one per import path |

## Releasing

1. Bump `version` in `package.json` and `src/version.ts` (a test keeps them equal) and add a `CHANGELOG.md` entry.
2. Merge to `main`. The Publish workflow tests, builds and stages the release on npm with provenance.
3. A maintainer approves the staged release with `npm stage approve <id>`, which needs 2FA.
