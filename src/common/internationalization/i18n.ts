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

i18n.use(initReactI18next).init({
  resources,
  lng: "en", 
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
