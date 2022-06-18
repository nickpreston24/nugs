// From: https://www.youtube.com/watch?v=X6tTBxEmZCE
<template>
  <span class="photo-text bg-[url('https://picsum.photos/300')]">
    <slot></slot>
  </span>
</template>
<script>
export default {
  props: {
    url: {
      required: true,
    },
  },
  computed: {
    photo() {
      return "https://picsum.photos/200";
    },
  },
};
</script>
<style scoped>
.photo-text {
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
