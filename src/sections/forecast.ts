import { html, type TemplateResult, nothing } from "lit";
import type { HassEntity, HomeAssistant } from "../helpers/hass.js";
import type { ForecastConfig, IconStyle } from "../config.js";
import type { ForecastStep } from "../helpers/weather.js";
import { Localizer } from "../localize.js";
import { getConditionIcon } from "../icons/conditions.js";
import { getUiIcon, WIND_DIAL } from "../icons/ui-icons.js";
import { formatCompact, formatHour, formatWeekday, normalizeBearing } from "../helpers/format.js";

export function renderForecast(
  hass: HomeAssistant,
  sun: HassEntity | undefined,
  forecast: ForecastStep[],
  config: ForecastConfig,
  iconStyle: IconStyle,
  localize: Localizer,
): TemplateResult | typeof nothing {
  if (!config.enabled) return nothing;
  if (forecast.length === 0) {
    return html`<div class="forecast forecast-empty">No forecast data</div>`;
  }

  const steps = forecast.slice(0, config.count);
  const isHourly = config.type === "hourly";

  return html`
    <div class="forecast" style="--forecast-cols: ${steps.length}">
      ${steps.map((step) =>
        renderForecastColumn(step, config, iconStyle, isHourly, hass, sun, localize),
      )}
    </div>
  `;
}

function renderForecastColumn(
  step: ForecastStep,
  config: ForecastConfig,
  iconStyle: IconStyle,
  isHourly: boolean,
  hass: HomeAssistant,
  sun: HassEntity | undefined,
  localize: Localizer,
): TemplateResult {
  const date = new Date(step.datetime);
  const heading = isHourly ? formatHour(date, hass) : formatWeekday(date, hass);

  return html`
    <div class="forecast-col">
      <span class="forecast-heading">${heading}</span>
      <span class="forecast-icon">${getConditionIcon(step.condition, iconStyle, date, sun)}</span>
      ${config.rows.map((row) => renderForecastRow(row, step, hass, localize))}
    </div>
  `;
}

function renderForecastRow(
  row: string,
  step: ForecastStep,
  _hass: HomeAssistant,
  _localize: Localizer,
): TemplateResult | typeof nothing {
  const value = (step as any)[row];
  if (value === undefined || value === null) return nothing;

  if (row === "wind_speed") {
    const bearing = normalizeBearing(step.wind_bearing) ?? 0;
    return html`<div class="forecast-row">
      <span class="dial">${WIND_DIAL(bearing)}</span>
      <span>${formatCompact(value)}</span>
    </div>`;
  }

  if (row === "temperature" || row === "apparent_temperature" || row === "dew_point") {
    return html`<div class="forecast-row">
      <span>${getUiIcon(row)}</span>
      <span>${formatCompact(value)}</span>
    </div>`;
  }

  if (row === "humidity" || row === "cloud_coverage" || row === "precipitation_probability") {
    return html`<div class="forecast-row">
      <span>${getUiIcon(row)}</span>
      <span>${formatCompact(value)}%</span>
    </div>`;
  }

  return html`<div class="forecast-row">
    <span>${getUiIcon(row)}</span>
    <span>${formatCompact(value)}</span>
  </div>`;
}
