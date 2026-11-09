import { DEFAULT_ENDPOINT } from "../constants.js";
import {
  COLLECT_PATH,
  INVALID_WEB_KEY_MESSAGE,
  SCRIPT_CROSS_ORIGIN,
  SCRIPT_FILE,
  SCRIPT_HOST,
  SCRIPT_HOST_PATH,
  SCRIPT_PATH,
  SCRIPT_PLUS_FILE,
  WEB_KEY_PREFIX,
} from "./constants.js";
import { NOTRA_SCRIPT_PLUS_RELEASE, NOTRA_SCRIPT_RELEASE } from "./releases.js";
import type { NotraScriptAttributes, NotraScriptOptions } from "./types.js";

function trimOrigin(value: string): string {
  let end = value.length;
  while (end > 0 && value[end - 1] === "/") {
    end -= 1;
  }
  return value.slice(0, end);
}

/**
 * Without `endpoint` the script loads from Notra's script host and page views
 * go to the ingest; with one, both use that origin, as a self-hosted ingest
 * or a proxy serves the script at /api/ next to /api/collect.
 */
function scriptBase(endpoint: string | undefined): string {
  return endpoint === undefined
    ? `${SCRIPT_HOST}${SCRIPT_HOST_PATH}`
    : `${trimOrigin(endpoint)}${SCRIPT_PATH}`;
}

function defaultApi(options: NotraScriptOptions): string | undefined {
  return options.endpoint === undefined && options.src === undefined
    ? `${DEFAULT_ENDPOINT}${COLLECT_PATH}`
    : undefined;
}

function resolveSource(options: NotraScriptOptions): {
  src: string;
  integrity?: string | undefined;
} {
  if (options.src) {
    return { src: options.src, integrity: options.integrity };
  }
  const base = scriptBase(options.endpoint);
  if (options.pinned === false) {
    const file = options.errors ? SCRIPT_PLUS_FILE : SCRIPT_FILE;
    return { src: `${base}${file}`, integrity: options.integrity };
  }
  const release = options.errors
    ? NOTRA_SCRIPT_PLUS_RELEASE
    : NOTRA_SCRIPT_RELEASE;
  return {
    src: `${base}${release.file}`,
    integrity: options.integrity ?? release.integrity,
  };
}

/** The attributes of the notra.js script tag, with React prop names. */
export function notraScript(
  options: NotraScriptOptions
): NotraScriptAttributes {
  if (!options.webKey?.startsWith(WEB_KEY_PREFIX)) {
    throw new Error(INVALID_WEB_KEY_MESSAGE);
  }
  const { src, integrity } = resolveSource(options);
  const attributes: NotraScriptAttributes = {
    src,
    defer: true,
    "data-key": options.webKey,
  };
  const api = options.api ?? defaultApi(options);
  if (api) {
    attributes["data-api"] = api;
  }
  if (options.hash) {
    attributes["data-hash"] = "";
  }
  if (integrity) {
    attributes.integrity = integrity;
    attributes.crossOrigin = SCRIPT_CROSS_ORIGIN;
  }
  return attributes;
}

function escapeAttribute(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/** The notra.js script tag as an HTML string, for templates outside React. */
export function notraScriptTag(options: NotraScriptOptions): string {
  const attributes = notraScript(options);
  let tag = `<script defer src="${escapeAttribute(attributes.src)}" data-key="${escapeAttribute(attributes["data-key"])}"`;
  if (attributes["data-api"] !== undefined) {
    tag += ` data-api="${escapeAttribute(attributes["data-api"])}"`;
  }
  if (attributes["data-hash"] !== undefined) {
    tag += " data-hash";
  }
  if (attributes.integrity !== undefined) {
    tag += ` integrity="${escapeAttribute(attributes.integrity)}" crossorigin="${SCRIPT_CROSS_ORIGIN}"`;
  }
  return `${tag}></script>`;
}
