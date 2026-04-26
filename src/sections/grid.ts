import { html, type TemplateResult, nothing } from "lit";
import type { HassEntity, HomeAssistant } from "../helpers/hass.js";
import type { GridConfig, GridItem } from "../config.js";
import { getItemAttribute, getItemEntity, getItemIcon, getItemLabel } from "../config.js";
import { Localizer } from "../localize.js";
import { getUiIcon } from "../icons/ui-icons.js";
import { formatNumber, formatTime, bearingToCompass, normalizeBearing } from "../helpers/format.js";
import { resolveItemValue, getAttributeUnit } from "../helpers/weather.js";

interface RenderedCell {
  iconKey: string;
  value: string;
  label: string;
}

export function renderGrid(
  hass: HomeAssistant,
  weather: HassEntity | undefined,
  sun: HassEntity | undefined,
  config: GridConfig,
  localize: Localizer,
): TemplateResult | typeof nothing {
  if (!config.enabled) return nothing;
  if (config.items.length === 0) return nothing;

  const cells = config.items.map((item) => renderCell(hass, weather, sun, item, localize));

  const styleClass = config.style === "compact" ? "grid-compact" : "grid-full";
  const labelsClass = config.show_labels ? "labels-on" : "labels-off";

  return html`
    <div class="grid ${styleClass} ${labelsClass}">
      ${cells.map(
        (c) => html`
          <div class="grid-cell">
            <span class="grid-icon">${getUiIcon(c.iconKey)}</span>
            <span class="grid-value">${c.value}</span>
            ${config.show_labels && c.label
              ? html`<span class="grid-label">${c.label}</span>`
              : nothing}
          </div>
        `,
      )}
    </div>
  `;
}

function renderCell(
  hass: HomeAssistant,
  weather: HassEntity | undefined,
  sun: HassEntity | undefined,
  item: GridItem,
  localize: Localizer,
): RenderedCell {
  const attr = getItemAttribute(item);
  const entityOverride = getItemEntity(item);
  const labelOverride = getItemLabel(item);
  const iconOverride = getItemIcon(item);

  const resolved = resolveItemValue(hass, weather, sun, item);

  const iconKey = iconOverride ?? attr ?? "generic";
  const label = labelOverride ?? defaultLabel(attr, resolved.entity, localize);
  const value = formatValue(attr, resolved.value, resolved.unit, hass, weather, entityOverride);

  return { iconKey, value, label };
}

function defaultLabel(
  attr: string | undefined,
  entity: HassEntity | undefined,
  localize: Localizer,
): string {
  if (attr) return localize.label(attr);
  if (entity?.attributes?.friendly_name) return entity.attributes.friendly_name;
  if (entity?.entity_id) return entity.entity_id;
  return "";
}

function formatValue(
  attr: string | undefined,
  raw: any,
  unit: string | undefined,
  hass: HomeAssistant,
  weather: HassEntity | undefined,
  entityOverride: string | undefined,
): string {
  if (raw === undefined || raw === null || raw === "") return "—";

  if (attr === "sunrise" || attr === "sunset") {
    const date = new Date(raw);
    if (Number.isNaN(date.getTime())) return "—";
    return formatTime(date, hass);
  }

  if (attr === "wind_bearing") {
    const deg = normalizeBearing(raw);
    return deg === undefined ? "—" : bearingToCompass(deg);
  }

  if (attr === "temperature" || attr === "apparent_temperature" || attr === "dew_point") {
    const u = unit ?? getAttributeUnit(weather, attr ?? "temperature") ?? "°";
    const numeric = Math.round(Number(raw));
    return `${formatNumber(numeric, hass)}°${u && u.length > 1 ? u.slice(-1) : ""}`;
  }

  if (attr === "humidity" || attr === "cloud_coverage") {
    return `${formatNumber(Math.round(Number(raw)), hass)} %`;
  }

  if (attr === "uv_index") {
    return formatNumber(Number(raw), hass, 1);
  }

  if (attr === "wind_speed" || attr === "wind_gust_speed") {
    const u = unit ?? getAttributeUnit(weather, attr) ?? "m/s";
    return `${formatNumber(Number(raw), hass)} ${u}`;
  }

  if (attr === "pressure") {
    const u = unit ?? getAttributeUnit(weather, "pressure") ?? "hPa";
    return `${formatNumber(Math.round(Number(raw)), hass)} ${u}`;
  }

  if (attr === "visibility") {
    const u = unit ?? getAttributeUnit(weather, "visibility") ?? "km";
    return `${formatNumber(Number(raw), hass, 1)} ${u}`;
  }

  if (attr === "ozone") {
    return `${formatNumber(Math.round(Number(raw)), hass)} DU`;
  }

  if (entityOverride) {
    const u = unit ?? "";
    return u ? `${raw} ${u}` : String(raw);
  }

  return String(raw);
}
