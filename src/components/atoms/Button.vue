/* https://tailwindcss.com/docs/box-shadow */

<template>
  <button class="m-4 font-normal rounded-md text-pink-100 bg-orange-500">
    <div class="m-2">
      <slot></slot>
    </div>
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
