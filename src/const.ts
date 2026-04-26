export const CARD_TYPE = "yet-another-weather-card";
export const CARD_EDITOR_TYPE = "yet-another-weather-card-editor";
export const CARD_VERSION = "0.1.0";

export const STANDARD_VALUES = [
  "temperature",
  "apparent_temperature",
  "humidity",
  "pressure",
  "wind_speed",
  "wind_gust_speed",
  "wind_bearing",
  "cloud_coverage",
  "visibility",
  "dew_point",
  "uv_index",
  "ozone",
  "sunrise",
  "sunset",
] as const;

export type StandardValue = (typeof STANDARD_VALUES)[number];

export const FORECAST_ROW_VALUES = [
  "temperature",
  "apparent_temperature",
  "precipitation",
  "precipitation_probability",
  "wind_speed",
  "wind_gust_speed",
  "uv_index",
  "humidity",
  "pressure",
  "cloud_coverage",
  "dew_point",
] as const;

export type ForecastRowValue = (typeof FORECAST_ROW_VALUES)[number];
