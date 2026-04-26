import type { HomeAssistant, HassEntity } from "./hass.js";
import type { GridItem, YawcConfig } from "../config.js";
import { getItemAttribute, getItemEntity } from "../config.js";
import type { ForecastType, IconStyle } from "../config.js";

export interface ForecastStep {
  datetime: string;
  condition?: string;
  temperature?: number;
  templow?: number;
  apparent_temperature?: number;
  precipitation?: number;
  precipitation_probability?: number;
  wind_speed?: number;
  wind_gust_speed?: number;
  wind_bearing?: number | string;
  cloud_coverage?: number;
  humidity?: number;
  pressure?: number;
  uv_index?: number;
  dew_point?: number;
}

export function getWeatherAttribute(entity: HassEntity | undefined, attribute: string): any {
  if (!entity) return undefined;
  return entity.attributes?.[attribute];
}

export function resolveItemValue(
  hass: HomeAssistant,
  weatherEntity: HassEntity | undefined,
  sunEntity: HassEntity | undefined,
  item: GridItem,
): { value: any; unit?: string; entity?: HassEntity } {
  const attr = getItemAttribute(item);
  const overrideEntity = getItemEntity(item);

  if (overrideEntity) {
    const e = hass.states[overrideEntity];
    return {
      value: e?.state,
      unit: e?.attributes?.unit_of_measurement,
      entity: e,
    };
  }

  if (!attr) return { value: undefined };

  if (attr === "sunrise" || attr === "sunset") {
    const e = sunEntity ?? hass.states["sun.sun"];
    const next = attr === "sunrise" ? "next_rising" : "next_setting";
    const iso = e?.attributes?.[next];
    return { value: iso, entity: e };
  }

  return {
    value: getWeatherAttribute(weatherEntity, attr),
    unit: getAttributeUnit(weatherEntity, attr),
  };
}

export function getAttributeUnit(
  entity: HassEntity | undefined,
  attribute: string,
): string | undefined {
  if (!entity) return undefined;
  const a = entity.attributes ?? {};
  switch (attribute) {
    case "temperature":
    case "apparent_temperature":
    case "dew_point":
      return a.temperature_unit;
    case "pressure":
      return a.pressure_unit;
    case "wind_speed":
    case "wind_gust_speed":
      return a.wind_speed_unit;
    case "visibility":
      return a.visibility_unit;
    case "humidity":
    case "cloud_coverage":
      return "%";
    case "ozone":
      return "DU";
    default:
      return undefined;
  }
}

export async function fetchForecast(
  hass: HomeAssistant,
  entityId: string,
  type: ForecastType,
): Promise<ForecastStep[]> {
  try {
    const result = await hass.callWS<{ response: Record<string, { forecast: ForecastStep[] }> }>({
      type: "call_service",
      domain: "weather",
      service: "get_forecasts",
      service_data: { type },
      target: { entity_id: entityId },
      return_response: true,
    });
    return result?.response?.[entityId]?.forecast ?? [];
  } catch {
    return [];
  }
}

export interface ResolvedConfig {
  weatherEntity: HassEntity | undefined;
  sunEntity: HassEntity | undefined;
  iconStyle: IconStyle;
}

export function resolveEntities(hass: HomeAssistant, config: YawcConfig): ResolvedConfig {
  return {
    weatherEntity: hass.states[config.entity],
    sunEntity: config.sun_entity ? hass.states[config.sun_entity] : hass.states["sun.sun"],
    iconStyle: config.icon_style,
  };
}
