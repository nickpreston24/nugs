<template>
  <div>
    <div class="gallery">
      <div class="gallery-panel" v-for="part in parts" :key="part.id">
        <router-link :to="`/part/${part.id}`">
          <img
            v-if="part?.Attachments"
            :src="part?.Attachments?.[0]?.url"
            class="transform transition-all hover:scale-125"
          />
        </router-link>
      </div>
    </div>

    <div id="v-model-select" class="gentle-flex m-10">
      <select v-model="selected" @change="onSelection">
        <option disabled value="">Please select one</option>
        <option :key="limit" v-bind="limit" v-for="limit in limits">
          {{ limit }}
        </option>
      </select>
      <!-- <span>Showing: {{ selected }}</span> -->
    </div>
  </div>
</template>
<script>
import useParts from "../parts/useParts";

export default {
  data() {
    return {
      selected: 10,
      limits: [10, 20, 50, 100],
    };
  },

  setup() {
    let { state } = useParts();
    return {
      state,
    };
  },
  name: "Gallery",
  computed: {
    parts() {
      return this.state.parts
        .filter((p) => p?.Attachments)
        .map((p) => {
          return { ...p, url: p?.Attachments ? [0].url : "" };
        });
    },
  },
  methods: {
    onSelection(e) {
      let { searchParts } = useParts();
      searchParts(parseInt(e.target.value));
    },
  },
};
</script>
<style scoped>
/* html,
body {
  max-height: 100vh;
  background-color: #030303;
} */

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

/* Fades */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>