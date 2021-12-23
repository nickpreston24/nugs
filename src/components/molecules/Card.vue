<template>
  <div
    v-bind:class="animation"
    class="py-6 flex flex-col justify-center sm:py-12 bg-gray-100 mih-h-screen"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
  >
    <div id="card-header" class="relative py-3 sm:max-w-xl sm:mx-auto">
      <slot name="header"></slot>
    </div>
    <div id="card-content">
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