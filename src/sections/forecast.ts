import { html, type TemplateResult, nothing } from "lit";
import type { HomeAssistant } from "../helpers/hass.js";
import type { ForecastConfig, IconStyle } from "../config.js";
import type { ForecastStep } from "../helpers/weather.js";
import { Localizer } from "../localize.js";
import { getConditionIcon } from "../icons/conditions.js";
import { getUiIcon, WIND_DIAL } from "../icons/ui-icons.js";
import { formatHour, formatNumber, formatWeekday, normalizeBearing } from "../helpers/format.js";

export function renderForecast(
  hass: HomeAssistant,
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
        renderForecastColumn(step, config, iconStyle, isHourly, hass, localize),
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
  localize: Localizer,
): TemplateResult {
  const date = new Date(step.datetime);
  const heading = isHourly ? formatHour(date, hass) : formatWeekday(date, hass);

  const tempLine =
    step.temperature !== undefined
      ? html`<span>${Math.round(step.temperature)}°</span>${step.templow !== undefined
            ? html`<span class="lo"> / ${Math.round(step.templow)}°</span>`
            : nothing}`
      : nothing;

  return html`
    <div class="forecast-col">
      <span class="forecast-heading">${heading}</span>
      <span class="forecast-icon">${getConditionIcon(step.condition, iconStyle)}</span>
      ${tempLine ? html`<div class="forecast-temps">${tempLine}</div>` : nothing}
      ${config.rows.map((row) => renderForecastRow(row, step, hass, localize))}
    </div>
  `;
}

function renderForecastRow(
  row: string,
  step: ForecastStep,
  hass: HomeAssistant,
  _localize: Localizer,
): TemplateResult | typeof nothing {
  const value = (step as any)[row];
  if (value === undefined || value === null) return nothing;

  if (row === "wind_speed") {
    const bearing = normalizeBearing(step.wind_bearing) ?? 0;
    return html`<div class="forecast-row">
      <span class="dial">${WIND_DIAL(bearing)}</span>
      <span>${formatNumber(value, hass)}</span>
    </div>`;
  }

  let displayed: string;
  if (row === "precipitation") {
    displayed = `${formatNumber(value, hass, 1)} mm`;
  } else if (row === "precipitation_probability") {
    displayed = `${formatNumber(Math.round(value), hass)} %`;
  } else if (row === "temperature" || row === "apparent_temperature" || row === "dew_point") {
    displayed = `${Math.round(value)}°`;
  } else if (row === "humidity" || row === "cloud_coverage") {
    displayed = `${Math.round(value)} %`;
  } else {
    displayed = String(value);
  }

  return html`<div class="forecast-row">
    <span>${getUiIcon(row)}</span>
    <span>${displayed}</span>
  </div>`;
}
