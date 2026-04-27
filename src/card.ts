import { LitElement, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import type { HomeAssistant } from "./helpers/hass.js";
import { CARD_TYPE, CARD_VERSION } from "./const.js";
import { applyDefaults, type YawcConfig } from "./config.js";
import { Localizer } from "./localize.js";
import { fetchForecast, resolveEntities, type ForecastStep } from "./helpers/weather.js";
import { renderHeader } from "./sections/header.js";
import { renderGrid } from "./sections/grid.js";
import { renderForecast } from "./sections/forecast.js";
import { cardStyles } from "./styles.js";

export class YetAnotherWeatherCard extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private config!: YawcConfig;
  @state() private forecast: ForecastStep[] = [];
  @state() private now: Date = new Date();

  private clockTimer?: number;
  private forecastTimer?: number;
  private lastForecastEntity?: string;
  private lastForecastType?: string;

  public setConfig(raw: Partial<YawcConfig>): void {
    if (!raw.entity) {
      throw new Error("Entity is required");
    }
    this.config = applyDefaults(raw);
  }

  public getCardSize(): number {
    let size = 2;
    if (this.config?.grid?.enabled) size += 2;
    if (this.config?.forecast?.enabled) size += 2;
    return size;
  }

  public static getStubConfig(_hass: HomeAssistant, entities: string[]): Partial<YawcConfig> {
    const weather = entities.find((e) => e.startsWith("weather."));
    return { type: `custom:${CARD_TYPE}`, entity: weather ?? "" };
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.startClock();
    this.scheduleForecast();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.stopClock();
    this.stopForecastPolling();
  }

  updated(changed: Map<string, unknown>): void {
    if (changed.has("hass") || changed.has("config")) {
      this.refreshForecastIfNeeded();
    }
  }

  private startClock(): void {
    this.now = new Date();
    this.clockTimer = window.setInterval(() => {
      this.now = new Date();
    }, 30_000);
  }

  private stopClock(): void {
    if (this.clockTimer) {
      window.clearInterval(this.clockTimer);
      this.clockTimer = undefined;
    }
  }

  private scheduleForecast(): void {
    this.stopForecastPolling();
    this.forecastTimer = window.setInterval(() => {
      this.refreshForecast();
    }, 5 * 60_000);
  }

  private stopForecastPolling(): void {
    if (this.forecastTimer) {
      window.clearInterval(this.forecastTimer);
      this.forecastTimer = undefined;
    }
  }

  private refreshForecastIfNeeded(): void {
    if (!this.hass || !this.config?.entity) return;
    const sameEntity = this.lastForecastEntity === this.config.entity;
    const sameType = this.lastForecastType === this.config.forecast.type;
    if (!sameEntity || !sameType || this.forecast.length === 0) {
      this.refreshForecast();
    }
  }

  private async refreshForecast(): Promise<void> {
    if (!this.hass || !this.config?.entity) return;
    if (!this.config.forecast.enabled) {
      this.forecast = [];
      return;
    }
    this.lastForecastEntity = this.config.entity;
    this.lastForecastType = this.config.forecast.type;
    this.forecast = await fetchForecast(this.hass, this.config.entity, this.config.forecast.type);
  }

  protected render() {
    if (!this.hass || !this.config) return nothing;

    const language = Localizer.resolveLanguage(this.config.language, this.hass.language);
    const localize = new Localizer(language);
    const { weatherEntity, sunEntity, iconStyle } = resolveEntities(this.hass, this.config);

    const header = renderHeader(
      this.hass,
      weatherEntity,
      sunEntity,
      this.config.header,
      iconStyle,
      localize,
      this.now,
    );

    const grid = renderGrid(this.hass, weatherEntity, sunEntity, this.config.grid, localize);
    const forecast = renderForecast(
      this.hass,
      sunEntity,
      this.forecast,
      this.config.forecast,
      iconStyle,
      localize,
    );

    return html`
      <ha-card>
        ${header}
        ${grid !== nothing
          ? html`<div class="section-divider"></div>
              ${grid}`
          : nothing}
        ${forecast !== nothing
          ? html`<div class="section-divider"></div>
              ${forecast}`
          : nothing}
      </ha-card>
    `;
  }

  public static async getConfigElement(): Promise<HTMLElement> {
    await import("./editor.js");
    return document.createElement(`${CARD_TYPE}-editor`);
  }
}

console.info(
  `%c YET-ANOTHER-WEATHER-CARD %c v${CARD_VERSION} `,
  "color: white; background: #03a9f4; font-weight: 700;",
  "color: #03a9f4; background: white; font-weight: 700;",
);
