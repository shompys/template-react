import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ModalProvider } from "@/appProviders/ModalManagerProvider/ModalManagerProvider";
import WindowSizeProvider from "@/appProviders/WindowSizeProvider";
type AppProvidersProps = {
    children: React.ReactNode;
};
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});
export const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <WindowSizeProvider>
                <ReactQueryDevtools
                    initialIsOpen={import.meta.env.VITE_NODE_ENV === "development"}
                />
                <ModalProvider>{children}</ModalProvider>
            </WindowSizeProvider>
        </QueryClientProvider>
    );
};
