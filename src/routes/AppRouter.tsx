import { Route, Routes } from "react-router-dom";

import { AppProviders } from "@/appProviders";
import { Home } from "@/pages/home";

export const AppRouter = () => {
    return (
        <AppProviders>
            <Routes>
                <Route element={<Home />} path="/" />
            </Routes>
        </AppProviders>
    );
};
