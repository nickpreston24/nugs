<template>
  <div
    v-html="import(`../assets/icons/${name}.svg`)"
    class="inline-block fill-current"
    style="height: 1em; width: 1em; vertical-align: -0.125em"
  />
</template>

<script>
// option 3 from: https://jessarcher.com/blog/creating-an-icon-component-in-vue/
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  // data() {
  //   return {
  //     svg: import(`../assets/icons/${name}.svg`),
  //   };
  // },
};
</script>
