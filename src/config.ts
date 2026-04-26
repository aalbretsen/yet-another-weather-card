import type { ForecastRowValue, StandardValue } from "./const.js";

export type IconStyle = "line" | "fill";
export type GridStyle = "full" | "compact";
export type ForecastType = "daily" | "hourly" | "twice_daily";

export interface HeaderConfig {
  show_location: boolean;
  show_condition: boolean;
  show_feels_like: boolean;
  show_wind_block: boolean;
  show_wind_gust: boolean;
  show_time_block: boolean;
  show_date: boolean;
}

export interface GridItemStandard {
  attribute: StandardValue;
  label?: string;
  entity?: string;
  icon?: string;
}

export interface GridItemCustom {
  entity: string;
  label?: string;
  icon?: string;
}

export type GridItem = StandardValue | GridItemStandard | GridItemCustom;

export interface GridConfig {
  enabled: boolean;
  style: GridStyle;
  show_labels: boolean;
  items: GridItem[];
}

export interface ForecastConfig {
  enabled: boolean;
  type: ForecastType;
  count: number;
  rows: ForecastRowValue[];
}

export interface YawcConfig {
  type: string;
  entity: string;
  sun_entity?: string;
  language?: "auto" | "en" | "nb";
  icon_style: IconStyle;
  header: HeaderConfig;
  grid: GridConfig;
  forecast: ForecastConfig;
}

export const DEFAULT_HEADER: HeaderConfig = {
  show_location: true,
  show_condition: true,
  show_feels_like: true,
  show_wind_block: false,
  show_wind_gust: true,
  show_time_block: true,
  show_date: true,
};

export const DEFAULT_GRID: GridConfig = {
  enabled: false,
  style: "full",
  show_labels: true,
  items: ["humidity", "wind_speed", "pressure", "uv_index"],
};

export const DEFAULT_FORECAST: ForecastConfig = {
  enabled: true,
  type: "daily",
  count: 5,
  rows: ["precipitation"],
};

export function applyDefaults(raw: Partial<YawcConfig>): YawcConfig {
  return {
    type: raw.type ?? "custom:yet-another-weather-card",
    entity: raw.entity ?? "",
    sun_entity: raw.sun_entity,
    language: raw.language ?? "auto",
    icon_style: raw.icon_style ?? "line",
    header: { ...DEFAULT_HEADER, ...(raw.header ?? {}) },
    grid: {
      ...DEFAULT_GRID,
      ...(raw.grid ?? {}),
      items: raw.grid?.items ?? DEFAULT_GRID.items,
    },
    forecast: {
      ...DEFAULT_FORECAST,
      ...(raw.forecast ?? {}),
      rows: raw.forecast?.rows ?? DEFAULT_FORECAST.rows,
    },
  };
}

export function getItemAttribute(item: GridItem): StandardValue | undefined {
  if (typeof item === "string") return item;
  if ("attribute" in item) return item.attribute;
  return undefined;
}

export function getItemEntity(item: GridItem): string | undefined {
  if (typeof item === "string") return undefined;
  return item.entity;
}

export function getItemLabel(item: GridItem): string | undefined {
  if (typeof item === "string") return undefined;
  return item.label;
}

export function getItemIcon(item: GridItem): string | undefined {
  if (typeof item === "string") return undefined;
  return item.icon;
}
