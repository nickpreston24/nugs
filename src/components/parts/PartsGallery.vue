<template>
  <div>
    <div id="v-model-select" class="gentle-flex m-10">
      <select v-model="selected" @change="onSelection">
        <option disabled value="">Please select one</option>
        <option :key="limit" v-bind="limit" v-for="limit in limits">
          {{ limit }}
        </option>
      </select>
    </div>

    <div class="gallery">
      <!-- <spinner
        :animation-duration="2000"
        :size="60"
        class="color-arctic-500"
        color="grey"
      /> -->
      <div class="gallery-panel" v-for="part in parts" :key="part.id">
        <h1>{{part.Name}}</h1>

        <router-link v-if="part?.Attachments" :to="`/part/${part.id}`">
          <img
            v-if="part.Attachments"
            :src="part.Attachments?.[0]?.url"
            class="transform transition-all hover:scale-125"
          />
        </router-link>

        <div v-else class="img-upload text-arctic-600 gentle-flex">
          <span>No Image Found...Please Upload one!</span>
          <!-- <button v-data="{{show: false}}" @click="show = true">Expand</button> -->
          <input type="text" v-show="show" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { initialOptions } from "../../../data/airtable-curl";
import Spinner from "../atoms/Spinner.vue";
import useTable from "../useTable";

export default {
  components: { Spinner },
  data() {
    return {
      selected: 10,
      limits: [10, 20, 50, 100],
      loading: false,
    };
  },

  setup() {
    let { state, searchPagified } = useTable();

    return {
      state,
      searchPagified,
    };
  },

  name: "PartsGallery",

  computed: {
    parts() {
      // console.log("computed:  >> ", this.state.records);
      return this.state.records;
    },
  },

  watch: {
    selected() {
      if (this.selected > 0) {
        let options = {
          ...initialOptions,
          maxRecords: parseInt(this.selected),
        };
        this.loading = true;
        this.searchPagified(options);
        this.loading = false;
      }
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
.img-upload {
  font-family: fantasy;
}
</style>