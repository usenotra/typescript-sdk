/** Where notra.js loads from by default: Notra's script host on Cloudflare's edge. */
export const SCRIPT_HOST = "https://static.usenotra.com";

/** Files sit at the root of the script host and under /api/ on an ingest. */
export const SCRIPT_HOST_PATH = "/";
export const SCRIPT_PATH = "/api/";

/** Page views go to the ingest, not the script host. */
export const COLLECT_PATH = "/api/collect";

export const SCRIPT_FILE = "notra.js";

export const SCRIPT_PLUS_FILE = "notra.plus.js";

export const WEB_KEY_PREFIX = "nwk.";

export const INVALID_WEB_KEY_MESSAGE =
  'Pass your project\'s public web key as `webKey`. It starts with "nwk." and is in the script tag under Settings → Tracking in your Notra dashboard.';

export const SCRIPT_CROSS_ORIGIN = "anonymous";
