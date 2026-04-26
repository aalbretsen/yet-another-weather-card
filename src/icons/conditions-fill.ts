import { svg, type SVGTemplateResult } from "lit";

const sunny = svg`
  <circle cx="16" cy="16" r="7" fill="#fbc02d"/>
  <g stroke="#fbc02d" stroke-width="2.4" stroke-linecap="round">
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="16" y1="26" x2="16" y2="30"/>
    <line x1="2" y1="16" x2="6" y2="16"/>
    <line x1="26" y1="16" x2="30" y2="16"/>
    <line x1="6" y1="6" x2="9" y2="9"/>
    <line x1="23" y1="23" x2="26" y2="26"/>
    <line x1="6" y1="26" x2="9" y2="23"/>
    <line x1="23" y1="9" x2="26" y2="6"/>
  </g>`;

const partlycloudy = svg`
  <circle cx="11" cy="11" r="5" fill="#fbc02d"/>
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.4" stroke-linejoin="round"
        d="M22 25 a5 5 0 1 0 -.7 -10 a6 6 0 0 0 -11.3 1.3 a4 4 0 0 0 .5 8.7 Z"/>`;

const cloudy = svg`
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.4" stroke-linejoin="round"
        d="M22 22 a5 5 0 1 0 -.7 -10 a6 6 0 0 0 -12 1.3 a4 4 0 0 0 .5 8.7 Z"/>`;

const rainy = svg`
  <path fill="#90a4ae" stroke-linejoin="round"
        d="M22 18 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <g fill="#5fa8e0">
    <ellipse cx="11" cy="25" rx="1.4" ry="2.4"/>
    <ellipse cx="16" cy="26" rx="1.4" ry="2.4"/>
    <ellipse cx="21" cy="25" rx="1.4" ry="2.4"/>
  </g>`;

const pouring = svg`
  <path fill="#7a8597" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <g fill="#3f7fb0">
    <ellipse cx="9" cy="23" rx="1.3" ry="2.2"/>
    <ellipse cx="13" cy="24" rx="1.3" ry="2.2"/>
    <ellipse cx="17" cy="23" rx="1.3" ry="2.2"/>
    <ellipse cx="21" cy="24" rx="1.3" ry="2.2"/>
    <ellipse cx="11" cy="28" rx="1.3" ry="2.2"/>
    <ellipse cx="19" cy="28" rx="1.3" ry="2.2"/>
  </g>`;

const lightning = svg`
  <path fill="#7a8597" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <path fill="#fbc02d" d="M14 18 l-3 6 h3 l-2 5 l5 -7 h-3 l2 -4 Z"/>`;

const lightningRainy = svg`
  ${lightning}
  <ellipse cx="9" cy="25" rx="1.2" ry="2" fill="#5fa8e0"/>
  <ellipse cx="20" cy="25" rx="1.2" ry="2" fill="#5fa8e0"/>`;

const snowy = svg`
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <g fill="#dfe7f2">
    <circle cx="9" cy="24" r="1.5"/>
    <circle cx="16" cy="25" r="1.5"/>
    <circle cx="23" cy="24" r="1.5"/>
    <circle cx="12" cy="28" r="1.3"/>
    <circle cx="20" cy="28" r="1.3"/>
  </g>`;

const snowyRainy = svg`
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <ellipse cx="11" cy="25" rx="1.3" ry="2" fill="#5fa8e0"/>
  <circle cx="17" cy="25" r="1.4" fill="#dfe7f2"/>
  <circle cx="22" cy="26" r="1.4" fill="#dfe7f2"/>`;

const fog = svg`
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <g stroke="#9aa6b8" stroke-width="1.6" stroke-linecap="round">
    <line x1="6" y1="22" x2="22" y2="22"/>
    <line x1="9" y1="26" x2="25" y2="26"/>
  </g>`;

const windy = svg`
  <g stroke="#9aa6b8" stroke-width="2" fill="none" stroke-linecap="round">
    <path d="M4 11 h12 a3 3 0 1 0 -3 -3"/>
    <path d="M4 17 h16 a3 3 0 1 1 -3 3"/>
    <path d="M4 23 h8"/>
  </g>`;

const hail = svg`
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <g fill="#dfe7f2">
    <circle cx="10" cy="24" r="2"/>
    <circle cx="16" cy="25" r="2"/>
    <circle cx="22" cy="24" r="2"/>
  </g>`;

const clearNight = svg`
  <path fill="#dfe7f2" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M22 21 a9 9 0 1 1 -9 -17 a 7 7 0 0 0 9 17 Z"/>`;

const partlycloudyNight = svg`
  <path fill="#dfe7f2" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M14 13 a6 6 0 1 1 -6 -10 a 4.5 4.5 0 0 0 6 10 Z"/>
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M22 25 a5 5 0 1 0 -.7 -10 a6 6 0 0 0 -11.3 1.3 a4 4 0 0 0 .5 8.7 Z"/>`;

const exceptional = svg`
  <circle cx="16" cy="16" r="9" fill="#e57373"/>
  <line stroke="#fff" stroke-width="2" stroke-linecap="round" x1="16" y1="11" x2="16" y2="17"/>
  <circle cx="16" cy="20" r="1.4" fill="#fff"/>`;

const wrap = (inner: SVGTemplateResult) => svg`
  <svg viewBox="0 0 32 32">${inner}</svg>`;

export const CONDITION_ICONS_FILL: Record<string, SVGTemplateResult> = {
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
