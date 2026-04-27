import { html, type TemplateResult, nothing } from "lit";
import type { HassEntity, HomeAssistant } from "../helpers/hass.js";
import type { HeaderConfig, IconStyle } from "../config.js";
import { Localizer } from "../localize.js";
import { formatCompact, formatDate, formatTime } from "../helpers/format.js";
import { getConditionIcon } from "../icons/conditions.js";
import { getAttributeUnit } from "../helpers/weather.js";

export function renderHeader(
  hass: HomeAssistant,
  weather: HassEntity | undefined,
  sun: HassEntity | undefined,
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

  const tempUnit = getAttributeUnit(weather, "temperature");
  const tempUnitLetter = tempUnit && tempUnit.length > 1 ? tempUnit.slice(-1) : "";
  const windUnit = getAttributeUnit(weather, "wind_speed") ?? "m/s";

  const temperature = weather.attributes?.temperature;
  const apparent = weather.attributes?.apparent_temperature;
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
                  ${formatCompact(temperature)}<span class="header-unit-deg"
                    >°${tempUnitLetter}</span
                  >
                </div>
                <div class="header-cap">
                  ${apparent !== undefined
                    ? html`${localize.caption("feels_like")} ${formatCompact(apparent)}°`
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
