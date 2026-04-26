import { svg, type SVGTemplateResult } from "lit";

const sunny = svg`
  <circle cx="16" cy="16" r="6" stroke="#f5b342" fill="none"/>
  <g stroke="#f5b342" stroke-linecap="round">
    <line x1="16" y1="3" x2="16" y2="6"/>
    <line x1="16" y1="26" x2="16" y2="29"/>
    <line x1="3" y1="16" x2="6" y2="16"/>
    <line x1="26" y1="16" x2="29" y2="16"/>
    <line x1="6.5" y1="6.5" x2="8.6" y2="8.6"/>
    <line x1="23.4" y1="23.4" x2="25.5" y2="25.5"/>
    <line x1="6.5" y1="25.5" x2="8.6" y2="23.4"/>
    <line x1="23.4" y1="8.6" x2="25.5" y2="6.5"/>
  </g>`;

const partlycloudy = svg`
  <g stroke="#f5b342" fill="none">
    <circle cx="11" cy="12" r="4"/>
    <line x1="11" y1="4" x2="11" y2="6" stroke-linecap="round"/>
    <line x1="4" y1="12" x2="6" y2="12" stroke-linecap="round"/>
    <line x1="6" y1="7" x2="7.4" y2="8.4" stroke-linecap="round"/>
    <line x1="6" y1="17" x2="7.4" y2="15.6" stroke-linecap="round"/>
  </g>
  <path stroke="#c5cbd6" fill="none" stroke-linejoin="round"
        d="M22 25 a5 5 0 1 0 -.7 -10 a6 6 0 0 0 -11.3 1.3 a4 4 0 0 0 .5 8.7 Z"/>`;

const cloudy = svg`
  <path stroke="#c5cbd6" fill="none" stroke-linejoin="round"
        d="M22 22 a5 5 0 1 0 -.7 -10 a6 6 0 0 0 -12 1.3 a4 4 0 0 0 .5 8.7 Z"/>`;

const rainy = svg`
  <path stroke="#5fa8e0" fill="none" stroke-linejoin="round"
        d="M22 18 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <line stroke="#5fa8e0" stroke-linecap="round" x1="11" y1="22" x2="9" y2="26"/>
  <line stroke="#5fa8e0" stroke-linecap="round" x1="16" y1="22" x2="14" y2="26"/>
  <line stroke="#5fa8e0" stroke-linecap="round" x1="21" y1="22" x2="19" y2="26"/>`;

const pouring = svg`
  <path stroke="#3f7fb0" fill="none" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <g stroke="#3f7fb0" stroke-linecap="round" stroke-width="2">
    <line x1="9" y1="20" x2="7" y2="26"/>
    <line x1="13" y1="20" x2="11" y2="26"/>
    <line x1="17" y1="20" x2="15" y2="26"/>
    <line x1="21" y1="20" x2="19" y2="26"/>
  </g>`;

const lightning = svg`
  <path stroke="#7a8597" fill="none" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <path fill="#f5b342" stroke="none" d="M14 18 l-3 6 h3 l-2 5 l5 -7 h-3 l2 -4 Z"/>`;

const lightningRainy = svg`
  ${lightning}
  <line stroke="#5fa8e0" stroke-linecap="round" x1="9" y1="22" x2="7" y2="26"/>
  <line stroke="#5fa8e0" stroke-linecap="round" x1="20" y1="22" x2="18" y2="26"/>`;

const snowy = svg`
  <path stroke="#c5cbd6" fill="none" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <g stroke="#dfe7f2" stroke-linecap="round">
    <line x1="9" y1="22" x2="9" y2="26"/>
    <line x1="7" y1="24" x2="11" y2="24"/>
    <line x1="16" y1="22" x2="16" y2="26"/>
    <line x1="14" y1="24" x2="18" y2="24"/>
    <line x1="22" y1="22" x2="22" y2="26"/>
    <line x1="20" y1="24" x2="24" y2="24"/>
  </g>`;

const snowyRainy = svg`
  <path stroke="#c5cbd6" fill="none" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <line stroke="#5fa8e0" stroke-linecap="round" x1="11" y1="20" x2="9" y2="26"/>
  <g stroke="#dfe7f2" stroke-linecap="round">
    <line x1="17" y1="22" x2="17" y2="26"/>
    <line x1="15" y1="24" x2="19" y2="24"/>
  </g>`;

const fog = svg`
  <path stroke="#c5cbd6" fill="none" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <g stroke="#9aa6b8" stroke-linecap="round">
    <line x1="6" y1="22" x2="22" y2="22"/>
    <line x1="9" y1="26" x2="25" y2="26"/>
  </g>`;

const windy = svg`
  <g stroke="#9aa6b8" fill="none" stroke-linecap="round">
    <path d="M4 11 h12 a3 3 0 1 0 -3 -3"/>
    <path d="M4 17 h16 a3 3 0 1 1 -3 3"/>
    <path d="M4 23 h8"/>
  </g>`;

const hail = svg`
  <path stroke="#c5cbd6" fill="none" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <g fill="#dfe7f2" stroke="none">
    <circle cx="10" cy="24" r="1.5"/>
    <circle cx="16" cy="25" r="1.5"/>
    <circle cx="22" cy="24" r="1.5"/>
  </g>`;

const clearNight = svg`
  <path fill="none" stroke="#c5cbd6" stroke-linejoin="round"
        d="M20 19 a8 8 0 1 1 -8 -15 a 6 6 0 0 0 8 15 Z"/>`;

const partlycloudyNight = svg`
  <path fill="none" stroke="#c5cbd6" stroke-linejoin="round"
        d="M14 13 a6 6 0 1 1 -6 -10 a 4.5 4.5 0 0 0 6 10 Z"/>
  <path stroke="#9aa6b8" fill="none" stroke-linejoin="round"
        d="M22 25 a5 5 0 1 0 -.7 -10 a6 6 0 0 0 -11.3 1.3 a4 4 0 0 0 .5 8.7 Z"/>`;

const exceptional = svg`
  <circle cx="16" cy="16" r="9" stroke="#d99" fill="none"/>
  <line stroke="#d99" stroke-linecap="round" x1="16" y1="11" x2="16" y2="17"/>
  <circle cx="16" cy="20" r="1.2" fill="#d99" stroke="none"/>`;

const wrap = (inner: SVGTemplateResult) => svg`
  <svg viewBox="0 0 32 32" stroke-width="1.8" fill="none">${inner}</svg>`;

export const CONDITION_ICONS_LINE: Record<string, SVGTemplateResult> = {
  sunny: wrap(sunny),
  clear: wrap(sunny),
  "clear-night": wrap(clearNight),
  partlycloudy: wrap(partlycloudy),
  "partly-cloudy": wrap(partlycloudy),
  "partly-cloudy-night": wrap(partlycloudyNight),
  cloudy: wrap(cloudy),
  rainy: wrap(rainy),
  pouring: wrap(pouring),
  lightning: wrap(lightning),
  "lightning-rainy": wrap(lightningRainy),
  snowy: wrap(snowy),
  "snowy-rainy": wrap(snowyRainy),
  fog: wrap(fog),
  hail: wrap(hail),
  windy: wrap(windy),
  "windy-variant": wrap(windy),
  exceptional: wrap(exceptional),
};
