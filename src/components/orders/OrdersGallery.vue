<template>
  <div>
    <div id="v-model-select" class="m-10 gentle-flex">
      <select v-model="selected" @change="onSelection">
        <option disabled value="">Please select one</option>
        <option :key="limit" v-bind="limit" v-for="limit in limits">
          {{ limit }}
        </option>
      </select>
    </div>

    <div class="gallery gentle-flex">
      <!-- <Spinner
        v-if="false"
        :animation-duration="2000"
        :size="60"
        class="color-arctic-500"
        color="grey"
      /> -->

      <div class="gallery-panel" v-for="order in orders" :key="order.id">
        <!-- <h1>{{ order.Payments[0] }}</h1> -->

        <card
          class="gallery-item bg-arctic-500 max-height-300"
          @mouseenter="getBuild(order?.Build)"
        >
          <template v-slot:header>
            <list>
              <li>
                <h2>&#x0023;&#xFE0F;&#x20E3; {{ order.Build?.length }}</h2>
              </li>
              <!-- <li>
                <h2>&#x1F4C5; {{ order.Created }}</h2>
              </li> -->
              <li>
                <h4>&#x1F4B2; {{ order.SubTotal }}</h4>
              </li>
            </list>
          </template>

          <!-- /**[ "id", "Name", "Reasoning", "Parts Included", "Caliber", "Status", "Orders", "Customers", "Calibers (from 2Parts)", "Cost (from 2Parts)", "Link (from 2Parts)", "Pics", "Total Cost", "Weight (Lbs)" ] */ -->

          <template v-slot:default>
            <list v-for="build in relatedBuilds(order?.Build)" :key="build.id">
              <card class="bg-arctic-300">
                <template v-slot:header>
                  <b>{{ build.Name }}</b>
                </template>
                <template v-slot:default>
                  <ul>
                    <h3>Calibers &#x1F52B;</h3>
                    <ul v-for="caliber in build.Caliber" :key="caliber">
                      <li>{{ caliber }}</li>
                    </ul>
                    <!-- <list class="flex-col" v-for="picture in build.Pics" :key="picture.url">
                      <img :src="picture.thumbnails.small.url" />
                    </list> -->
                  </ul>
                </template>
                <template v-slot:footer>
                  <Button> &#x1F639; SMASH </Button>
                </template>
              </card>
            </list>

            <!-- <Button v-on:click="show = !show">Toggle transition</Button>
          <flowing-border-transition>
            <div v-if="show" class="box"></div>
          </flowing-border-transition> -->

            <!-- <router-link v-if="order?.Attachments" :to="`/order/${order.id}`">
              <img
                v-if="order.Attachments"
                :src="order.Attachments?.[0]?.url"
                class="transition-all transform hover:scale-125"
              />
            </router-link> -->

            <!-- <div v-else class="img-upload text-arctic-600 gentle-flex">
            <input type="text" v-if="show" />
          </div> -->
          </template>
        </card>
      </div>
    </div>
  </div>

  <!-- <Button v-on:click="show = !show">Toggle transition</Button>
      <fade-transition>
        <div v-if="show" class="w-100 box">HI</div>
      </fade-transition> -->
  <!-- <Accordion :list="state.records">
      <template v-slot:header>
        <h1>&#x1F503;</h1>
      </template>
    </Accordion> -->
</template>
<script>
import useTable from "../../hooks/useTable";
import { devmode } from "../../../src/helpers";
import List from "../molecules/List.vue";
import Card from "../molecules/Card.vue";
// import FadeTransition from "../transitions/FadeTransition.vue";

export default {
  components: {
    // Spinner,
    List,
    Card,
    // Button,
    // FlowingBorderTransition,
    // Accordion
    // FadeTransition,
  },
  data() {
    return {
      selected: 10,
      limits: [10, 20, 50, 100],
      loading: false,
      devmode: devmode,
      show: true,
      builds: [],
    };
  },

  methods: {
    getBuild(ids) {
      // console.log("ids :>> ", ids);
      let promises = ids.map((id) => this.getById(id, "Builds"));
      Promise.all(promises).then((result) => {
        let set = result.reduce((acc, val) => acc.concat(val), []);
        let existing = this.builds.map((b) => b.id);
        set
          .map((s) => s.id)
          .forEach((value) => {
            if (!existing.includes(value)) this.builds.push(...set);
          });
      });
    },
  },

  setup() {
    let { state, searchTable, getById } = useTable("Orders");

    return {
      state,
      searchTable,
      getById,
    };
  },

  name: "OrdersGallery",

  computed: {
    orders() {
      devmode && console.log("computed:  >> ", this.state.records);
      return this.state.records;
    },
    relatedBuilds() {
      return (ids) => {
        let builds = this.builds.filter((b) => ids.includes(b.id));
        return builds;
      };
    },
    relatedPics() {
      return (ids) => {
        Log("ids :>> ", ids);

        let pics = this.builds.map((m) => m.Pics).filter((p) => ids.includes(p.id));
        Log("pics :>> ", pics);

        return pics;
      };
    },
  },

  watch: {
    selected() {
      devmode && console.log("selected :>> ", this.selected);

      if (this.selected > 0) {
        let options = {
          maxRecords: parseInt(this.selected),
        };
        this.loading = true;
        this.searchTable(options, "Orders");
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

/* .gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
} */
.box {
  width: 200px;
  height: 200px;
  margin-top: 20px;
  background-color: rgb(108, 141, 213);
  box-shadow: rgba(108, 141, 213, 0.5) 0px 6px 20px;
  border-radius: 10px;
}
</style>
