import React, { FC, createContext, useContext, useEffect, useState } from "react";

import { Screens } from "@/constants/screens";

type WindowSizeContextProps = {
    isMobileXxs: boolean;
    isMobileSm: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isWideDesktop: boolean;
};

type WindowSizeProviderProps = {
    children: React.ReactNode;
};

const WindowSizeContext = createContext({} as WindowSizeContextProps);

export const useWindowSizeContext = () => useContext(WindowSizeContext);

export const WindowSizeProvider: FC<WindowSizeProviderProps> = ({ children }) => {
    const { isMobileXxs, isMobileSm, isMobile, isTablet, isDesktop, isWideDesktop } =
        useWindowSize();

    return (
        <WindowSizeContext.Provider
            value={{
                isMobileXxs,
                isMobileSm,
                isMobile,
                isTablet,
                isDesktop,
                isWideDesktop,
            }}
        >
            {children}
        </WindowSizeContext.Provider>
    );
};

export default WindowSizeProvider;

const RESIZE = "resize";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();
        window.addEventListener(RESIZE, handleResize);

        return () => window.removeEventListener(RESIZE, handleResize);
    }, []);

    const parsedWidth = windowSize.width;

    const isMobile = parsedWidth < Screens.MD;
    const isTablet = parsedWidth >= Screens.MD && parsedWidth < Screens.LG;
    const isDesktop = parsedWidth >= Screens.LG;
    const isWideDesktop = true; // pending config

    const isMobileXxs = parsedWidth < Screens.XXS;
    const isMobileSm = parsedWidth < Screens.SM;

    return {
        isMobileXxs,
        isMobileSm,
        isMobile,
        isTablet,
        isDesktop,
        isWideDesktop,
    };
}
