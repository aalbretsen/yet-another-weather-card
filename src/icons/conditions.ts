import { svg, type SVGTemplateResult } from "lit";
import type { IconStyle } from "../config.js";
import type { HassEntity } from "../helpers/hass.js";
import { CONDITION_ICONS_LINE } from "./conditions-line.js";
import { CONDITION_ICONS_FILL } from "./conditions-fill.js";

const FALLBACK = svg`
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round">
    <circle cx="16" cy="16" r="9"/>
    <line x1="16" y1="11" x2="16" y2="17"/>
    <circle cx="16" cy="20" r="1.4" fill="currentColor"/>
  </svg>`;

const DAY_TO_NIGHT: Record<string, string> = {
  sunny: "clear-night",
  clear: "clear-night",
  partlycloudy: "partly-cloudy-night",
  "partly-cloudy": "partly-cloudy-night",
};

export function getConditionIcon(
  condition: string | undefined,
  style: IconStyle,
  at?: Date,
  sun?: HassEntity,
): SVGTemplateResult {
  if (!condition) return FALLBACK;
  const map = style === "fill" ? CONDITION_ICONS_FILL : CONDITION_ICONS_LINE;

  const resolved = remapForNight(condition, at, sun);
  return map[resolved] ?? map[condition] ?? FALLBACK;
}

function remapForNight(
  condition: string,
  at: Date | undefined,
  sun: HassEntity | undefined,
): string {
  if (!at || !sun) return condition;
  const target = DAY_TO_NIGHT[condition];
  if (!target) return condition;
  return isNightAt(at, sun) ? target : condition;
}

function isNightAt(at: Date, sun: HassEntity): boolean {
  const risingIso = sun.attributes?.next_rising;
  const settingIso = sun.attributes?.next_setting;
  if (!risingIso || !settingIso) return false;

  const rising = new Date(risingIso);
  const setting = new Date(settingIso);
  if (Number.isNaN(rising.getTime()) || Number.isNaN(setting.getTime())) return false;

  const target = new Date(at);
  const risingOnDate = new Date(target);
  risingOnDate.setHours(rising.getHours(), rising.getMinutes(), 0, 0);
  const settingOnDate = new Date(target);
  settingOnDate.setHours(setting.getHours(), setting.getMinutes(), 0, 0);

  return target < risingOnDate || target >= settingOnDate;
}
