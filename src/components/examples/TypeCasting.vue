<template>
  <ul class="gentle-flex">
    <yup-login />
  </ul>
</template>

<script lang='ts'>
import YupLogin from "../../views/SignIn.vue";
import * as yup from "yup";

export const personSchema = yup.object({
  firstName: yup.string(),
  nickName: yup.string().nullable(),
  email: yup.string().nullable().notRequired().email(),
  birthDate: yup.date().nullable().notRequired().min(new Date(1900, 0, 1)),
});

export type Person = yup.InferType<typeof personSchema>;

export default {
  components: { YupLogin },
  data() {
    return {
      person: {
        firstName: "Nick Preston",
        email: "nick@gmail",
      } as Person,
      book: {
        title: "Vue 3 Guide",
        author: "Vue Team",
        year: 2020,
      }// as Book,
    };
  },
  // computed: {
  //   async isPersonValid() {
  //     if (!this) return null;
  //     return await personSchema.validate(this.person);
  //   },
  // },
};
</script>