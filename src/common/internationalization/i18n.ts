import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ptBr from "./ptBr.json";

export const resources = {
  en: {
    translation: en,
  },
  "pt-BR": {
    translation: ptBr, 
  },
} as const;

export const LANGUAGE_STORAGE_KEY = "portfolio-language";

export type AppLanguage = "en" | "pt-BR";

export function resolvePreferredLanguage(): AppLanguage {
  if (typeof window === "undefined") return "en";

  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "en" || stored === "pt-BR") return stored;
  } catch {
    // Private browsing can block storage; fall through to the browser language.
  }

  const preferred =
    window.navigator.languages?.[0] || window.navigator.language || "en";

  return preferred.toLowerCase().startsWith("pt") ? "pt-BR" : "en";
}

export function setAppLanguage(lang: AppLanguage) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // Ignore storage failures and still switch the visible language.
  }

  document.documentElement.lang = lang;
  return i18n.changeLanguage(lang);
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en", 
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
