import type { HomeAssistant } from "./hass.js";

export function formatNumber(
  value: number | string | undefined,
  hass: HomeAssistant,
  decimals?: number,
): string {
  if (value === undefined || value === null || value === "") return "—";
  const n = typeof value === "number" ? value : Number(value);
  if (Number.isNaN(n)) return String(value);
  const lang = hass.locale?.language ?? hass.language ?? "en";
  return new Intl.NumberFormat(lang, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);
}

export function formatTemperature(value: number | string | undefined, hass: HomeAssistant): string {
  if (value === undefined || value === null || value === "") return "—";
  const n = typeof value === "number" ? value : Number(value);
  if (Number.isNaN(n)) return String(value);
  return `${formatNumber(Math.round(n), hass)}°`;
}

export function formatTime(date: Date, hass: HomeAssistant): string {
  const lang = hass.locale?.language ?? hass.language ?? "en";
  const hour12 = hass.locale?.time_format === "12";
  return new Intl.DateTimeFormat(lang, {
    hour: "2-digit",
    minute: "2-digit",
    hour12,
  }).format(date);
}

export function formatDate(date: Date, hass: HomeAssistant): string {
  const lang = hass.locale?.language ?? hass.language ?? "en";
  return new Intl.DateTimeFormat(lang, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function formatWeekday(date: Date, hass: HomeAssistant): string {
  const lang = hass.locale?.language ?? hass.language ?? "en";
  return new Intl.DateTimeFormat(lang, { weekday: "short" }).format(date);
}

export function formatHour(date: Date, hass: HomeAssistant): string {
  const lang = hass.locale?.language ?? hass.language ?? "en";
  const hour12 = hass.locale?.time_format === "12";
  return new Intl.DateTimeFormat(lang, {
    hour: "2-digit",
    minute: "2-digit",
    hour12,
  }).format(date);
}

export function bearingToCompass(bearing: number | undefined): string {
  if (bearing === undefined || bearing === null || Number.isNaN(bearing)) return "—";
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round((bearing % 360) / 45) % 8;
  return dirs[index];
}

export function normalizeBearing(value: any): number | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value === "number") return value;
  const upper = String(value).toUpperCase();
  const map: Record<string, number> = {
    N: 0,
    NNE: 22.5,
    NE: 45,
    ENE: 67.5,
    E: 90,
    ESE: 112.5,
    SE: 135,
    SSE: 157.5,
    S: 180,
    SSW: 202.5,
    SW: 225,
    WSW: 247.5,
    W: 270,
    WNW: 292.5,
    NW: 315,
    NNW: 337.5,
  };
  if (upper in map) return map[upper];
  const num = Number(value);
  return Number.isNaN(num) ? undefined : num;
}
