import { describe, expect, test } from "bun:test";

import {
  NOTRA_SCRIPT_PLUS_RELEASE,
  NOTRA_SCRIPT_RELEASE,
  notraScript,
  notraScriptTag,
} from "../../src/script.js";

const webKey = "nwk.org.project.0000";

describe("notraScript", () => {
  test("loads the pinned build with its integrity by default", () => {
    expect(notraScript({ webKey })).toEqual({
      src: `https://static.usenotra.com/${NOTRA_SCRIPT_RELEASE.file}`,
      integrity: NOTRA_SCRIPT_RELEASE.integrity,
      crossOrigin: "anonymous",
      defer: true,
      "data-key": webKey,
      "data-api": "https://ingest.usenotra.com/api/collect",
    });
  });

  test("pins notra.ce3c872ef9c9.js and notra.plus.d703b9cc5508.js", () => {
    expect(NOTRA_SCRIPT_RELEASE).toEqual({
      file: "notra.ce3c872ef9c9.js",
      integrity:
        "sha384-LuUp5Hj+rSQ4/mZp1sWBOrJDHIHKGqflwF1GYIreqmWdCaI1otOQealWJGRj6Toj",
    });
    expect(NOTRA_SCRIPT_PLUS_RELEASE).toEqual({
      file: "notra.plus.d703b9cc5508.js",
      integrity:
        "sha384-MgLdHKufD0WdkO4pxtkT/bbNCKxl6PxOyUJe+M/qwFGfjOdZ5rEnljxTlOVQIzF+",
    });
  });

  test("loads the pinned plus build with errors", () => {
    const attributes = notraScript({ webKey, errors: true });
    expect(attributes.src).toBe(
      "https://static.usenotra.com/notra.plus.d703b9cc5508.js"
    );
    expect(attributes.integrity).toBe(NOTRA_SCRIPT_PLUS_RELEASE.integrity);
  });

  test("loads the latest build without integrity when unpinned", () => {
    expect(notraScript({ webKey, pinned: false })).toEqual({
      src: "https://static.usenotra.com/notra.js",
      defer: true,
      "data-key": webKey,
      "data-api": "https://ingest.usenotra.com/api/collect",
    });
    expect(notraScript({ webKey, pinned: false, errors: true }).src).toBe(
      "https://static.usenotra.com/notra.plus.js"
    );
  });

  test("adds data-api and data-hash only when set", () => {
    const attributes = notraScript({
      webKey,
      api: "https://example.com/notra/collect",
      hash: true,
    });
    expect(attributes["data-api"]).toBe("https://example.com/notra/collect");
    expect(attributes["data-hash"]).toBe("");

    const plain = notraScript({ webKey, api: "", hash: false });
    expect("data-api" in plain).toBe(false);
    expect("data-hash" in plain).toBe(false);
  });

  test("a self-hosted endpoint serves the script and takes its beacons", () => {
    const attributes = notraScript({
      webKey,
      endpoint: "https://ingest.example.com//",
    });
    expect(attributes.src).toBe(
      `https://ingest.example.com/api/${NOTRA_SCRIPT_RELEASE.file}`
    );
    expect("data-api" in attributes).toBe(false);
  });

  test("uses a self-hosted src with only the integrity it is given", () => {
    expect(notraScript({ webKey, src: "/notra.js" })).toEqual({
      src: "/notra.js",
      defer: true,
      "data-key": webKey,
    });
    expect(
      notraScript({
        webKey,
        src: "/notra.js",
        integrity: NOTRA_SCRIPT_RELEASE.integrity,
      })
    ).toMatchObject({
      src: "/notra.js",
      integrity: NOTRA_SCRIPT_RELEASE.integrity,
      crossOrigin: "anonymous",
    });
  });

  test("rejects a key without the nwk. prefix", () => {
    expect(() => notraScript({ webKey: "" })).toThrow('starts with "nwk."');
    expect(() => notraScript({ webKey: "ntr_secret" })).toThrow(
      'starts with "nwk."'
    );
    expect(() =>
      notraScript({ webKey: undefined as unknown as string })
    ).toThrow('starts with "nwk."');
  });
});

describe("notraScriptTag", () => {
  test("renders the pinned tag", () => {
    expect(notraScriptTag({ webKey })).toBe(
      `<script defer src="https://static.usenotra.com/notra.ce3c872ef9c9.js" data-key="${webKey}" data-api="https://ingest.usenotra.com/api/collect" integrity="${NOTRA_SCRIPT_RELEASE.integrity}" crossorigin="anonymous"></script>`
    );
  });

  test("renders the unpinned tag with every option", () => {
    expect(
      notraScriptTag({
        webKey,
        pinned: false,
        errors: true,
        hash: true,
        api: "/notra/collect",
      })
    ).toBe(
      `<script defer src="https://static.usenotra.com/notra.plus.js" data-key="${webKey}" data-api="/notra/collect" data-hash></script>`
    );
  });

  test("escapes attribute values", () => {
    const tag = notraScriptTag({
      webKey: 'nwk."><script>alert(1)</script>',
      src: "/notra.js?a=1&b='2'",
      api: '/collect"onload="x',
    });
    expect(tag).toBe(
      `<script defer src="/notra.js?a=1&amp;b=&#39;2&#39;" data-key="nwk.&quot;&gt;&lt;script&gt;alert(1)&lt;/script&gt;" data-api="/collect&quot;onload=&quot;x"></script>`
    );
  });
});
