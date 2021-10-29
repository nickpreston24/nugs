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

    <!-- <p>{{ state.records[0] }}</p> -->

    <!-- <Accordion :list="state.records">
      <template v-slot:header>
        <h1>&#x1F503;</h1>
      </template>
    </Accordion> -->

    <div class="gallery">
      <Spinner
        v-if="false"
        :animation-duration="2000"
        :size="60"
        class="color-arctic-500"
        color="grey"
      />

      <p>{{ builds }}</p>

      <!-- <Button v-on:click="show = !show">Toggle transition</Button>
      <fade-transition>
        <div v-if="show" class="w-100 box">HI</div>
      </fade-transition> -->

      <div class="gallery-panel" v-for="order in orders" :key="order.id">
        <!-- <h1>{{ order.Payments[0] }}</h1> -->

        <div class="gallery-item">
          <h2>&#x0023;&#xFE0F;&#x20E3; {{ order.Build.length }}</h2>
          <h3>&#x1F4C5; {{ order.Created }}</h3>
          <h4>&#x1F4B2; {{ order.SubTotal }}</h4>
          <i>{{ order.Build }}</i>

          <!-- <h4>Total: {{ order.Total }}</h4> -->

          <!-- <Button>
            <flowing-border-transition>
              &#x1F639; SMASH
            </flowing-border-transition>
          </Button> -->

          <!-- <Button v-on:click="show = !show">Toggle transition</Button>
          <flowing-border-transition>
            <div v-if="show" class="box"></div>
          </flowing-border-transition> -->

          <router-link v-if="order?.Attachments" :to="`/order/${order.id}`">
            <img
              v-if="order.Attachments"
              :src="order.Attachments?.[0]?.url"
              class="transform transition-all hover:scale-125"
            />
          </router-link>

          <div v-else class="img-upload text-arctic-600 gentle-flex">
            <!-- <span v-if="devmode">&#x1F63C;</span> -->
            <input type="text" v-show="show" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Spinner from "../atoms/Spinner.vue";
import useTable from "../useTable";
import { devmode } from "../../../src/helpers/generators";
import Button from "../atoms/Button.vue";
// import Accordion from "../molecules/Accordion.vue";
// import FlowingBorderTransition from "../transitions/FlowingBorderTransition.vue";
// import FadeTransition from "../transitions/FadeTransition.vue";

export default {
  components: {
    Spinner,
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
      devmode: devmode(),
      show: true,
      // builds: [],
    };
  },

  methods: {
    // getBuilds(ids = []) {
    //   let buildIds = [...ids];
    //   console.log("buildIds :>> ", buildIds);
    //   // console.log('promises :>> ', promises);
    //   // let orders = this.state.records;
    //   // console.log('orders[id] :>> ', orders[id]);
    //   // let buildId = ;
    //   // let build = await this.getById(buildId, "Builds");
    //   // console.log("build :>> ", build);
    //   // console.log('build.Name :>> ', build.fields.Name);
    //   // let matchingBuilds = this.state.records
    //   // console.log("matchingBuild :>> ", matchingBuild);
    // },
  },

  setup() {
    let { state, searchPagified, getById } = useTable("Orders");

    return {
      state,
      searchPagified,
      getById,
    };
  },

  name: "OrdersGallery",

  computed: {
    orders() {
      // devmode && console.log("computed:  >> ", this.state.records);
      return this.state.records;
    },
    builds() {
      // let promises = buildIds.map((id) => this.getById(id, "Builds"));
      // Promise.all(promises).then((result) => {
      //   let set = result.reduce((acc, val) => acc.concat(val), []);
      //   this.builds.push(set);
      // });
      return this.state.records.reduce((acc, val) => acc.concat(val.Build), []);
    },
  },

  watch: {
    selected() {
      if (this.selected > 0) {
        let options = {
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
.box {
  width: 200px;
  height: 200px;
  margin-top: 20px;
  background-color: rgb(108, 141, 213);
  box-shadow: rgba(108, 141, 213, 0.5) 0px 6px 20px;
  border-radius: 10px;
}
</style>