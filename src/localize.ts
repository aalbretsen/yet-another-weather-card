import en from "./translations/en.json";
import nb from "./translations/nb.json";

type Translations = typeof en;

const TRANSLATIONS: Record<string, Translations> = { en, nb };

export class Localizer {
  private readonly bundle: Translations;

  constructor(language: string) {
    this.bundle = TRANSLATIONS[language] ?? TRANSLATIONS.en;
  }

  static resolveLanguage(configured: string | undefined, hassLanguage: string | undefined): string {
    if (configured && configured !== "auto") return configured;
    const lang = (hassLanguage ?? "en").toLowerCase();
    if (lang.startsWith("nb") || lang.startsWith("no") || lang.startsWith("nn")) return "nb";
    return "en";
  }

  label(key: string): string {
    return (this.bundle.labels as Record<string, string>)[key] ?? key;
  }

  caption(key: keyof Translations["captions"]): string {
    return this.bundle.captions[key] ?? key;
  }

  editor(key: keyof Translations["editor"]): string {
    return this.bundle.editor[key] ?? key;
  }

  format(key: keyof Translations["editor"], replacements: Record<string, string>): string {
    let text = this.editor(key);
    for (const [k, v] of Object.entries(replacements)) {
      text = text.replace(`{${k}}`, v);
    }
    return text;
  }
}
