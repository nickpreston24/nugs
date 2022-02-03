/* https://tailwindcss.com/docs/box-shadow */

<template>
  <button
    class="m-0 text-white bg-orange-500 inline-flex items-center px-6 py-3 font-semibold bg-blue-700 rounded-md shadow-sm border-white border-4"
  >
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
