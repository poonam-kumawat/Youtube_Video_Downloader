import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translation.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations.en },
    es: { translation: enTranslations.es },
    hi: { translation: enTranslations.hi },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});
export default i18n;
