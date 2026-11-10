import { createElement, type ReactElement } from "react";

import { notraScript } from "./script/attributes.js";
import type { NotraAnalyticsProps } from "./script/types.js";

/**
 * Renders the notra.js script tag. `async` instead of `defer` lets React 19
 * hoist it into `<head>`, render it once, and run it when it first mounts on
 * the client; React never runs other scripts it renders on the client.
 */
export function NotraAnalytics({
  disabled,
  ...options
}: NotraAnalyticsProps): ReactElement | null {
  if (disabled) {
    return null;
  }
  return createElement("script", {
    ...notraScript(options),
    defer: undefined,
    async: true,
  });
}

export type { NotraAnalyticsProps } from "./script/types.js";
