export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, any>;
  last_changed?: string;
  last_updated?: string;
}

export interface HassLocale {
  language: string;
  number_format?: string;
  time_format?: string;
  date_format?: string;
  first_weekday?: string;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  language: string;
  locale?: HassLocale;
  themes?: { darkMode: boolean };
  callWS: <T>(msg: Record<string, any>) => Promise<T>;
  callApi: <T>(method: string, path: string, params?: any) => Promise<T>;
  localize: (key: string, ...args: any[]) => string;
  formatEntityState?: (entity: HassEntity, state?: string) => string;
  formatEntityAttributeValue?: (entity: HassEntity, attribute: string, value?: any) => string;
}

export function getEntity(
  hass: HomeAssistant,
  entityId: string | undefined,
): HassEntity | undefined {
  if (!entityId) return undefined;
  return hass.states[entityId];
}
