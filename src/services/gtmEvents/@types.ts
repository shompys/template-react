export type GTMEvent = {
    event_name: string;
    event_category: string;
    event_action: string;
    event_label?: string;
    event_type?: string;
};

export type GTMCustomEvent = {
    event_name: string;
    params: {
        flow: string;
        element?: string;
        index?: number;
        list_name?: string;
        [key: string]: unknown;
    };
};
