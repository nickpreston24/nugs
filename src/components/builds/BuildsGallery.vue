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

    <p>{{ builds[0] }}</p>

    <div class="builds-gallery">
      <!-- <spinner
        :animation-duration="2000"
        :size="60"
        class="color-arctic-500"
        color="grey"
      /> -->
      <p>slider</p>
      <slider v-model="budget"></slider>

      <div class="gallery-panel" v-for="build in builds" :key="build.id">
        <build-card
          :Name="build.Name"
          :Calibers="build.Caliber"
          :Weight="build['Weight (Lbs)']"
          :Cost="build['Total Cost']"
        />
        <!-- <div>
          
          <h6>${{ build["Total Cost"] }}</h6>
          <router-link v-if="build?.Attachments" :to="`/build/${build.id}`">
            <img
              v-if="build.Attachments"
              :src="build.Attachments?.[0]?.url"
              class="transform transition-all hover:scale-125"
            />
          </router-link>

          <div v-else class="img-upload text-arctic-600 gentle-flex">
            <span>No Image Found...Please Upload one!</span>
            <input type="text" v-show="show" />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { initialOptions } from "../../../api/airtable";
// import Spinner from "../atoms/Spinner.vue";
import BuildCard from "../../components/builds/BuildCard.vue";
import useTable from "../useTable";

export default {
  components: { BuildCard },
  data() {
    return {
      selected: 10,
      limits: [10, 20, 50, 100],
      loading: false,
    };
  },

  setup() {
    let { state, searchPagified } = useTable("Builds");

    return {
      state,
      searchPagified,
    };
  },

  name: "BuildsGallery",

  computed: {
    builds() {
      console.log("computed:  >> ", this.state.records);
      let mapped = this.state.records.map((x) => {
        return {
          ...x,
          Caliber: x.Caliber,
        };
      });
      console.log("mapped :>> ", mapped);

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