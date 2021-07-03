import * as yup from 'yup'

export const personSchema = yup.object({
    firstName: yup.string(),
    nickName: yup.string().nullable(),
    email: yup
        .string()
        .nullable()
        .notRequired()
        .email(),
    birthDate: yup
        .date()
        .nullable()
        .notRequired()
        .min(new Date(1900, 0, 1))
});

export type Person = yup.InferType<typeof personSchema>;

// Wonder if we can cast arbitrary db types to a schema without static definitions?

// const dbSchema = yup.object({
//     db: yup.object(),
// })
// export type DbType = yup.InferType<typeof dbSchema>


