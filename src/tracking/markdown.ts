import {
  JOURNEY_ID_BYTES,
  JOURNEY_ID_PARAM,
  JOURNEY_ID_PATTERN,
} from "./constants.js";
import {
  appendJourneyParam,
  isTaggableTarget,
  RESOLVE_BASE,
} from "./link-target.js";
import type { TagMarkdownLinksOptions } from "./types.js";

/** A fence line: marker and the rest of the line (info string or trailing spaces). */
const FENCE_LINE = /^ {0,3}(`{3,}|~{3,})(.*)$/gm;
const REFERENCE_LINK = /^([ \t]{0,3}\[[^\]]+\]:[ \t]*)(\S+)/gm;
const BASE64_URL_UNSAFE = /[+/]/g;
const BASE64_PADDING = /=+$/;
const BASE64_URL_REPLACEMENTS: Record<string, string> = { "+": "-", "/": "_" };

export function mintJourneyId(): string {
  const bytes = new Uint8Array(JOURNEY_ID_BYTES);
  globalThis.crypto.getRandomValues(bytes);

  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(BASE64_URL_UNSAFE, (char) => BASE64_URL_REPLACEMENTS[char] ?? char)
    .replace(BASE64_PADDING, "");
}

function toUrl(input: Request | URL | string): URL | null {
  if (typeof input === "string") {
    try {
      return new URL(input, RESOLVE_BASE);
    } catch {
      return null;
    }
  }

  if (input instanceof URL) {
    return input;
  }

  try {
    return new URL(input.url);
  } catch {
    return null;
  }
}

export function getJourneyId(request: Request | URL | string): string | null {
  const url = toUrl(request);
  const value = url?.searchParams.get(JOURNEY_ID_PARAM);
  if (!value || !JOURNEY_ID_PATTERN.test(value)) {
    return null;
  }
  return value;
}

/** Markdown whitespace: space, tab, line feed, form feed, carriage return. */
function isSpace(text: string, index: number): boolean {
  const code = text.charCodeAt(index);
  return code === 32 || (code >= 9 && code <= 13);
}

/** Whether the character at `index` is escaped by an odd run of backslashes. */
function isEscaped(text: string, index: number): boolean {
  let backslashes = 0;
  for (let i = index - 1; i >= 0 && text[i] === "\\"; i -= 1) {
    backslashes += 1;
  }
  return backslashes % 2 === 1;
}

function indexOfUnescaped(text: string, char: string, from: number): number {
  let index = text.indexOf(char, from);
  while (index !== -1 && isEscaped(text, index)) {
    index = text.indexOf(char, index + 1);
  }
  return index;
}

/** The `]` that closes the label opened at `start`, allowing nested brackets. */
function labelEnd(text: string, start: number): number {
  let depth = 0;
  for (let index = start + 1; index < text.length; index += 1) {
    const char = text[index];
    if ((char !== "[" && char !== "]") || isEscaped(text, index)) {
      continue;
    }
    if (char === "[") {
      depth += 1;
    } else if (depth === 0) {
      return index;
    } else {
      depth -= 1;
    }
  }
  return -1;
}

/** End of a link destination: stops at whitespace or an unbalanced `)`. */
function destinationEnd(text: string, start: number): number {
  let cursor = start;
  let depth = 0;
  while (cursor < text.length) {
    const char = text[cursor];
    if (char === "\\" && cursor + 1 < text.length) {
      cursor += 2;
      continue;
    }
    if (char === undefined || isSpace(text, cursor)) {
      break;
    }
    if (char === "(") {
      depth += 1;
    } else if (char === ")") {
      if (depth === 0) {
        break;
      }
      depth -= 1;
    }
    cursor += 1;
  }
  return depth === 0 ? cursor : start;
}

function tagText(
  text: string,
  journeyId: string,
  host: string | undefined
): string {
  const output: string[] = [];
  let outputStart = 0;
  let searchFrom = 0;

  while (searchFrom < text.length) {
    const labelStart = indexOfUnescaped(text, "[", searchFrom);
    if (labelStart === -1) {
      break;
    }

    const labelEndIndex = labelEnd(text, labelStart);
    if (labelEndIndex === -1) {
      break;
    }
    if (text[labelEndIndex + 1] !== "(") {
      searchFrom = labelEndIndex + 1;
      continue;
    }

    let cursor = labelEndIndex + 2;
    while (isSpace(text, cursor)) {
      cursor += 1;
    }

    const targetStart = cursor;
    cursor = destinationEnd(text, targetStart);
    if (cursor === targetStart) {
      searchFrom = labelEndIndex + 1;
      continue;
    }

    const targetEnd = cursor;
    while (isSpace(text, cursor)) {
      cursor += 1;
    }

    let titleEnd = targetEnd;
    if (cursor > targetEnd && text[cursor] === '"') {
      cursor += 1;
      while (cursor < text.length && text[cursor] !== '"') {
        cursor += 1;
      }
      if (cursor === text.length) {
        searchFrom = labelEndIndex + 1;
        continue;
      }

      cursor += 1;
      titleEnd = cursor;
      while (isSpace(text, cursor)) {
        cursor += 1;
      }
    }

    if (text[cursor] !== ")") {
      searchFrom = labelEndIndex + 1;
      continue;
    }

    const matchEnd = cursor + 1;
    const target = text.slice(targetStart, targetEnd);
    const isImage = labelStart > 0 && text[labelStart - 1] === "!";
    if (isImage || !isTaggableTarget(target, host)) {
      searchFrom = matchEnd;
      continue;
    }

    const label = text.slice(labelStart + 1, labelEndIndex);
    const title = text.slice(targetEnd, titleEnd);
    output.push(
      text.slice(outputStart, labelStart),
      `[${label}](${appendJourneyParam(target, journeyId)}${title})`
    );
    outputStart = matchEnd;
    searchFrom = matchEnd;
  }

  output.push(text.slice(outputStart));
  const withInlineLinks = output.join("");

  return withInlineLinks.replace(
    REFERENCE_LINK,
    (match, prefix: string, target: string) => {
      if (!isTaggableTarget(target, host)) {
        return match;
      }
      return `${prefix}${appendJourneyParam(target, journeyId)}`;
    }
  );
}

/** Splits text into code spans (a run of backticks closed by an equal run) and the rest. */
function splitInlineCode(text: string): Array<{ code: boolean; text: string }> {
  const parts: Array<{ code: boolean; text: string }> = [];
  let start = 0;
  let index = text.indexOf("`");
  while (index !== -1) {
    let run = index;
    while (text[run] === "`") {
      run += 1;
    }
    if (isEscaped(text, index)) {
      index = text.indexOf("`", index + 1);
      continue;
    }
    const length = run - index;
    let end = -1;
    for (let close = text.indexOf("`", run); close !== -1; ) {
      let closeRun = close;
      while (text[closeRun] === "`") {
        closeRun += 1;
      }
      if (closeRun - close === length) {
        end = closeRun;
        break;
      }
      close = text.indexOf("`", closeRun);
    }
    if (end === -1) {
      index = text.indexOf("`", run);
      continue;
    }
    parts.push({ code: false, text: text.slice(start, index) }, { code: true, text: text.slice(index, end) });
    start = end;
    index = text.indexOf("`", end);
  }
  parts.push({ code: false, text: text.slice(start) });
  return parts;
}

