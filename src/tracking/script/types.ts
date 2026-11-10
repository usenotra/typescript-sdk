export interface NotraScriptOptions {
  /** The project's public web key, `nwk.…`. */
  webKey: string;
  /** Load `notra.plus.js`, which also reports JavaScript errors. */
  errors?: boolean | undefined;
  /** Count `#hash` route changes as page views. */
  hash?: boolean | undefined;
  /**
   * Beacon endpoint. Defaults to `https://ingest.usenotra.com/api/collect`, or
   * to `/api/collect` on the script's origin with `endpoint` or `src`.
   */
  api?: string | undefined;
  /** Load the build this SDK release pins, with its integrity hash. Defaults to true. */
  pinned?: boolean | undefined;
  /**
   * Origin of a self-hosted ingest or proxy that serves the script at
   * `/api/notra.js`. Defaults to Notra's script host, `https://static.usenotra.com`.
   */
  endpoint?: string | undefined;
  /** Full script URL, for self-hosting. Overrides `endpoint`, `errors` and `pinned`. */
  src?: string | undefined;
  /** Subresource Integrity value, `sha384-…`. Overrides the pinned build's value. */
  integrity?: string | undefined;
}

export interface NotraScriptAttributes {
  src: string;
  integrity?: string | undefined;
  crossOrigin?: "anonymous" | undefined;
  defer: true;
  "data-key": string;
  "data-api"?: string | undefined;
  "data-hash"?: "" | undefined;
}

export interface NotraScriptRelease {
  /** `notra.<version>.js` or `notra.plus.<version>.js`. */
  file: string;
  /** Subresource Integrity value, `sha384-<base64>`. */
  integrity: string;
}

export interface NotraAnalyticsProps extends NotraScriptOptions {
  /** Render nothing, for example outside production. */
  disabled?: boolean | undefined;
}
