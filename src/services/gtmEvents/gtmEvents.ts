import type { GTMCustomEvent, GTMEvent } from "./@types";

declare global {
    interface Window {
        dataLayer: unknown[];
    }
}

export const pushGTMEvent = async ({
    event_name,
    event_category,
    event_action,
    event_label,
    event_type,
}: GTMEvent): Promise<void> => {
    const { dataLayer } = window;

    if (dataLayer) {
        const data = {
            event: event_name,
            event_category,
            event_action,
            ...(event_label && { event_label }),
            ...(event_type && { event_type }),
        };

        dataLayer?.push(data);
    }
};

export const pushGTMCustomEvent = async ({ event_name, params }: GTMCustomEvent): Promise<void> => {
    const { dataLayer } = window;

    if (dataLayer) {
        dataLayer?.push({ ecommerce: null });
        dataLayer?.push({
            event: event_name,
            params: params ? params : {},
            _clear: true,
        });
    }
};
