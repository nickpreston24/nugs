
<template>
  <div class="builds">
    <Button @click="show = !show">{{
      !show ? "Add Builds" : "View Builds"
    }}</Button>

    <BuildsGallery v-show="!show" />

    <iframe
      v-if="false"
      class="airtable-embed airtable-dynamic-height"
      src="https://airtable.com/embed/shrtU3kYArQSfPHvs?backgroundColor=blue"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="1014"
      style="background: transparent; border: 1px solid #ccc"
    ></iframe>
  </div>
</template>
<script>
import Button from "../components/atoms/Button.vue";
import BuildsGallery from "../components/builds/BuildsGallery.vue";
export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    BuildsGallery,
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
