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

    <div>
      <slider v-model="value"></slider>
      <p>{{ value }}</p>
      <div class="gallery-panel" v-for="build in builds" :key="build.id">
        <!-- <card class="" @mouseenter="getPart(build.Parts)">
          <h1>{{ build.Name }}</h1>
          <p>&#x1F4B2; {{ build["Total Cost"] }}</p>
          <h3 v-if="build.Weight > 0">
            &#x1F3CB;&#xFE0F;&#x200D;&#x2642;&#xFE0F; {{ build.Weight }}
          </h3>
        </card> -->

        <!-- <list v-for="part in relatedParts(build?.Parts)" :key="part.id">
            <card class="">
              <p>{{ part.Name }}</p>
            </card>
          </list> -->

        <!-- <p>{{ build.Parts }}</p> -->
        <!-- <ul v-for="part in relatedParts(build.id)" :key="part.id">
            <p>{{ part.id }}</p>
          </ul> -->

        <!-- <card
          class="gallery-item bg-green-200"
          @mouseenter="getPart(build.Id)"
        >
          <template v-slot:header>
            <h1>
              {{ build.id }}
            </h1>
          </template>
        </card> -->

        <!-- <div>
          
          <h6>${{ build["Total Cost"] }}</h6>
          

          <div v-else class="img-upload text-arctic-600 gentle-flex">
            <span>No Image Found...Please Upload one!</span>
            <input type="text" v-if="show" />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Spinner from "../atoms/Spinner.vue";
import useTable from "../useTable";
import Card from "../molecules/Card.vue";
import { Log, devmode } from "../../helpers";

export default {
  components: {
    Card,
    Spinner,
  },
  data() {
    return {
      selected: 10,
      limits: [10, 20, 50, 100],
      loading: false,
      value: 20,
      parts: [],
      builds: [],
    };
  },

  setup() {
    let { state, searchTable, getById } = useTable("Builds");

    return {
      state,
      searchTable,
      getById,
    };
  },

  name: "BuildsGallery",
  methods: {
    getPart(ids) {
      let promises = ids.map((id) => this.getById(id, "Parts"));
      Promise.all(promises).then((result) => {
        let set = result.reduce((acc, val) => acc.concat(val), []);
        let existing = this.parts.map((b) => b.id);
        set
          .map((s) => s.id)
          .forEach((value) => {
            if (!existing.includes(value)) this.parts.push(...set);
          });
      });
    },
  },
  computed: {
    builds() {
      devmode && console.log("computed (builds):  >> ", this.state.records);
      return this.state.records;
    },
    relatedParts() {
      return (ids) => {
        Log("ids :>> ", ids);

        let parts = this.parts.filter((p) => ids.includes(p.id));
        return parts;
      };
    },
    relatedPics() {
      return (ids) => {
        Log("ids :>> ", ids);

        let pics = this.parts.map((m) => m.Pics).filter((p) => ids.includes(p.id));
        Log("pics :>> ", pics);

        return pics;
      };
    },
    relatedbuilds() {
      return (ids) => {
        let builds = this.builds.filter((p) => ids.includes(p.id));
        return builds;
      };
    },
  },

  watch: {
    selected() {
      devmode && console.log("this.selected", this.selected);
      if (this.selected > 0) {
        let options = {
          maxRecords: parseInt(this.selected),
        };
        this.loading = true;
        this.searchTable(options, "Builds");
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
/* .img-upload {
  font-family: fantasy;
} */
</style>
