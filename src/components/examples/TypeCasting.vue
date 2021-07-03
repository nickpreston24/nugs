<template>
  <h1>Casting TS types from Yup schemas</h1>
</template>

<script lang='ts'>
import { Book } from "./types";

export default {
  data() {
    return {
      book: {
        title: "Vue 3 Guide",
        author: "Vue Team",
        year: 2020,
      } as Book,      
    };
  },
};
</script>