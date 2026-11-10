import { TAG_LOOP_GUARD_HEADER } from "./constants.js";
import { resolveTagLinksConfig, tagMarkdownResponse } from "./tag-response.js";
import { Tracker as CoreTracker } from "./tracker.js";
import type {
  GeoNextOptions,
  GeoTagLinksConfig,
  WaitUntilContext,
} from "./types.js";

export class Tracker {
  private readonly options: GeoNextOptions;
  private readonly tracker: CoreTracker;
  private readonly tagLinks: GeoTagLinksConfig | null;
  private guard: Promise<string> | undefined;

  constructor(options: GeoNextOptions) {
    this.options = options;
    this.tracker = new CoreTracker(options);
    this.tagLinks = resolveTagLinksConfig(options.tagLinks);
  }

  private loopGuard(): Promise<string> {
    this.guard ??= tokenGuard(this.options.token);
    return this.guard;
  }

  track(request: Request, event?: WaitUntilContext): void {
    const pending = this.tracker.track(request);
    if (typeof event?.waitUntil === "function") {
      event.waitUntil(pending);
    }
  }

  async handle(
    request: Request,
    event?: WaitUntilContext | undefined
  ): Promise<Response | undefined> {
    if (this.tagLinks) {
      // Our own tagging fetch of this page: the outer request is already counted.
      // The value comes from the token, so visitors can't use it to hide.
      const guard = await this.loopGuard();
      if (request.headers.get(TAG_LOOP_GUARD_HEADER) === guard) {
        return;
      }
      const tagged = await tagMarkdownResponse(request, this.tagLinks, {
        guard,
        fetch: this.options.fetch,
        onError: this.options.onError,
        exclude: this.options.exclude,
      });

      if (tagged) {
        this.track(request, event);
        return tagged;
      }
    }

    this.track(request, event);
    return;
  }
}

/** The same on every instance with the same token, so serverless fetches recognize each other. */
async function tokenGuard(token: string): Promise<string> {
  const digest = await globalThis.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(`notra-geo-tag:${token}`)
  );
  return Array.from(new Uint8Array(digest).slice(0, 16), (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
}

export function createGeoProxy(options: GeoNextOptions) {
  const tracker = new Tracker(options);
  return (
    request: Request,
    event?: WaitUntilContext | undefined
  ): Promise<Response | undefined> => tracker.handle(request, event);
}

export type { GeoNextOptions, GeoTagLinksConfig, WaitUntilContext } from "./types.js";
