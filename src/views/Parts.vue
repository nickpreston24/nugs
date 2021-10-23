<template>
  <div class="parts">
    <Button @click="show = !show">{{
      !show ? "Add Parts" : "View Parts"
    }}</Button>

    <PartsGallery v-show="!show" />

    <iframe
      v-show="show"
      class="airtable-embed"
      src="https://airtable.com/embed/shreqIf5JuPgS9pyq?backgroundColor=blue"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style="background: transparent; border: 1px solid #ccc"
    ></iframe>
  </div>
</template>
<script>
import Button from "../components/atoms/Button.vue";
import PartsGallery from "../components/parts/PartsGallery.vue";
export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    PartsGallery,
    Button,
  },
};
</script>
<style scoped>
html,
body {
  min-height: 100vh;
  background-color: #030303;
}
</style>
