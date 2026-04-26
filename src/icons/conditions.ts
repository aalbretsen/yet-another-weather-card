import { svg, type SVGTemplateResult } from "lit";
import type { IconStyle } from "../config.js";
import { CONDITION_ICONS_LINE } from "./conditions-line.js";
import { CONDITION_ICONS_FILL } from "./conditions-fill.js";

const FALLBACK = svg`
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round">
    <circle cx="16" cy="16" r="9"/>
    <line x1="16" y1="11" x2="16" y2="17"/>
    <circle cx="16" cy="20" r="1.4" fill="currentColor"/>
  </svg>`;

export function getConditionIcon(
  condition: string | undefined,
  style: IconStyle,
): SVGTemplateResult {
  if (!condition) return FALLBACK;
  const map = style === "fill" ? CONDITION_ICONS_FILL : CONDITION_ICONS_LINE;
  return map[condition] ?? FALLBACK;
}
