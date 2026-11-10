import { expect, test } from "bun:test";

import { API_FILE, REFERENCE_FILE, SCHEMA_FILE, SPEC_FILE, generate } from "../scripts/generate.js";
import { VERSION } from "../src/version.js";

test("the generated client matches spec/openapi.json (run `bun run generate`)", async () => {
  const fresh = await generate(await Bun.file(SPEC_FILE).json());
  expect(await Bun.file(SCHEMA_FILE).text()).toBe(fresh.schema);
  expect(await Bun.file(API_FILE).text()).toBe(fresh.api);
  expect(await Bun.file(REFERENCE_FILE).text()).toBe(fresh.reference);
});

test("VERSION matches package.json", async () => {
  const pkg = (await Bun.file(new URL("../package.json", import.meta.url)).json()) as { version: string };
  expect(VERSION).toBe(pkg.version);
});
