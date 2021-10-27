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

    <p>{{ state.records[0] }}</p>

    <div class="gallery">
      <Spinner
        v-if="devmode"
        :animation-duration="2000"
        :size="60"
        class="color-arctic-500"
        color="grey"
      />
      <div class="gallery-panel" v-for="order in orders" :key="order.id">
        <h1>{{ order.Name }}</h1>
        <h4>Subtotal: {{ order.SubTotal }}</h4>
        <h4>Total: {{ order.Total }}</h4>
        <h3>Date Ordered: {{ order.Created }}</h3>

        <router-link v-if="order?.Attachments" :to="`/order/${order.id}`">
          <img
            v-if="order.Attachments"
            :src="order.Attachments?.[0]?.url"
            class="transform transition-all hover:scale-125"
          />
        </router-link>

        <div v-else class="img-upload text-arctic-600 gentle-flex">
          <span v-if="devmode">No Image Found...Please Upload one!</span>
          <input type="text" v-show="show" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Spinner from "../atoms/Spinner.vue";
import useTable from "../useTable";
import { devmode } from "../../../src/helpers/generators";

export default {
  components: { Spinner },
  data() {
    return {
      selected: 10,
      limits: [10, 20, 50, 100],
      loading: false,
      devmode: devmode(),
    };
  },

  setup() {
    let { state, searchPagified } = useTable("Orders");

    return {
      state,
      searchPagified,
    };
  },

  name: "OrdersGallery",

  computed: {
    orders() {
      console.log("computed:  >> ", this.state.records);
      return this.state.records;
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