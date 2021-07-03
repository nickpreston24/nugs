<template>
  <div>
    <yup-login />
    <!-- <h1>Casting TS types from Yup schemas</h1>
    <label for="">person: </label>
    <span>{{ person }}</span>
    <i>{{ isPersonValid }}</i> -->
  </div>
</template>

<script lang='ts'>
import { Book } from "./types";
import { Person, personSchema } from "../../helpers/yup";
import YupLogin from "./YupLogin.vue";
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
      } as Book,
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