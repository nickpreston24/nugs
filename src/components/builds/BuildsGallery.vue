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

    <!-- <p>{{ builds[0] }}</p> -->
    <!-- <p>{{ parts[0] }}</p> -->

    <div class="builds-gallery">
      <!-- <spinner
        :animation-duration="2000"
        :size="60"
        class="color-arctic-500"
        color="grey"
      /> -->
      <!-- <slider v-model="value"></slider> -->

      <div class="gallery-panel" v-for="build in builds" :key="build.id">
        <card class="" @mouseenter="getPart(build.Parts)">
          <h1>{{ build.Name }}</h1>
          <p>&#x1F4B2; {{ build["Total Cost"] }}</p>
          <h3 v-if="build.Weight > 0">
            &#x1F3CB;&#xFE0F;&#x200D;&#x2642;&#xFE0F; {{ build.Weight }}
          </h3>
          <!-- { "id": "reczwF2hwGxLO2wgh", "Name": "Glock 20 Builder Kit", "Link": "https://fandffirearms.com/product/pf45-complete-builders-kit-10mm/", "Cost": 669, "Calibers": [ "10mm", "45 ACP" ], "Builds": [ "recqW0agotxhsG8SB", "recsfaVR11x8gnDSl" ], "Payments": [ "recfj0NG7To0jnOq8" ], "Orders": [ "recbEX83A0bYUyw0U", "recGhkBQbYbZZxzJO" ], "Combo Cost": 0 } -->
          <!-- <list v-for="part in relatedParts(build?.Parts)" :key="part.id">
            <card class="">
              <p>{{ part.Name }}</p>
            </card>
          </list> -->

          <!-- <p>{{ build.Parts }}</p> -->
          <!-- <ul v-for="part in relatedParts(build.id)" :key="part.id">
            <p>{{ part.id }}</p>
          </ul> -->
        </card>

        <!-- <card
          class="gallery-item bg-green-200"
          @mouseenter="getPart(order?.Build)"
        >
          <template v-slot:header>
            <h1>
              {{ build.id }}
            </h1>
          </template>
        </card> -->

        <!-- <build-card
          :Name="build.Name"
          :Calibers="build.Caliber"
          :Weight="build['Weight (Lbs)']"
          :Cost="build['Total Cost']"
        /> -->
        <!-- <div>
          
          <h6>${{ build["Total Cost"] }}</h6>
          

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
import useTable from "../useTable";
import Slider from "@vueform/slider";
import { devmode } from "@/helpers/generators";
import Card from "../molecules/Card.vue";

export default {
  components: {
    Card,
    // BuildCard,
    // Slider
  },
  data() {
    return {
      selected: 10,
      limits: [10, 20, 50, 100],
      loading: false,
      value: 20,
      parts: [],
      orders: [],
    };
  },

  setup() {
    let { state, searchPagified, getById } = useTable("Builds");

    return {
      state,
      searchPagified,
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
        console.log("ids :>> ", ids);

        let parts = this.parts.filter((p) => ids.includes(p.id));
        return parts;
      };
    },
    relatedPics() {
      return (ids) => {
        console.log("ids :>> ", ids);

        let pics = this.parts
          .map((m) => m.Pics)
          .filter((p) => ids.includes(p.id));
        console.log("pics :>> ", pics);

        return pics;
      };
    },
    relatedOrders() {
      return (ids) => {
        let orders = this.orders.filter((p) => ids.includes(p.id));
        return orders;
      };
    },
  },

  watch: {
    selected() {
      if (this.selected > 0) {
        let options = {
          maxRecords: parseInt(this.selected),
        };
        this.loading = true;
        this.searchPagified(options, "Builds");
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