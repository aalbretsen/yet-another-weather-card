import { svg, type SVGTemplateResult } from "lit";

const wrap = (inner: SVGTemplateResult) => svg`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

export const UI_ICONS: Record<string, SVGTemplateResult> = {
  temperature: wrap(svg`<path d="M14 14V5a2 2 0 1 0 -4 0v9a4 4 0 1 0 4 0Z"/>`),
  apparent_temperature: wrap(
    svg`<path d="M14 14V5a2 2 0 1 0 -4 0v9a4 4 0 1 0 4 0Z"/><path d="M18 8a4 4 0 0 1 0 8"/>`,
  ),
  humidity: wrap(svg`<path d="M12 3 c -4 5 -7 9 -7 13 a 7 7 0 0 0 14 0 c 0 -4 -3 -8 -7 -13Z"/>`),
  pressure: wrap(svg`<circle cx="12" cy="12" r="9"/><path d="M12 7 v5 l3 2"/>`),
  wind_speed: wrap(svg`<path d="M3 9 h13 a3 3 0 1 0 -3 -3"/><path d="M3 15 h16 a3 3 0 1 1 -3 3"/>`),
  wind_gust_speed: wrap(
    svg`<path d="M3 8 h12 a3 3 0 1 0 -3 -3"/><path d="M3 13 h16 a3 3 0 1 1 -3 3"/><path d="M3 18 h6"/>`,
  ),
  wind_bearing: wrap(
    svg`<circle cx="12" cy="12" r="9"/><path d="M12 5 L14 10 L12 8.5 L10 10 Z" fill="currentColor" stroke="none"/>`,
  ),
  cloud_coverage: wrap(svg`<path d="M17 18 a4 4 0 0 0 0 -8 a6 6 0 0 0 -11 1 a4 4 0 0 0 0 7 Z"/>`),
  visibility: wrap(
    svg`<path d="M2 12 s 4 -7 10 -7 s 10 7 10 7 s -4 7 -10 7 s -10 -7 -10 -7Z"/><circle cx="12" cy="12" r="3"/>`,
  ),
  dew_point: wrap(
    svg`<path d="M12 4 c -4 5 -6 8 -6 11 a6 6 0 0 0 12 0 c 0 -3 -2 -6 -6 -11Z"/><path d="M14 16 a2 2 0 0 1 -2 2"/>`,
  ),
  uv_index: wrap(
    svg`<circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="21"/><line x1="3" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="21" y2="12"/><line x1="5.6" y1="5.6" x2="7" y2="7"/><line x1="17" y1="17" x2="18.4" y2="18.4"/><line x1="5.6" y1="18.4" x2="7" y2="17"/><line x1="17" y1="7" x2="18.4" y2="5.6"/>`,
  ),
  ozone: wrap(
    svg`<circle cx="12" cy="12" r="2"/><circle cx="6" cy="9" r="2"/><circle cx="18" cy="9" r="2"/><circle cx="9" cy="17" r="2"/><circle cx="15" cy="17" r="2"/>`,
  ),
  sunrise: wrap(
    svg`<path d="M3 18 h18"/><path d="M7 18 a5 5 0 0 1 10 0"/><path d="M12 7 v-3"/><path d="M9 6 l3 -3 l3 3"/>`,
  ),
  sunset: wrap(
    svg`<path d="M3 18 h18"/><path d="M7 18 a5 5 0 0 1 10 0"/><path d="M12 4 v3"/><path d="M9 5 l3 3 l3 -3"/>`,
  ),
  precipitation: wrap(
    svg`<path d="M12 3 c -4 5 -7 9 -7 13 a 7 7 0 0 0 14 0 c 0 -4 -3 -8 -7 -13Z"/>`,
  ),
  precipitation_probability: wrap(
    svg`<path d="M3 10 c 3 -3 6 -3 9 0 s 6 3 9 0"/><path d="M3 16 c 3 -3 6 -3 9 0 s 6 3 9 0"/>`,
  ),
  generic: wrap(
    svg`<circle cx="12" cy="12" r="9"/><line x1="12" y1="6" x2="12" y2="12"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>`,
  ),
};

export function getUiIcon(name: string | undefined): SVGTemplateResult {
  if (name && name in UI_ICONS) return UI_ICONS[name];
  return UI_ICONS.generic;
}

export const WIND_DIAL = (bearingDeg: number) => svg`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
    <circle cx="12" cy="12" r="9"/>
    <g transform="rotate(${bearingDeg} 12 12)">
      <path d="M12 4 L14.5 9 L12 7.5 L9.5 9 Z" fill="currentColor" stroke="none"/>
    </g>
  </svg>`;
