    /* https://tailwindcss.com/docs/box-shadow */

<template>
  <button class="rounded-md p-2 font-normal text-arctic-100 bg-ocean-green-500">
    <slot></slot>
  </button>
</template>
<script>
// export default {
//   name: "NugsButton",
//   props: {
//     label: String,
//   },
//   data: () => ({
//     clicked: false,
//   }),
// };
</script>
<style scoped>
.clicked {
  background-color: red;
  box-shadow: rgb(240, 186, 8);
  border: #edff49 2px solid;
}
</style>