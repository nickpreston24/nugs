export const formScaffolder = (myCustomTypeToMakeIntoAForm: any) => {
    // idk how to go about this, but it would be nice 
    // to scaffold out a form by type while keeping all vuejs based events and props.
    // e.g. a string field would auto to <input/>,
    // a number fields would auto to a slider or by default the classic Counter example.
    return null

}

export const typeScaffolder = (myURLWithContentToMakeIntoADynamicClass: string) => {
    //Think of your DynamicXML library, but for JS.
    return null

}

export const airtableFormScaffodler = (obj: any) => {
    // Take a db object and generate a form based on the Airtable types.
    return null
}

/**
 * Enforces type safety when seeking a prop of a type by its name
 * Usage:
 * 
const test = { Name: "hi" } as MyType
console.log(`prop`, prop(test, "id"))

type MyType = {
    Name: string,
    Age: number
}

// Should give an error
 */
export function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

/**
 * Checks the type of an object casted to said type.
 * Usage:
 * const idOfType = identity as { (x: MyType): MyType };
 */
export const identity = <T>(x: T) => x


/**Check for any unassigned values */
export const hasEmptyValues = (obj: any) => !!obj && Object.values(obj).some((v) => v === null || v === undefined)

/*Environment*/
export const devmode = () => process.env.NODE_ENV === "development";
