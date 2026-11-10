import { Tracker } from "./tracker.js";
import type { GeoTrackerOptions, SvelteKitHandleInput } from "./types.js";

export function createGeoHandle(options: GeoTrackerOptions) {
  const tracker = new Tracker(options);

  return async <TEvent extends { request: Request }, TResponse>({
    event,
    resolve,
  }: SvelteKitHandleInput<TEvent, TResponse>): Promise<TResponse> => {
    const pending = tracker.track(event.request).catch(() => undefined);
    try {
      return await resolve(event);
    } finally {
      await pending;
    }
  };
}

export type { GeoTrackerOptions, SvelteKitHandleInput } from "./types.js";
