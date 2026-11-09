import { JOURNEY_ID_PATTERN } from "./constants.js";
import { appendJourneyParam, isTaggableTarget } from "./link-target.js";
import type { TagHtmlLinksOptions } from "./types.js";

const ANCHOR_TAG = /<a\b[^>]*>/gi;
/** One attribute: name, then an optional double-quoted, single-quoted or bare value. */
const ATTRIBUTE = /([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'<>`=]+)))?/g;
/** Elements whose content is not markup, so anchors inside them are left alone. */
const RAW_TEXT = [
  { open: "<script", close: "</script" },
  { open: "<style", close: "</style" },
  { open: "<textarea", close: "</textarea" },
  { open: "<!--", close: "-->" },
];
const ENCODED_AMPERSAND = "&amp;";

function tagHref(value: string, journeyId: string, host: string | undefined): string | null {
  const target = value.trim();
  if (!isTaggableTarget(target, host)) {
    return null;
  }
  const ampersand = target.includes(ENCODED_AMPERSAND) ? ENCODED_AMPERSAND : "&";
  const start = value.indexOf(target);
  return `${value.slice(0, start)}${appendJourneyParam(target, journeyId, ampersand)}${value.slice(start + target.length)}`;
}

function tagAnchor(tag: string, journeyId: string, host: string | undefined): string {
  // Skip "<a" so the tag name isn't read as an attribute.
  const attributes = tag.slice(2);
  ATTRIBUTE.lastIndex = 0;
  for (let match = ATTRIBUTE.exec(attributes); match; match = ATTRIBUTE.exec(attributes)) {
    if (match[1]?.toLowerCase() !== "href") {
      continue;
    }
    const value = match[2] ?? match[3] ?? match[4];
    const tagged = value === undefined ? null : tagHref(value, journeyId, host);
    if (tagged === null) {
      return tag;
    }
    const quote = match[2] !== undefined ? '"' : match[3] !== undefined ? "'" : "";
    const name = match[0].slice(0, match[0].indexOf("=") + 1);
    const start = 2 + match.index;
    return `${tag.slice(0, start)}${name}${quote}${tagged}${quote}${tag.slice(start + match[0].length)}`;
  }
  return tag;
}

/** The next raw-text element at or after `from`, as the [start, end) range to keep untouched. */
function nextRawText(lower: string, from: number): [number, number] | null {
  let found: [number, number] | null = null;
  for (const { open, close } of RAW_TEXT) {
    const start = lower.indexOf(open, from);
    if (start === -1 || (found && start >= found[0])) {
      continue;
    }
    const closeAt = lower.indexOf(close, start + open.length);
    found = [start, closeAt === -1 ? lower.length : closeAt + close.length];
  }
  return found;
}

export function tagHtmlLinks(
  html: string,
  journeyId: string,
  options: TagHtmlLinksOptions = {}
): string {
  if (!JOURNEY_ID_PATTERN.test(journeyId)) {
    return html;
  }

  const lower = html.toLowerCase();
  const tagMarkup = (markup: string) =>
    markup.replace(ANCHOR_TAG, (tag) => tagAnchor(tag, journeyId, options.host));
  let output = "";
  let cursor = 0;
  for (let raw = nextRawText(lower, 0); raw; raw = nextRawText(lower, raw[1])) {
    output += tagMarkup(html.slice(cursor, raw[0])) + html.slice(raw[0], raw[1]);
    cursor = raw[1];
  }
  return output + tagMarkup(html.slice(cursor));
}
