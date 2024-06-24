import { Screens } from "@/constants/screens";

const screen = {
    xxs: Screens.XXS,
    xs: Screens.XS,
    s: Screens.S,
    sm: Screens.SM,
    md: Screens.MD,
    lg: Screens.LG,
    xl: Screens.XL,
};

type CreateSourceSet = {
    url: string;
    size: keyof typeof screen;
};

export const createSourceSet = (source: CreateSourceSet[]) =>
    source.map(({ url, size }) => `${url} ${screen[size]}w`).join(", ");
