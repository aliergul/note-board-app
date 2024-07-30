import { initReactI18next } from "react-i18next";
import en from "./en.json";
import tr from "./tr.json";
import i18next from "i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    tr: {
      translation: tr,
    },
  },
  lng: "tr",
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
