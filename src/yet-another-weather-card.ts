import { CARD_TYPE, CARD_VERSION } from "./const.js";
import { YetAnotherWeatherCard } from "./card.js";

declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
      documentationURL?: string;
    }>;
  }
}

if (!customElements.get(CARD_TYPE)) {
  customElements.define(CARD_TYPE, YetAnotherWeatherCard);
}

window.customCards = window.customCards ?? [];
window.customCards.push({
  type: CARD_TYPE,
  name: "Yet Another Weather Card",
  description: "Three-section weather card with configurable header, grid and forecast.",
  preview: true,
  documentationURL: "https://github.com/your-username/yet-another-weather-card",
});

export { YetAnotherWeatherCard };
export const VERSION = CARD_VERSION;
