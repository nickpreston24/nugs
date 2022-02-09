<template>
  <!-- if debugging, wrap component with a border -->
  <div v-if="debug" class="border-4 border-tahiti-500">
    <slot></slot>
  </div>
  <div v-else-if="!debug">
    <!-- Some other border content if not debugging -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    debug() {
      return this.$store.state.settings.developer.borders.enabled;
    },
  },
};
</script>
