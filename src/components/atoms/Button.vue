/* https://tailwindcss.com/docs/box-shadow */

<template>
  <button class="p-2 font-normal rounded-md text-arctic-100 bg-ocean-500">
    <slot></slot>
  </button>
</template>
<script></script>
<style scoped>
.clicked {
  background-color: red;
  box-shadow: rgb(240, 186, 8);
  border: #edff49 2px solid;
}
</style>
