# Yet Another Weather Card

[![HACS][hacs-badge]][hacs-url]
[![Release][release-badge]][release-url]
[![License][license-badge]](LICENSE)

A configurable weather card for Home Assistant. Three sections — header, grid, forecast. No charts, no chart libraries, no animation budget.

## Why another one

The existing community cards are good but each has trade-offs: some demand a sensor for every value, some bake in a chart that can't be turned off, some don't translate, some lock the layout. This card aims for:

- Works straight out of the `weather.*` entity — no extra sensors required for any standard attribute
- Optional sensor entities for things outside the weather integration (AQI, indoor temp, pollen, anything you want)
- Three sections, each independently toggleable
- Grid items reorderable, with per-item label override
- Forecast in daily / hourly / twice-daily mode
- English and Norwegian Bokmål
- Inherits the active Home Assistant theme

## Installation

### Via HACS (recommended)

1. Open HACS → Frontend.
2. Click the **⋮** menu → **Custom repositories**.
3. Add `https://github.com/aalbretsen/yet-another-weather-card` with category **Dashboard**.
4. Search for **Yet Another Weather Card** and click **Download**.
5. Restart Home Assistant (**Developer Tools → Restart**).
6. Hard-reload the browser (Ctrl-Shift-R / ⌘-Shift-R).

> **Note:** HACS automatically registers the card resource with Home Assistant.
> You do **not** need to add anything manually under Settings → Dashboards → Resources.
> If the card is not found after restart, check that the resource
> `/hacsfiles/yet-another-weather-card/yet-another-weather-card.js` appears in that list — HACS
> should have added it. If it is missing, add it manually as a **JavaScript module**.

### Manual

1. Run `npm install && npm run build`
2. Copy `dist/yet-another-weather-card.js` to your `config/www/` folder
3. Add the resource in **Settings → Dashboards → Resources**:
   - URL: `/local/yet-another-weather-card.js`
   - Type: JavaScript module

## Use

Pick **Yet Another Weather Card** from the card picker, or write the YAML manually:

```yaml
type: custom:yet-another-weather-card
entity: weather.home
```

## Configuration

| Option       | Type                   | Notes                                                                |
| ------------ | ---------------------- | -------------------------------------------------------------------- |
| `entity`     | string                 | A `weather.*` entity.                                                |
| `sun_entity` | string                 | Used for sunrise / sunset, and for remapping daytime icons to night. |
| `language`   | `auto` \| `en` \| `nb` | `auto` follows Home Assistant's locale.                              |
| `icon_style` | `line` \| `fill`       | Outline icons or filled.                                             |
| `header`     | object                 | Top section toggles.                                                 |
| `grid`       | object                 | Mid section toggles and items.                                       |
| `forecast`   | object                 | Bottom section toggles and rows.                                     |

### Header

```yaml
header:
  name: My place # optional override
  show_condition: true # default true
  show_temperature: false # default false — temp + feels-like caption pair
  show_wind: false # default false — wind speed + gust caption pair
  show_clock: true # default true — time + date caption pair
```

The location name is always shown. By default it's the weather entity's friendly
name; set `name` to override it. The condition, temperature, wind and clock
blocks are individually toggleable. Each "block" is a pair: the big primary
value plus a small caption underneath (feels-like / gust / date), shown
automatically when the data is available.

### Night icons

Some weather integrations only emit daytime conditions like `sunny` or
`partlycloudy` — they don't switch to `clear-night` or `partly-cloudy-night`
after dark. If you have the standard **Sun integration** enabled in Home
Assistant, this card uses its `next_rising` / `next_setting` attributes to
detect when each forecast step is at night and renders the moon variant of the
icon. Without the Sun integration, daytime icons pass through unchanged.

### Grid

```yaml
grid:
  enabled: false # off by default
  style: full # full | compact
  show_labels: true
  items:
    - humidity
    - wind_speed
    - pressure
    - uv_index
```

`style: full` shows boxed cells, icon stacked above the value. `style: compact` shows icon + value inline, no box. `show_labels` toggles the descriptive text under (full) or beside (compact) the value.

Items are a flat list. Standard weather attributes are written as plain strings. To override a label, write the item as an object:

```yaml
items:
  - humidity # default label "Humidity" / "Luftfuktighet"
  - attribute: humidity # override
    label: Air dampness
```

To add a custom sensor:

```yaml
items:
  - entity: sensor.aqi_outdoor # uses friendly_name as label
  - entity: sensor.aqi_outdoor # with override
    label: Air quality
    icon: mdi:air-filter # optional, falls back to a generic icon
```

Standard attributes available in the grid: `temperature`, `apparent_temperature`, `humidity`, `pressure`, `wind_speed`, `wind_gust_speed`, `wind_bearing`, `cloud_coverage`, `visibility`, `dew_point`, `uv_index`, `ozone`, `sunrise`, `sunset`.

### Forecast

```yaml
forecast:
  enabled: true
  type: daily # daily | hourly | twice_daily
  count: 5
  rows:
    - precipitation
```

Available rows: `temperature`, `apparent_temperature`, `precipitation`, `precipitation_probability`, `wind_speed` (renders as a directional dial + speed), `wind_gust_speed`, `uv_index`, `humidity`, `pressure`, `cloud_coverage`, `dew_point`. Whether a given row shows up per step depends on what your `weather` integration actually provides.

## Theming

The card uses Home Assistant's CSS variables — `--ha-card-background`, `--primary-text-color`, `--secondary-text-color`, `--primary-color`, `--divider-color` — so it adopts the active theme automatically. No theme-specific config is needed.

For finer control via card-mod or themes, the card exposes:

- `--yawc-cell-min-full` — minimum width of cells in `style: full` (default `94px`)
- `--yawc-cell-min-full-tight` — same with labels off (default `72px`)
- `--yawc-cell-min-compact` — minimum width in `style: compact` (default `110px`)
- `--yawc-cell-min-compact-tight` — same with labels off (default `80px`)
- `--yawc-accent` — icon colour, defaults to the theme's primary

## Development

```bash
# Install dependencies
npm install

# Development build with source maps + watch
npm run watch

# Production build (minified, no source maps)
npm run build:prod

# Type-check only
npm run typecheck

# Lint
npm run lint

# Format
npm run format
```

After `npm run build:prod`, commit `dist/yet-another-weather-card.js` to the repository so HACS can install it without requiring a build step.

## License

MIT.

[hacs-badge]: https://img.shields.io/badge/HACS-Custom-orange.svg
[hacs-url]: https://hacs.xyz
[release-badge]: https://img.shields.io/github/v/release/aalbretsen/yet-another-weather-card
[release-url]: https://github.com/aalbretsen/yet-another-weather-card/releases
[license-badge]: https://img.shields.io/github/license/aalbretsen/yet-another-weather-card
