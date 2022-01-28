/* Should give an error when the specified key is not the correct type.
 */
export function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// Array.prototype.flat = (arr: []) => arr.reduce((acc, value) => acc.concat(value), [])

declare global {
  interface Array<T> {
    flatten(arr: Array<T>): Array<T>;
    remove(elem: T): Array<T>;
  }
}

Array.prototype.flatten = function <T>(arr: Array<T>): Array<T> {
  return arr.reduce((acc, value) => acc.concat(value), new Array<T>());
};

if (!Array.prototype.remove) {
  Array.prototype.remove = function <T>(this: T[], elem: T): T[] {
    // console.log('hello from remove', this)
    let next = this.filter((e) => e !== elem);
    next.push(6 as any);
    // console.log(this);
    return next;
  };
}

const testarray = [1, 2, 3, 4, 5];
testarray.remove(3); //.remove(2);
//   console.log('TESTARRAY', testarray)

/**
 * Checks the type of an object casted to said type.
 * Usage:
 * const idOfType = identity as { (x: MyType): MyType };
 */
export const identity = <T>(x: T) => x;

/**Check for any unassigned values */
export const isEmpty = (obj: any) =>
  !obj ||
  obj === {} ||
  Object.values(obj).every(
    (v) => v === null || v === undefined || v === [] || v === {} || v === ""
  );
// export const isFull = (obj: any) => !!obj && obj !== {} || Object.values(obj).every((v) => v !== null || v !== undefined || v !== [] || v !== {} || v !== "")

/*Environment*/
// console.log('devmode?', process.env.NODE_ENV)
export const devmode = () => process.env.NODE_ENV !== "production";

/**Random Int */
export const randomBoolean = () => Math.random() > 0.5;
export const randomFloat = (limit = 1) => {
  let float = parseFloat((Math.random() * limit).toFixed(2));
  return float;
};
export const randomInt = (limit: number) => Math.ceil(Math.random() * limit);
export const randomName = (prefix: string, postFix: string, limit = 100) =>
  `${prefix} ${randomInt(limit)} ${postFix}`;
export const randomParagraph = () => lorems[randomInt(lorems.length + 1)];
const lorems = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veniam voluptatem. Aliquam impedit eaque eveniet eligendi id quia nostrum accusamus, excepturi dolor, alias animi? Assumenda necessitatibus error nesciunt blanditiis nihil.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ad, voluptate culpa esse, unde minima incidunt asperiores nostrum reprehenderit sapiente nulla natus dolore tenetur non cum facere perspiciatis tempore consequuntur!",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto magni quaerat impedit provident odio dolorum non obcaecati eos deserunt eaque aut sequi aliquam officia porro eius minima, iste nulla doloribus!",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sapiente distinctio culpa sed voluptatibus voluptates rem dolore molestias placeat! A exercitationem maxime est sapiente accusamus perferendis qui odio maiores at!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet modi, ex veniam architecto repellendus pariatur magnam expedita fugit necessitatibus accusamus culpa laudantium repudiandae ea, natus quis vitae laborum aliquid?",
];

/**
 * Type to Form Generator
 */
const formScaffolder = (myCustomTypeToMakeIntoAForm: any) => {
  // TODO: https://www.meziantou.net/generate-an-html-form-from-an-object-in-typescript.htm
  return null;
};
