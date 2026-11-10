import { Tracker } from "./tracker.js";
import type { GeoTrackerOptions, TanStackMiddlewareContext } from "./types.js";

export function createGeoMiddleware(options: GeoTrackerOptions) {
  const tracker = new Tracker(options);

  return async <T>({
    request,
    next,
  }: TanStackMiddlewareContext<T>): Promise<T> => {
    const pending = tracker.track(request).catch(() => undefined);
    try {
      return await next();
    } finally {
      await pending;
    }
  };
}

export type { GeoTrackerOptions, TanStackMiddlewareContext } from "./types.js";
