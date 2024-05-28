import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {resources } from "./resources.js";


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    })
    .then(() => console.log("i18n initialized"))
    .catch(e => console.error("i18n error", e));

export default i18n;