import { html, type TemplateResult, nothing } from "lit";
import type { HassEntity, HomeAssistant } from "../helpers/hass.js";
import type { HeaderConfig, IconStyle } from "../config.js";
import type { ForecastStep } from "../helpers/weather.js";
import { Localizer } from "../localize.js";
import { formatCompact, formatDate, formatTime } from "../helpers/format.js";
import { getConditionIcon } from "../icons/conditions.js";
import { getAttributeUnit } from "../helpers/weather.js";

export function renderHeader(
  hass: HomeAssistant,
  weather: HassEntity | undefined,
  sun: HassEntity | undefined,
  dailyForecast: ForecastStep[],
  hourlyForecast: ForecastStep[],
  config: HeaderConfig,
  iconStyle: IconStyle,
  localize: Localizer,
  now: Date,
): TemplateResult {
  if (!weather) {
    return html`<div class="header"><div class="missing">Weather entity not found</div></div>`;
  }

  const condition = weather.state;
  const conditionLabel =
    hass.localize?.(`component.weather.entity_component._.state.${condition}`) || condition;

  const windUnit = getAttributeUnit(weather, "wind_speed") ?? "m/s";

  const today = pickToday(dailyForecast, now);
  const headerTemp = today?.temperature ?? weather.attributes?.temperature;

  const hourlyMinMax = computeTodayMinMax(hourlyForecast, now);
  const headerMin = hourlyMinMax.min ?? today?.templow;
  const headerMax = hourlyMinMax.max ?? today?.temperature;

  const windSpeed = weather.attributes?.wind_speed;
  const windGust = weather.attributes?.wind_gust_speed;

  const name = config.name ?? weather.attributes?.friendly_name ?? weather.entity_id;

  return html`
    <div class="header">
      <div class="header-left">
        <div class="header-icon">${getConditionIcon(condition, iconStyle, now, sun)}</div>
        <div class="header-info">
          <div class="header-location">${name}</div>
          ${config.show_condition
            ? html`<div class="header-condition">${conditionLabel}</div>`
            : nothing}
        </div>
      </div>

      <div class="header-right">
        ${config.show_wind
          ? html`
              <div class="header-block">
                <div class="header-big">
                  ${formatCompact(windSpeed)}<span class="header-unit"> ${windUnit}</span>
                </div>
                <div class="header-cap">
                  ${windGust !== undefined
                    ? html`${localize.caption("gust")} ${formatCompact(windGust)} ${windUnit}`
                    : nothing}
                </div>
              </div>
            `
          : nothing}
        ${config.show_temperature
          ? html`
              <div class="header-block">
                <div class="header-big">
                  ${formatCompact(headerTemp)}<span class="header-unit-deg">°</span>
                </div>
                <div class="header-cap">
                  ${headerMin !== undefined && headerMax !== undefined
                    ? html`${formatCompact(headerMin)}° / ${formatCompact(headerMax)}°`
                    : nothing}
                </div>
              </div>
            `
          : nothing}
        ${config.show_clock
          ? html`
              <div class="header-block">
                <div class="header-big">${formatTime(now, hass)}</div>
                <div class="header-cap">${formatDate(now, hass)}</div>
              </div>
            `
          : nothing}
      </div>
    </div>
  `;
}

function pickToday(forecast: ForecastStep[], now: Date): ForecastStep | undefined {
  if (forecast.length === 0) return undefined;
  const todayKey = ymd(now);
  const match = forecast.find((step) => {
    const d = new Date(step.datetime);
    return !Number.isNaN(d.getTime()) && ymd(d) === todayKey;
  });
  return match ?? forecast[0];
}

function computeTodayMinMax(hourly: ForecastStep[], now: Date): { min?: number; max?: number } {
  if (hourly.length === 0) return {};
  const todayKey = ymd(now);
  let min: number | undefined;
  let max: number | undefined;
  for (const step of hourly) {
    if (typeof step.temperature !== "number") continue;
    const d = new Date(step.datetime);
    if (Number.isNaN(d.getTime()) || ymd(d) !== todayKey) continue;
    if (min === undefined || step.temperature < min) min = step.temperature;
    if (max === undefined || step.temperature > max) max = step.temperature;
  }
  return { min, max };
}

function ymd(d: Date): string {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}
