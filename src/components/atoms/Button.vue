/* https://tailwindcss.com/docs/box-shadow */

<template>
  <button
    class="m-0 inline-flex items-center px-6 py-3 font-semibold rounded-md shadow-sm border-white border-4"
    :class="class"
  >
    <div class="m-2">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    theme: {
      type: String,
      default: "btn-primary",
    },
  },
  computed: {
    class() {
      return this.theme;
    },
  },
};
</script>
