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

    <Stack>
      <PartCard class="" :part="part" v-for="part in parts" :key="part.id">
        <!-- <button @click="addToChecklist(part)">Add</button> -->
        <!-- <SVGButton @click="submit" class="bg-purple-600">Update</SVGButton> -->
      </PartCard>
    </Stack>
  </div>
</template>
<script>
//import { initialOptions } from "../../../data/airtable-curl";
import Spinner from "../atoms/Spinner.vue";
import useTable from "../useTable";
import Stack from "../../components/flex/Stack.vue";
import Section from "../../components/molecules/Section.vue";
import Label from "../../components/atoms/Label.vue";
import FormInput from "../../components/atoms/FormInput.vue";
import Image from "../../components/atoms/Image.vue";
import Button from "../../components/atoms/Button.vue";
import SVGButton from "../../components/atoms/SVGButton.vue";
import Card from "../../components/molecules/Card.vue";
import PartCard from "../../components/parts/PartCard.vue";

export default {
  components: {
    Spinner,
    Stack,
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
    let { state, searchTable } = useTable();

    return {
      state,
      searchTable,
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
        this.searchTable(options);
        this.loading = false;
      }
    },
  },

  methods: {
    onChange(event) {
      console.log("event.target.value", event.target.value);
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
