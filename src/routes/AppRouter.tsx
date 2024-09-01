import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import { Home } from "@/pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: "404",
        children: [],
    },
]);

export const AppRouter = () => {
    return (
        <Suspense fallback="...loading">
            <RouterProvider router={router} />
        </Suspense>
    );
};
