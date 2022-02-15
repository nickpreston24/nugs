import * as yup from "yup";

// Wonder if we can cast arbitrary db types to a schema without static definitions?
// export const infer = <T>() => {
// return yup.InferType<typeof T>
//  }

/*
 * Found: https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
 * Usage: type Person = yup.InferType<typeof personSchema>;
 */


type Kind = "AR15" | "AR10" | "PCC" | "PDW"

type Variant = "PCC" | "PDW" | "Recce" | "DMR" | "CQB"

const partSchema = yup.object({
    Name: yup.string(),
    Cost: yup.string().nullable(),
    Notes: yup.string().nullable().notRequired(),
    Attachments: yup.array().nullable().notRequired(),
    Weight: yup.number().nullable().notRequired(),
    Link: yup.string().nullable().notRequired(),
    Demo: yup.string().nullable().notRequired(),
    Calibers: yup.mixed().when('isArray', {
        is: Array.isArray,
        then: yup.array().of(yup.string()),
        otherwise: yup.string()
    }),
    Type: yup.mixed().when('isArray', {
        is: Array.isArray,
        then: yup.array().of(yup.string()),
        otherwise: yup.string()
    }),
    "Created By": yup.string().nullable().notRequired(),
    "Last Modified By": yup.string().nullable().notRequired(),
    Builds: yup.array()
});

export type Part = yup.InferType<typeof partSchema>;

const testPart = { Type: "" } as Part;

console.log('testPart', testPart)
