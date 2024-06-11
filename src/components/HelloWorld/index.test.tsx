import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";

import { HelloWorld } from ".";

const mockData = {
    title: "Hello {{ name }}",
};

vi.mock("react-i18next", () => ({
    useTranslation: () => {
        return {
            t: (str: string, obj: Record<string, string> | undefined = {}) => {
                const replace = (value = "", replace: Record<string, string> | undefined = {}) =>
                    value.replace(/\{\{(.*?)\}\}/g, (_, token) => {
                        const tokenIndex = token.trim();

                        return replace[tokenIndex] || tokenIndex;
                    });

                if (obj) {
                    return replace(mockData[str as keyof typeof mockData], obj);
                }

                return mockData[str as keyof typeof mockData];
            },
        };
    },
}));

describe("<HelloWorld />", () => {
    it("Should render App component", async () => {
        const { container } = render(<HelloWorld />);

        expect(container).toMatchSnapshot();
    });
});
