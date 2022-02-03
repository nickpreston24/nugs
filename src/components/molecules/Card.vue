<template>
  <div
    v-bind:class="animation"
    class="flex flex-col justify-center py-6 sm:py-12 text-white bg-regal-600"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
  >
    <div id="card-header" class="relative py-3 sm:max-w-xl sm:mx-auto h-1/3">
      <slot name="header"></slot>
    </div>
    <div id="card-content" class="h-.30">
      <slot></slot>
    </div>
    <div id="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHovering: false,
    };
  },
  computed: {
    animation() {
      return this.isHovering ? "shadow-xl" : "shadow-lg";
    },
  },
};
</script>
