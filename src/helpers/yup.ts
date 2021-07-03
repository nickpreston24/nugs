import * as yup from 'yup'

const personSchema = yup.object({
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

console.log(`personSchema`, personSchema)

const person = {
    firstName: "Matt",
    nickName: "The Hammer",
    email: "matt@the-hammer.com",
    birthDate: new Date(1976, 9, 5)
};

console.log(personSchema.isValidSync(person));

export type Person = yup.InferType<typeof personSchema>;
console.log(`Person`, person as Person)