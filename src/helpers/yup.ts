import * as yup from 'yup'

// Wonder if we can cast arbitrary db types to a schema without static definitions?
// export const infer = <T>() => {
// return yup.InferType<typeof T>
//  }

/*
* Found: https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
* Usage: type Person = yup.InferType<typeof personSchema>;
*/

const partSchema = yup.object({
    Name: yup.string(),
    Cost: yup.string().nullable(),
    Notes: yup
        .string()
        .nullable()
        .notRequired()
});

export type Part = yup.InferType<typeof partSchema>;