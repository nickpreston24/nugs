<template>
  <ul id="array-rendering">
    <!-- <li v-bind-key="value" v-for="value in myObject">
      {{ value }}
    </li> -->
    <!-- <li>Pink</li>
     -->
    <li v-for="(value, name) in myObject">{{ name }}: {{ value }}</li>
  </ul>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  created () {
  },
  components: { ListItem },
  data() {
    return {
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
  computed: {},
};
</script>

<style>
</style>