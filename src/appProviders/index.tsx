import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { ModalProvider } from "@/providers/ModalManagerProvider/ModalManagerProvider";
import WindowSizeProvider from "@/providers/WindowSizeProvider";
type AppProvidersProps = {
    children: React.ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <WindowSizeProvider>
                    <ReactQueryDevtools
                        initialIsOpen={import.meta.env.VITE_NODE_ENV === "development"}
                    />
                    <ModalProvider>{children}</ModalProvider>
                </WindowSizeProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};
