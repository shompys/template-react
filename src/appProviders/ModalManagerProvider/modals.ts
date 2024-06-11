import { lazy } from "react";

export const dynamicModals = {
    SignInRedirect: lazy(() => import("@/modals/ExampleModal")),
};

export const modalIds = Object.keys(dynamicModals).reduce(
    (acc, key) => ({ ...acc, [key]: key }),
    {},
) as { [P in keyof typeof dynamicModals]: P };
