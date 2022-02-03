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
