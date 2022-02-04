<template>
  <img class="m-0 p-xl max-w-xl" v-bind:src="src" v-bind:alt="alt" />
</template>
<script>
export default {
  props: {
    src: String,
    alt: String,
  },
};
</script>
<style>
.hover-rotate {
  overflow: hidden;
  min-width: 240px;
  max-width: 320px;
  width: 100%;
}

.hover-rotate img {
  transition: all 0.3s;
  box-sizing: border-box;
  max-width: 100%;
}

.hover-rotate:hover img {
  transform: scale(1.3) rotate(5deg);
}
</style>
