const slice = Array.prototype.slice
//https://javascript.info/currying-partials
// export function curry(func) {

//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args);
//         } else {
//             return function (...args2) {
//                 return curried.apply(this, args.concat(args2));
//             }
//         }
//     };

// }

// export function curry(fn, fnLength) {
//     fnLength = fnLength || fn.length;

//     return function makeCurry() {
//         var args = slice.call(arguments);
//         if (args.length === fnLength) return fn.apply(this, args);
//         return function () {
//             var newArgs = slice.call(arguments);
//             return makeCurry.apply(this, args.concat(newArgs));
//         }
//     }
// }


// curry = f => a => b => f(a, b)
export const curry = (fn, arity = fn.length, ...args) =>
    arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
// const uncurry = f => (a, b) => f(a)(b)
// const papply = (f, a) => b => f(a, b)

// const sum = (a, b) => a + b;
// const log = (date = new Date(), mode = "DEBUG", msg = "some debug") => {
//     console.log(`(${date}) ${mode}: ${msg}`)
// }
// const curriedAdd = curry(sum)
// const _log = (curry(log)());
// console.log('_log', _log)
// const logNow = _log(new Date())

// console.log('logNow', logNow)

// console.log('curried', curriedAdd(1)(5)) // 6
// logNow("INFO", "message"); // [HH:mm] INFO message
