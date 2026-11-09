import { Tracker } from "./tracker.js";
import type {
  GeoReactRouterOptions,
  ReactRouterMiddlewareArgs,
} from "./types.js";

export function createGeoMiddleware(options: GeoReactRouterOptions) {
  const tracker = new Tracker(options);

  return async <T>(
    { request }: ReactRouterMiddlewareArgs,
    next: () => Promise<T>
  ): Promise<T> => {
    try {
      return await next();
    } finally {
      const pending = tracker.track(request).catch(() => undefined);
      options.waitUntil?.(pending);
    }
  };
}