/** Splits Markdown into fenced code blocks and the rest; an unclosed fence runs to the end. */
function splitFences(markdown: string): Array<{ code: boolean; text: string }> {
  const parts: Array<{ code: boolean; text: string }> = [];
  const fenceLine = new RegExp(FENCE_LINE);
  let start = 0;
  for (let open = fenceLine.exec(markdown); open; open = fenceLine.exec(markdown)) {
    const marker = open[1] ?? "";
    // A backtick fence's info string can't contain backticks.
    if (marker.startsWith("`") && (open[2] ?? "").includes("`")) {
      continue;
    }
    let end = markdown.length;
    for (let close = fenceLine.exec(markdown); close; close = fenceLine.exec(markdown)) {
      const closing = close[1] ?? "";
      if (closing[0] === marker[0] && closing.length >= marker.length && (close[2] ?? "").trim() === "") {
        end = close.index + close[0].length;
        break;
      }
    }
    parts.push({ code: false, text: markdown.slice(start, open.index) }, { code: true, text: markdown.slice(open.index, end) });
    start = end;
    if (end === markdown.length) {
      break;
    }
  }
  parts.push({ code: false, text: markdown.slice(start) });
  return parts;
}

export function tagMarkdownLinks(
  markdown: string,
  journeyId: string,
  options: TagMarkdownLinksOptions = {}
): string {
  if (!JOURNEY_ID_PATTERN.test(journeyId)) {
    return markdown;
  }

  return splitFences(markdown)
    .map((block) =>
      block.code
        ? block.text
        : splitInlineCode(block.text)
            .map((part) => (part.code ? part.text : tagText(part.text, journeyId, options.host)))
            .join("")
    )
    .join("");
}

export type { TagMarkdownLinksOptions } from "./types.js";
