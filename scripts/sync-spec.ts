// Downloads the API's OpenAPI spec into spec/openapi.json.
// Usage: bun scripts/sync-spec.ts [url], then bun run generate.
const DEFAULT_SPEC_URL = "https://api.usenotra.com/openapi.json";
const SPEC_FILE = new URL("../spec/openapi.json", import.meta.url);

const url = process.argv[2] ?? DEFAULT_SPEC_URL;
const response = await fetch(url);
if (!response.ok) {
  throw new Error(`${url}: HTTP ${response.status}`);
}
const spec = (await response.json()) as { openapi?: unknown; paths?: unknown };
const paths = spec.paths;
if (!(typeof spec.openapi === "string" && spec.openapi.startsWith("3.") && typeof paths === "object" && paths !== null && !Array.isArray(paths))) {
  throw new Error(`${url} is not an OpenAPI 3 document`);
}
await Bun.write(SPEC_FILE, `${JSON.stringify(spec, null, 2)}\n`);
console.log(`Saved ${url} to spec/openapi.json`);
