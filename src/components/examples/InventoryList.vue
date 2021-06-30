<template>
  <ul id="stack">
    <ul id="object-example">
      <li :key="index" v-for="(value, name, index) in myObject">
        {{ index }}. {{ name }}: {{ value }}
      </li>
    </ul>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
};
</script>

<style></style>
