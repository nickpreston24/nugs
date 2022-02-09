export * from "./array.ts";
// export * from './cors.ts'
export * from "./yup.ts";
export * from "./generators.ts";

// Usage: const name = nameOf({someVar}) //'someVar'
export const nameOf = (obj) => Object.keys(obj)[0];
