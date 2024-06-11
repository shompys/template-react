import cookie from "js-cookie";
// docs https://github.com/js-cookie/js-cookie

export const COOKIE_NAME = "cookie";

export const get = () => {
    const dataJSON = cookie.get(COOKIE_NAME);

    return dataJSON ? JSON.parse(dataJSON) : null;
};

export const remove = () => {
    cookie.remove(COOKIE_NAME);
};

export const set = (data: Record<string, unknown>) => {
    cookie.set(COOKIE_NAME, JSON.stringify(data));
};
