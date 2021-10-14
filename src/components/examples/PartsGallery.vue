<template>
  <div class="gallery">
    <div class="gallery-panel" v-for="part in parts" :key="part.id">
      <router-link :to="`/part/${part.id}`">
        <img v-if="part?.Attachments" :src="part?.Attachments?.[0]?.url" />
      </router-link>
    </div>
    <!-- <p>{{ state.parts }}</p> -->
  </div>

  <!-- <ul
      @change="onChange(part)"
      v-for="part in state.parts"
      :key="part.id"
      class="gentle-flex"
      @click="onChange(part)"
    >
      <li class="border 1px">{{ part.Name }}</li>
      <img :src="part?.Attachments?.[0]?.url" class="border 2px"/>
    </ul> -->
  <!-- <p>{{ state.parts.length }}</p> -->
</template>
<script>
import useParts from "../parts/useParts";
import { toRefs, unref } from "vue";

export default {
  //   props: {
  //     parts: [],
  //   },
  setup() {
    // const { parts } = toRefs(props);
    let { state } = useParts();
    // console.log(parts.value);
    // console.log("parts:>>", unref(parts));
    // console.log("props", props);
    return {
      state,
    };
  },
  name: "Gallery",
  data() {
    return {
      //   parts: this.state.parts,
    };
  },
  computed: {
    parts() {
      return this.state.parts
        .filter((p) => p?.Attachments)
        .map((p) => {
          return { ...p, url: p?.Attachments ? [0].url : "" };
        });
    },
  },
};
</script>
<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
</style>