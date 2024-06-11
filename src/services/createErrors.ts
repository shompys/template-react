export const enum HttpResponses {
    BadRequest = "Bad Request",
    Unauthorized = "Unauthorized",
    Forbidden = "Forbidden",
    NotFound = "Not Found",
    UnprocessableEntity = "Unprocessable Entity",
    Unknown = "Unknown",
}

export class BadRequest extends Error {
    constructor() {
        super(HttpResponses.BadRequest);
        this.name = HttpResponses.BadRequest;
    }
}
export class Unauthorized extends Error {
    constructor() {
        super(HttpResponses.Unauthorized);
        this.name = HttpResponses.Unauthorized;
    }
}
export class Forbidden extends Error {
    constructor() {
        super(HttpResponses.Forbidden);
        this.name = HttpResponses.Forbidden;
    }
}
export class NotFound extends Error {
    constructor() {
        super(HttpResponses.NotFound);
        this.name = HttpResponses.NotFound;
    }
}
export class UnprocessableEntity extends Error {
    constructor() {
        super(HttpResponses.UnprocessableEntity);
        this.name = HttpResponses.UnprocessableEntity;
    }
}
export class Unknown extends Error {
    constructor() {
        super(HttpResponses.Unknown);
        this.name = HttpResponses.Unknown;
    }
}
