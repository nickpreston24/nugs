<template>
  <section class="photo-grid">
    <slot></slot>
  </section>
</template>
<style scoped>
/* .feed-grid {
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.photo-grid {
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 240px;
} */

@media screen and (min-width: 600px) {
  .card-tall {
    /*  automatically spans from column 1 and ends at col 2;*/
    /* grid-row: span 1 / 4; */
    grid-row: span 2 / auto;
  }

  .card-wide {
    grid-column: span 2 / auto;
    /* grid-column: span 1 / 4; */
  }
}

/* The following are From: https://youtu.be/Qhaz36TZG5Y?list=TLPQMDkwMjIwMjI3gsnCHkv2gA */
/* .grid {
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
} */
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
