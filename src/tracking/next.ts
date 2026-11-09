import { TAG_LOOP_GUARD_HEADER, TAG_LOOP_GUARD_VALUE } from "./constants.js";
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

  constructor(options: GeoNextOptions) {
    this.options = options;
    this.tracker = new CoreTracker(options);
    this.tagLinks = resolveTagLinksConfig(options.tagLinks);
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
    // Our own tagging fetch of this page: the outer request is already counted.
    if (request.headers.get(TAG_LOOP_GUARD_HEADER) === TAG_LOOP_GUARD_VALUE) {
      return;
    }
    if (this.tagLinks) {
      const tagged = await tagMarkdownResponse(request, this.tagLinks, {
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

export function createGeoProxy(options: GeoNextOptions) {
  const tracker = new Tracker(options);
  return (
    request: Request,
    event?: WaitUntilContext | undefined
  ): Promise<Response | undefined> => tracker.handle(request, event);
}
