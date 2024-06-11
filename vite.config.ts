/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    server: {
        port: 3000,
    },
    preview: {
        port: 8080,
        host: true,
    },
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id: string) {
                    if (id.includes("react-router-dom") || id.includes("react-router")) {
                        return "@react-router";
                    }
                },
            },
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./setupTests.js",
        css: true,
        coverage: {
            provider: "v8",
            reporter: ["text", "json", "html", "json-summary"],
        },
    },
});
