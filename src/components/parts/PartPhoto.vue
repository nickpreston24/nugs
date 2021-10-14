<template>
  <div v-if="part.url" class="lightbox" @click.self="closeLightbox">
    <img :src="part.url" />
    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <p v-if="part?.Name">{{ part.Name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import useParts from "./useParts";
export default {
  setup() {
    let { state } = useParts();
    return {
      state,
    };
  },
  // name: 'part',
  // data() {
  //   return {
  //     parts:[], // todo: fill using the useParts()
  //   };
  // },
  computed: {
    part() {
      let parts = this.state.parts.filter((p) => p?.Attachments);
      // console.log("parts", parts);
      let names = parts.map((b) => b.id);
      // console.log("names", names);
      console.log(this.$route);
      let found = parts.find((part) => {
        // console.log(part)
        return part.id === this.$route.params.id;
      });
      // console.log("found:>>", found);
      return {
        ...found,
        url: found?.Attachments[0].url || "",
      };
    },
  },
  methods: {
    closeLightbox() {
      this.$router.push("/parts");
    },
  },
};
</script>

<style>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}

.lightbox img {
  margin: auto;
  width: 100%;
  grid-column-start: 2;
}

.lightbox-info {
  margin: auto 2rem auto 0;
}

.lightbox-info-inner {
  background-color: #ffffff;
  display: inline-block;
  padding: 2rem;
}
</style>