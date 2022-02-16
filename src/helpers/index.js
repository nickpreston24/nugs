export * from "./array.ts";
// export * from './cors.ts'
export * from "./yup.ts";
export * from "./generators.ts";



/*Environment*/
export const devmode = (() => process.env.NODE_ENV !== "production")();



// Usage: const name = nameOf({someVar}) //'someVar'
export const nameOf = (obj) => Object.keys(obj)[0];

export const Log = (value, name = { value }) =>
    devmode &&
    console.log(`${isString(name) ? name : Object.keys(name) || "?"} :>> `, value);

// export const Alert = (error, message) => devmode && window.alert(`${message}:\n${error}`)



/*
 * Find nested values
 * https://stackoverflow.com/questions/15523514/find-by-key-deep-in-a-nested-array
 */

export function findValue(object, key, predicate) {
    let ret = [];
    if (object.hasOwnProperty(key) && predicate(key, object[key]) === true) {
        ret = [...ret, object];
    }
    if (Object.keys(object).length) {
        for (let i = 0; i < Object.keys(object).length; i++) {
            let value = object[Object.keys(object)[i]];
            if (typeof value === "object" && value != null) {
                let o = findValue(object[Object.keys(object)[i]], key, predicate);
                if (o != null && o instanceof Array) {
                    ret = [...ret, ...o];
                }
            }
        }
    }
    return ret;
}

/**
 * https://webbjocke.com/javascript-check-data-types/
 */
export function isString(value) {
    return typeof value === "string" || value instanceof String;
}

export function isNumber(value) {
    return typeof value === "number" && isFinite(value);
}

export function isArray(value) {
    return value && typeof value === "object" && value.constructor === Array;
}

export function isFunction(value) {
    return typeof value === "function";
}
export function isSymbol(value) {
    return typeof value === "symbol";
}
export function isDate(value) {
    return value instanceof Date;
}

export function isRegExp(value) {
    return value && typeof value === "object" && value.constructor === RegExp;
}
export function isError(value) {
    return value instanceof Error && typeof value.message !== "undefined";
}
export function isBoolean(value) {
    return typeof value === "boolean";
}
export function isNull(value) {
    return value === null;
}

export function isUndefined(value) {
    return typeof value === "undefined";
}