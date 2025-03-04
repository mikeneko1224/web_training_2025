// Error types
export const NOT_FOUND = 'NotFound'
export const SERVER_ERROR = 'ServerError'
export const NETWORK_ERROR = 'NetworkError'
export const MAINTENANCE = 'Maintenance'
export const NOT_AUTHENTICATED = 'NotAuthenticated'

export type ApiErrorType =
    | typeof NOT_FOUND
    | typeof SERVER_ERROR
    | typeof NETWORK_ERROR
    | typeof MAINTENANCE
    | typeof NOT_AUTHENTICATED

// Parent class
export class ApiError extends Error {
    constructor(public type: ApiErrorType) {
        super(type)
        this.name = type
    }
}

// Specific error classes
export class NotFound extends ApiError {
    constructor() {
        super(NOT_FOUND)
    }
}

export class ServerError extends ApiError {
    constructor() {
        super(SERVER_ERROR)
    }
}

export class NetworkError extends ApiError {
    constructor() {
        super(NETWORK_ERROR)
    }
}

export class Maintenance extends ApiError {
    constructor() {
        super(MAINTENANCE)
    }
}

export class NotAuthenticated extends ApiError {
    constructor() {
        super(NOT_AUTHENTICATED)
    }
}
