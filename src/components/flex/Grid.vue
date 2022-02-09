<template>
  <div class="grid grid-flex">
    <slot></slot>
  </div>
</template>
<style scoped>
/* The following are From: https://youtu.be/Qhaz36TZG5Y?list=TLPQMDkwMjIwMjI3gsnCHkv2gA */
.grid {
  display: grid;
  grid-template-columns: 1fr 500px 1fr;
  grid-template-rows: 100px 200px;
}

.grid-flex {
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
