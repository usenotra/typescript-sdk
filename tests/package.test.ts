import { expect, test } from "bun:test";
import { existsSync } from "node:fs";

import { API_FILE, REFERENCE_FILE, SCHEMA_FILE, SPEC_FILE, endpoints, generate } from "../scripts/generate.js";
import { VERSION } from "../src/version.js";

const pkg = (await Bun.file(new URL("../package.json", import.meta.url)).json()) as {
  version: string;
  tshy: { exports: Record<string, string> };
};

test("the generated client and reference match spec/openapi.json", async () => {
  const spec = await Bun.file(SPEC_FILE).json();
  const fresh = await generate(spec);
  expect(await Bun.file(SCHEMA_FILE).text()).toBe(fresh.schema);
  expect(await Bun.file(API_FILE).text()).toBe(fresh.api);
  expect(await Bun.file(REFERENCE_FILE).text()).toBe(fresh.reference);
});

test("every operation in the spec has a method", async () => {
  const spec = await Bun.file(SPEC_FILE).json();
  const api = await Bun.file(API_FILE).text();
  for (const endpoint of endpoints(spec)) {
    expect(api).toContain(`  ${endpoint.id}(`);
  }
});

test("VERSION matches package.json", () => {
  expect(VERSION).toBe(pkg.version);
});

test("every exported path has its source file", () => {
  for (const [subpath, file] of Object.entries(pkg.tshy.exports)) {
    expect(existsSync(new URL(`../${file}`, import.meta.url)), subpath).toBe(true);
  }
});
