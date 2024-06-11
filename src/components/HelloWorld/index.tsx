import { useTranslation } from "react-i18next";

export const HelloWorld = () => {
    const { t } = useTranslation("example");

    return <h1 className="text-white">{t("title", { name: "pepe" })}</h1>;
};
