<template>
  <div class="gallery">
    <slot></slot>
  </div>
</template>
<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}
</style>
<script>
export default {
  // props: {
  //   rows: {
  //     type: String,
  //     default: 3,
  //   },
  // },
};
</script>
