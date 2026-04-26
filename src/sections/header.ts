import { html, type TemplateResult, nothing } from "lit";
import type { HassEntity, HomeAssistant } from "../helpers/hass.js";
import type { HeaderConfig, IconStyle } from "../config.js";
import { Localizer } from "../localize.js";
import { formatDate, formatNumber, formatTemperature, formatTime } from "../helpers/format.js";
import { getConditionIcon } from "../icons/conditions.js";
import { getAttributeUnit } from "../helpers/weather.js";

export function renderHeader(
  hass: HomeAssistant,
  weather: HassEntity | undefined,
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

  const tempUnit = getAttributeUnit(weather, "temperature") ?? "°";
  const windUnit = getAttributeUnit(weather, "wind_speed") ?? "m/s";

  const temperature = weather.attributes?.temperature;
  const apparent = weather.attributes?.apparent_temperature;
  const windSpeed = weather.attributes?.wind_speed;
  const windGust = weather.attributes?.wind_gust_speed;

  const friendlyName = weather.attributes?.friendly_name;

  return html`
    <div class="header">
      <div class="header-icon">${getConditionIcon(condition, iconStyle)}</div>

      <div class="header-info">
        ${config.show_location && friendlyName
          ? html`<div class="header-location">${friendlyName}</div>`
          : nothing}
        ${config.show_condition
          ? html`<div class="header-condition">${conditionLabel}</div>`
          : nothing}
      </div>

      <div class="header-block">
        <div class="header-big">
          ${formatNumber(
            temperature !== undefined ? Math.round(Number(temperature)) : undefined,
            hass,
          )}<span class="header-unit-deg"
            >°${tempUnit && tempUnit.length > 1 ? tempUnit.slice(-1) : ""}</span
          >
        </div>
        ${config.show_feels_like && apparent !== undefined
          ? html`<div class="header-cap">
              ${localize.caption("feels_like")} ${formatTemperature(apparent, hass)}
            </div>`
          : nothing}
      </div>

      ${config.show_wind_block
        ? html`
            <div class="header-block">
              <div class="header-big">
                ${formatNumber(windSpeed, hass)}<span class="header-unit"> ${windUnit}</span>
              </div>
              ${config.show_wind_gust && windGust !== undefined
                ? html`<div class="header-cap">
                    ${localize.caption("gust")} ${formatNumber(windGust, hass)} ${windUnit}
                  </div>`
                : nothing}
            </div>
          `
        : nothing}
      ${config.show_time_block
        ? html`
            <div class="header-block">
              <div class="header-big">${formatTime(now, hass)}</div>
              ${config.show_date
                ? html`<div class="header-cap">${formatDate(now, hass)}</div>`
                : nothing}
            </div>
          `
        : nothing}
    </div>
  `;
}
