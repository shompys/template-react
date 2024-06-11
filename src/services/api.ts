import {
    BadRequest,
    Forbidden,
    NotFound,
    Unauthorized,
    Unknown,
    UnprocessableEntity,
} from "./createErrors";

type Methods = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
type QueryString = Record<string, number | string | boolean | undefined>;

type ApiService = {
    hostname: string;
    pathname?: string;
    method?: Methods;
    query?: QueryString;
    body?: Record<string, unknown>;
    headers?: Record<string, unknown>;
};

const composeQueryParams = (query?: QueryString) => {
    if (!query) {
        return "";
    }

    const parsedQuery = Object.keys(query).reduce((collector, key) => {
        if (query[key] !== null) {
            return {
                ...collector,
                [key]: query[key],
            };
        }

        return collector;
    }, {});

    return "?" + new URLSearchParams(parsedQuery).toString();
};

const parseResponse = async <T>(
    response: Response,
    parseAs: "text" | "json" = "json",
): Promise<T> => {
    try {
        if (!response.ok) {
            if (response.status === 400) {
                throw new BadRequest();
            } else if (response.status === 401) {
                throw new Unauthorized();
            } else if (response.status === 403) {
                throw new Forbidden();
            } else if (response.status === 404) {
                throw new NotFound();
            } else if (response.status === 422) {
                throw new UnprocessableEntity();
            } else {
                throw new Unknown();
            }
        }
        const data = await response[parseAs]();

        if (data.success === false) {
            throw new NotFound();
        }

        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Unknown();
    }
};

export async function apiService<T>({
    hostname,
    pathname,
    query,
    method = "GET",
    body,
    headers,
}: ApiService): Promise<T> {
    const qString = composeQueryParams(query);

    const path = `${hostname}/${pathname}${qString}`;

    const options = {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    };

    const response = await fetch(path, options);

    return parseResponse<T>(response);
}
