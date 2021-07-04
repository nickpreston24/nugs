<template>
  <div
    v-bind:class="animation"
    class="card gentle-flex"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
  >
    <div id="card-header">
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
  watch: {},
  data() {
    return {
      isHovering: false,
    };
  },
  computed: {
    animation() {
      return this.isHovering ? "shadow-lg" : "shadow-md";
    },
  },
};
</script>