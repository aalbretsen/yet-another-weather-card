import { LitElement, html, css, nothing, type TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import type { HomeAssistant } from "./helpers/hass.js";
import {
  applyDefaults,
  type ForecastType,
  type GridItem,
  type GridStyle,
  type IconStyle,
  type YawcConfig,
  getItemAttribute,
  getItemEntity,
  getItemLabel,
} from "./config.js";
import {
  CARD_EDITOR_TYPE,
  FORECAST_ROW_VALUES,
  STANDARD_VALUES,
  type StandardValue,
} from "./const.js";
import { Localizer } from "./localize.js";

type Section = "entities" | "header" | "grid" | "forecast" | "appearance";

const SUN_VALUES = new Set<StandardValue>(["sunrise", "sunset"]);
const WEATHER_ONLY: StandardValue[] = STANDARD_VALUES.filter(
  (v) => !SUN_VALUES.has(v),
) as StandardValue[];

interface CustomDraft {
  entity: string;
  label: string;
  icon: string;
}

export class YawcEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private config!: YawcConfig;
  @state() private openSection: Section = "entities";
  @state() private addingCustom = false;
  @state() private customDraft: CustomDraft = { entity: "", label: "", icon: "" };

  static styles = css`
    :host {
      display: block;
      --ed-bg: var(--card-background-color, #fff);
      --ed-bg-alt: var(--secondary-background-color, #f4f4f4);
      --ed-border: var(--divider-color, rgba(0, 0, 0, 0.12));
      --ed-text: var(--primary-text-color, #212121);
      --ed-text-secondary: var(--secondary-text-color, #6f6f6f);
      --ed-accent: var(--primary-color, #03a9f4);
    }

    .section {
      border: 1px solid var(--ed-border);
      border-radius: 8px;
      margin-bottom: 8px;
      background: var(--ed-bg);
      overflow: hidden;
    }

    .section-header {
      padding: 12px 14px;
      font-weight: 500;
      font-size: 14px;
      color: var(--ed-text);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
    }

    .section-header:hover {
      background: var(--ed-bg-alt);
    }

    .chev {
      transition: transform 150ms ease;
      color: var(--ed-text-secondary);
    }

    .open .chev {
      transform: rotate(90deg);
    }

    .section-body {
      padding: 6px 14px 14px;
      border-top: 1px solid var(--ed-border);
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin: 10px 0;
    }

    .field-label {
      font-size: 11px;
      color: var(--ed-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .field-help {
      font-size: 11px;
      color: var(--ed-text-secondary);
      margin-top: 2px;
    }

    input[type="text"],
    select {
      padding: 8px 10px;
      border: 1px solid var(--ed-border);
      border-radius: 6px;
      background: var(--ed-bg);
      color: var(--ed-text);
      font-size: 13px;
      font-family: inherit;
    }

    .toggles {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px 14px;
      margin-top: 6px;
    }

    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      padding: 4px 0;
    }

    .switch {
      position: relative;
      width: 32px;
      height: 18px;
      background: var(--ed-border);
      border-radius: 10px;
      cursor: pointer;
      transition: background 120ms ease;
      flex-shrink: 0;
    }

    .switch.on {
      background: var(--ed-accent);
    }

    .switch::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      transition: left 120ms ease;
    }

    .switch.on::after {
      left: 16px;
    }

    .item-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin: 8px 0;
    }

    .item {
      display: grid;
      grid-template-columns: auto 1fr auto auto auto auto;
      align-items: center;
      gap: 6px;
      padding: 6px 8px;
      background: var(--ed-bg-alt);
      border: 1px solid var(--ed-border);
      border-radius: 6px;
    }

    .item-name {
      font-size: 13px;
      color: var(--ed-text);
    }

    .item-meta {
      font-size: 11px;
      color: var(--ed-text-secondary);
      margin-left: 6px;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    }

    .icon-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      color: var(--ed-text-secondary);
      font-size: 14px;
      line-height: 1;
      width: 26px;
      height: 26px;
    }

    .icon-btn:hover {
      background: var(--ed-bg);
      color: var(--ed-text);
    }

    .icon-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .icon-btn.danger:hover {
      color: #d32f2f;
    }

    .add-row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 8px;
      align-items: center;
      padding-top: 10px;
      border-top: 1px dashed var(--ed-border);
      margin-top: 8px;
    }

    .btn {
      padding: 8px 14px;
      border-radius: 6px;
      background: var(--ed-accent);
      color: #fff;
      border: none;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
    }

    .btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .btn-secondary {
      padding: 7px 12px;
      border-radius: 6px;
      background: transparent;
      color: var(--ed-text-secondary);
      border: 1px solid var(--ed-border);
      font-size: 12px;
      cursor: pointer;
    }

    .custom-panel {
      margin-top: 10px;
      padding: 12px;
      background: var(--ed-bg-alt);
      border: 1px solid var(--ed-border);
      border-radius: 6px;
      display: grid;
      gap: 10px;
    }

    .actions-row {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }

    .row-toggle {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 0;
      font-size: 13px;
    }

    .row-toggle > span:first-child {
      flex: 1;
      min-width: 0;
    }
  `;

  public setConfig(raw: Partial<YawcConfig>): void {
    this.config = applyDefaults(raw);
  }

  private fire(): void {
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this.config },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private updateRoot<K extends keyof YawcConfig>(
    patch: Pick<YawcConfig, K> | Partial<YawcConfig>,
  ): void {
    this.config = { ...this.config, ...patch } as YawcConfig;
    this.fire();
  }

  private updateNested<S extends "header" | "grid" | "forecast">(
    section: S,
    patch: Partial<YawcConfig[S]>,
  ): void {
    this.config = {
      ...this.config,
      [section]: { ...this.config[section], ...patch },
    } as YawcConfig;
    this.fire();
  }

  private toggleSection(s: Section): void {
    this.openSection = this.openSection === s ? ("" as Section) : s;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this.hass || !this.config) return nothing;
    const language = Localizer.resolveLanguage(this.config.language, this.hass.language);
    const localize = new Localizer(language);

    return html`
      ${this.section(
        "entities",
        localize.editor("section_entities"),
        this.renderEntities(localize),
      )}
      ${this.section("header", localize.editor("section_header"), this.renderHeader(localize))}
      ${this.section("grid", localize.editor("section_grid"), this.renderGrid(localize))}
      ${this.section(
        "forecast",
        localize.editor("section_forecast"),
        this.renderForecast(localize),
      )}
      ${this.section(
        "appearance",
        localize.editor("section_appearance"),
        this.renderAppearance(localize),
      )}
    `;
  }

  private section(id: Section, title: string, body: TemplateResult): TemplateResult {
    const isOpen = this.openSection === id;
    return html`
      <div class="section ${isOpen ? "open" : ""}">
        <div class="section-header" @click=${() => this.toggleSection(id)}>
          <span>${title}</span>
          <span class="chev">▶</span>
        </div>
        ${isOpen ? html`<div class="section-body">${body}</div>` : nothing}
      </div>
    `;
  }

  private renderEntities(localize: Localizer): TemplateResult {
    const weatherEntities = Object.keys(this.hass?.states ?? {}).filter((id) =>
      id.startsWith("weather."),
    );
    const sunEntities = Object.keys(this.hass?.states ?? {}).filter((id) => id.startsWith("sun."));

    return html`
      <div class="field">
        <span class="field-label">${localize.editor("entity")}</span>
        <select
          .value=${this.config.entity}
          @change=${(e: Event) =>
            this.updateRoot({ entity: (e.target as HTMLSelectElement).value })}
        >
          <option value="" ?selected=${!this.config.entity}>—</option>
          ${weatherEntities.map(
            (id) => html`<option value=${id} ?selected=${id === this.config.entity}>${id}</option>`,
          )}
        </select>
      </div>
      <div class="field">
        <span class="field-label">${localize.editor("sun_entity")}</span>
        <select
          .value=${this.config.sun_entity ?? ""}
          @change=${(e: Event) => {
            const v = (e.target as HTMLSelectElement).value;
            this.updateRoot({ sun_entity: v || undefined });
          }}
        >
          <option value="" ?selected=${!this.config.sun_entity}>sun.sun (default)</option>
          ${sunEntities.map(
            (id) =>
              html`<option value=${id} ?selected=${id === this.config.sun_entity}>${id}</option>`,
          )}
        </select>
      </div>
    `;
  }

  private renderHeader(localize: Localizer): TemplateResult {
    const h = this.config.header;
    const t = (
      key: "show_condition" | "show_temperature" | "show_wind" | "show_clock",
      labelKey: Parameters<typeof localize.editor>[0],
    ) =>
      this.toggleRow(localize.editor(labelKey), h[key], (v) =>
        this.updateNested("header", { [key]: v } as any),
      );

    return html`
      <div class="field">
        <span class="field-label">${localize.editor("name")}</span>
        <input
          type="text"
          .value=${h.name ?? ""}
          placeholder=${localize.editor("name_placeholder")}
          @change=${(e: Event) => {
            const v = (e.target as HTMLInputElement).value.trim();
            this.updateNested("header", { name: v ? v : undefined });
          }}
        />
        <span class="field-help">${localize.editor("name_help")}</span>
      </div>
      <div class="toggles">
        ${t("show_condition", "show_condition")} ${t("show_temperature", "show_temperature")}
        ${t("show_wind", "show_wind")} ${t("show_clock", "show_clock")}
      </div>
    `;
  }

  private toggleRow(label: string, on: boolean, onChange: (v: boolean) => void): TemplateResult {
    return html`
      <div class="toggle-row">
        <span>${label}</span>
        <span class="switch ${on ? "on" : ""}" @click=${() => onChange(!on)}></span>
      </div>
    `;
  }

  private renderGrid(localize: Localizer): TemplateResult {
    const g = this.config.grid;
    return html`
      <div class="row-toggle">
        <span>${localize.editor("grid_enabled")}</span>
        <span
          class="switch ${g.enabled ? "on" : ""}"
          @click=${() => this.updateNested("grid", { enabled: !g.enabled })}
        ></span>
      </div>

      <div class="field">
        <span class="field-label">${localize.editor("grid_style")}</span>
        <select
          .value=${g.style}
          @change=${(e: Event) =>
            this.updateNested("grid", {
              style: (e.target as HTMLSelectElement).value as GridStyle,
            })}
        >
          <option value="full" ?selected=${g.style === "full"}>
            ${localize.editor("grid_style_full")}
          </option>
          <option value="compact" ?selected=${g.style === "compact"}>
            ${localize.editor("grid_style_compact")}
          </option>
        </select>
      </div>

      <div class="row-toggle">
        <span>${localize.editor("grid_show_labels")}</span>
        <span
          class="switch ${g.show_labels ? "on" : ""}"
          @click=${() => this.updateNested("grid", { show_labels: !g.show_labels })}
        ></span>
      </div>

      <div class="field">
        <span class="field-label">${localize.editor("grid_items")}</span>
        <span class="field-help">${localize.editor("grid_items_help")}</span>
      </div>

      ${this.renderItemList(localize)} ${this.renderItemAdder(localize)}
    `;
  }

  private renderItemList(localize: Localizer): TemplateResult {
    return html`
      <div class="item-list">
        ${this.config.grid.items.map((item, idx) => this.renderItem(item, idx, localize))}
      </div>
    `;
  }

  private renderItem(item: GridItem, idx: number, localize: Localizer): TemplateResult {
    const attr = getItemAttribute(item);
    const ent = getItemEntity(item);
    const label = getItemLabel(item);
    const items = this.config.grid.items;

    const displayName = label
      ? label
      : attr
        ? localize.label(attr)
        : ent && this.hass?.states[ent]?.attributes?.friendly_name
          ? this.hass.states[ent].attributes.friendly_name
          : (ent ?? "?");

    const meta = attr ? "weather attr" : (ent ?? "");

    return html`
      <div class="item">
        <span class="item-name">${displayName}</span>
        <span class="item-meta">${meta}</span>
        <button
          class="icon-btn"
          ?disabled=${idx === 0}
          @click=${() => this.moveItem(idx, -1)}
          title="Move up"
        >
          ▲
        </button>
        <button
          class="icon-btn"
          ?disabled=${idx === items.length - 1}
          @click=${() => this.moveItem(idx, 1)}
          title="Move down"
        >
          ▼
        </button>
        <button class="icon-btn" @click=${() => this.editLabel(idx, localize)} title="Edit label">
          ✎
        </button>
        <button class="icon-btn danger" @click=${() => this.removeItem(idx)} title="Remove">
          ✕
        </button>
      </div>
    `;
  }

  private moveItem(idx: number, delta: number): void {
    const items = [...this.config.grid.items];
    const target = idx + delta;
    if (target < 0 || target >= items.length) return;
    [items[idx], items[target]] = [items[target], items[idx]];
    this.updateNested("grid", { items });
  }

  private removeItem(idx: number): void {
    const items = this.config.grid.items.filter((_, i) => i !== idx);
    this.updateNested("grid", { items });
  }

  private editLabel(idx: number, localize: Localizer): void {
    const item = this.config.grid.items[idx];
    const attr = getItemAttribute(item);
    const ent = getItemEntity(item);
    const current = getItemLabel(item) ?? "";
    const fallback = attr
      ? localize.label(attr)
      : ent && this.hass?.states[ent]?.attributes?.friendly_name
        ? this.hass.states[ent].attributes.friendly_name
        : (ent ?? "");

    const next = window.prompt(
      `${localize.editor("label_override")}\n${localize.format("label_default", { default: fallback })}\n${localize.editor("label_help")}`,
      current,
    );
    if (next === null) return;

    const items = [...this.config.grid.items];
    if (next === "") {
      if (typeof item === "string") return;
      const cleared = { ...item };
      delete cleared.label;
      items[idx] =
        Object.keys(cleared).length === 1 && "attribute" in cleared ? cleared.attribute! : cleared;
    } else {
      if (typeof item === "string") {
        items[idx] = { attribute: item, label: next };
      } else {
        items[idx] = { ...item, label: next };
      }
    }
    this.updateNested("grid", { items });
  }

  private renderItemAdder(localize: Localizer): TemplateResult {
    const existing = new Set(
      this.config.grid.items.map((i) => getItemAttribute(i)).filter(Boolean) as string[],
    );

    return html`
      <div class="add-row">
        <select id="add-select">
          <option value="">${localize.editor("add_item")}</option>
          <optgroup label=${localize.editor("from_weather")}>
            ${WEATHER_ONLY.map(
              (v) =>
                html`<option value=${v} ?disabled=${existing.has(v)}>
                  ${localize.label(v)}${existing.has(v)
                    ? ` ${localize.editor("already_added")}`
                    : ""}
                </option>`,
            )}
          </optgroup>
          <optgroup label=${localize.editor("from_sun")}>
            ${(["sunrise", "sunset"] as StandardValue[]).map(
              (v) =>
                html`<option value=${v} ?disabled=${existing.has(v)}>
                  ${localize.label(v)}${existing.has(v)
                    ? ` ${localize.editor("already_added")}`
                    : ""}
                </option>`,
            )}
          </optgroup>
          <option value="__custom__">${localize.editor("custom_option")}</option>
        </select>
        <button class="btn" @click=${() => this.handleAdd()}>${localize.editor("add")}</button>
      </div>

      ${this.addingCustom ? this.renderCustomPanel(localize) : nothing}
    `;
  }

  private handleAdd(): void {
    const select = this.renderRoot.querySelector<HTMLSelectElement>("#add-select");
    if (!select) return;
    const v = select.value;
    if (!v) return;
    if (v === "__custom__") {
      this.addingCustom = true;
      this.customDraft = { entity: "", label: "", icon: "" };
    } else {
      const items = [...this.config.grid.items, v as StandardValue];
      this.updateNested("grid", { items });
    }
    select.value = "";
  }

  private renderCustomPanel(localize: Localizer): TemplateResult {
    const sensors = Object.keys(this.hass?.states ?? {})
      .filter((id) => id.startsWith("sensor."))
      .sort();

    const friendly =
      this.customDraft.entity &&
      this.hass?.states[this.customDraft.entity]?.attributes?.friendly_name;

    return html`
      <div class="custom-panel">
        <div class="field">
          <span class="field-label">${localize.editor("custom_entity")}</span>
          <select
            .value=${this.customDraft.entity}
            @change=${(e: Event) =>
              (this.customDraft = {
                ...this.customDraft,
                entity: (e.target as HTMLSelectElement).value,
              })}
          >
            <option value="">—</option>
            ${sensors.map(
              (id) =>
                html`<option value=${id} ?selected=${id === this.customDraft.entity}>
                  ${id}
                </option>`,
            )}
          </select>
          <span class="field-help">${localize.editor("custom_entity_help")}</span>
        </div>

        <div class="field">
          <span class="field-label">${localize.editor("custom_label")}</span>
          <input
            type="text"
            .value=${this.customDraft.label}
            placeholder=${friendly ? localize.format("label_default", { default: friendly }) : ""}
            @input=${(e: Event) =>
              (this.customDraft = {
                ...this.customDraft,
                label: (e.target as HTMLInputElement).value,
              })}
          />
          <span class="field-help">${localize.editor("label_help")}</span>
        </div>

        <div class="field">
          <span class="field-label">${localize.editor("custom_icon")}</span>
          <input
            type="text"
            .value=${this.customDraft.icon}
            placeholder="humidity, wind_speed, …"
            @input=${(e: Event) =>
              (this.customDraft = {
                ...this.customDraft,
                icon: (e.target as HTMLInputElement).value,
              })}
          />
          <span class="field-help">${localize.editor("icon_default")}</span>
        </div>

        <div class="actions-row">
          <button class="btn-secondary" @click=${() => (this.addingCustom = false)}>
            ${localize.editor("cancel")}
          </button>
          <button
            class="btn"
            ?disabled=${!this.customDraft.entity}
            @click=${() => this.commitCustom()}
          >
            ${localize.editor("add")}
          </button>
        </div>
      </div>
    `;
  }

  private commitCustom(): void {
    const draft = this.customDraft;
    if (!draft.entity) return;
    const item: GridItem = { entity: draft.entity };
    if (draft.label) (item as any).label = draft.label;
    if (draft.icon) (item as any).icon = draft.icon;
    const items = [...this.config.grid.items, item];
    this.updateNested("grid", { items });
    this.addingCustom = false;
    this.customDraft = { entity: "", label: "", icon: "" };
  }

  private renderForecast(localize: Localizer): TemplateResult {
    const f = this.config.forecast;
    return html`
      <div class="row-toggle">
        <span>${localize.editor("forecast_enabled")}</span>
        <span
          class="switch ${f.enabled ? "on" : ""}"
          @click=${() => this.updateNested("forecast", { enabled: !f.enabled })}
        ></span>
      </div>

      <div class="field">
        <span class="field-label">${localize.editor("forecast_type")}</span>
        <select
          .value=${f.type}
          @change=${(e: Event) =>
            this.updateNested("forecast", {
              type: (e.target as HTMLSelectElement).value as ForecastType,
            })}
        >
          <option value="daily" ?selected=${f.type === "daily"}>
            ${localize.editor("forecast_type_daily")}
          </option>
          <option value="hourly" ?selected=${f.type === "hourly"}>
            ${localize.editor("forecast_type_hourly")}
          </option>
          <option value="twice_daily" ?selected=${f.type === "twice_daily"}>
            ${localize.editor("forecast_type_twice_daily")}
          </option>
        </select>
      </div>

      <div class="field">
        <span class="field-label">${localize.editor("forecast_count")}</span>
        <input
          type="text"
          .value=${String(f.count)}
          @change=${(e: Event) => {
            const n = parseInt((e.target as HTMLInputElement).value, 10);
            if (!Number.isNaN(n) && n > 0) this.updateNested("forecast", { count: n });
          }}
        />
      </div>

      <div class="field">
        <span class="field-label">${localize.editor("forecast_rows")}</span>
      </div>

      ${f.rows.map(
        (row, idx) => html`
          <div class="row-toggle">
            <span>${localize.label(row)}</span>
            <button
              class="icon-btn"
              ?disabled=${idx === 0}
              @click=${() => this.moveForecastRow(idx, -1)}
              title="Move up"
            >
              ▲
            </button>
            <button
              class="icon-btn"
              ?disabled=${idx === f.rows.length - 1}
              @click=${() => this.moveForecastRow(idx, 1)}
              title="Move down"
            >
              ▼
            </button>
            <span
              class="switch on"
              @click=${() => {
                const rows = f.rows.filter((r) => r !== row);
                this.updateNested("forecast", { rows });
              }}
            ></span>
          </div>
        `,
      )}
      ${FORECAST_ROW_VALUES.filter((row) => !f.rows.includes(row)).map(
        (row) => html`
          <div class="row-toggle">
            <span>${localize.label(row)}</span>
            <span
              class="switch off"
              @click=${() => {
                const rows = [...f.rows, row];
                this.updateNested("forecast", { rows });
              }}
            ></span>
          </div>
        `,
      )}
    `;
  }

  private moveForecastRow(idx: number, delta: number): void {
    const rows = [...this.config.forecast.rows];
    const target = idx + delta;
    if (target < 0 || target >= rows.length) return;
    [rows[idx], rows[target]] = [rows[target], rows[idx]];
    this.updateNested("forecast", { rows });
  }

  private renderAppearance(localize: Localizer): TemplateResult {
    return html`
      <div class="field">
        <span class="field-label">${localize.editor("icon_style")}</span>
        <select
          .value=${this.config.icon_style}
          @change=${(e: Event) =>
            this.updateRoot({ icon_style: (e.target as HTMLSelectElement).value as IconStyle })}
        >
          <option value="line" ?selected=${this.config.icon_style === "line"}>
            ${localize.editor("icon_style_line")}
          </option>
          <option value="fill" ?selected=${this.config.icon_style === "fill"}>
            ${localize.editor("icon_style_fill")}
          </option>
        </select>
      </div>
      <div class="field">
        <span class="field-label">${localize.editor("language")}</span>
        <select
          .value=${this.config.language ?? "auto"}
          @change=${(e: Event) =>
            this.updateRoot({
              language: (e.target as HTMLSelectElement).value as YawcConfig["language"],
            })}
        >
          <option value="auto" ?selected=${this.config.language === "auto"}>
            ${localize.editor("language_auto")}
          </option>
          <option value="en" ?selected=${this.config.language === "en"}>English</option>
          <option value="nb" ?selected=${this.config.language === "nb"}>Norsk (bokmål)</option>
        </select>
      </div>
    `;
  }
}

customElements.define(CARD_EDITOR_TYPE, YawcEditor);
