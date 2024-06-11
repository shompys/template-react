import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
// https://react.i18next.com/latest/i18next-instance
const dictionary = {
    ar: "es-AR",
    br: "pt-BR",
};

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        lng: dictionary[import.meta.env.VITE_LOCALE as keyof typeof dictionary],
    });

export default i18n;
