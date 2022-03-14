<template>
  <div class="text-white">
    <div id="v-model-select" class="m-10 gentle-flex">
      <select v-model="selected" @change="onSelection">
        <option disabled value="">Please select one</option>
        <option :key="limit" v-bind="limit" v-for="limit in limits">
          {{ limit }}
        </option>
      </select>
    </div>
    <Stack mode="photo">
      <card v-for="part in parts" :key="part.id" class="bg-transparent">
        <PartCard :part="part" class="hover:border-rose-500">
          <button class="hover:text-orange-500" @click="submit">Update</button>
        </PartCard>
      </card>
    </Stack>
  </div>
</template>
<script>
import Spinner from "../atoms/Spinner.vue";
import useTable from "../../hooks/useTable";
import { Stack, Grid, Row } from "../../components/flex";
import Section from "../../components/molecules/Section.vue";
import Label from "../../components/atoms/Label.vue";
import FormInput from "../../components/atoms/FormInput.vue";
import Image from "../../components/atoms/Image.vue";
import Button from "../../components/atoms/Button.vue";
import SVGButton from "../../components/molecules/SVGButton.vue";
import Card from "../../components/molecules/Card.vue";
import PartCard from "../../components/parts/PartCard.vue";
import { Log } from "../../helpers";

const initialOptions = {};

export default {
  components: {
    Spinner,
    Stack,
    Grid,
    Row,
    Label,
    Section,
    Card,
    Image,
    FormInput,
    SVGButton,
    Button,
    PartCard,
  },
  data() {
    return {
      selected: 10,
      limits: [10, 20, 50, 100],
      loading: false,
      show: true,
    };
  },

  setup() {
    let { state, searchTable } = useTable("Parts", { maxRecords: 20 });

    return {
      state,
      searchTable,
    };
  },

  name: "PartsGallery",

  computed: {
    parts() {
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
        this.searchTable(options);
        this.loading = false;
      }
    },
  },

  methods: {
    onChange(event) {
      Log("event.target.value", event.target.value);
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

/* Swoosh in */

.my-list li {
  animation: fallback-animation;
}

@supports (--variables) {
  .my-list li {
    animation: fancy-animation;
    animation-delay: calc(var(--animation-order) * 100ms);
  }
}
</style>
