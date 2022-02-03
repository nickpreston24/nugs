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

    <div class="gallery border-4 border-purple-500">
      <!-- <spinner
        :animation-duration="2000"
        :size="60"
        class="color-arctic-500"
        color="grey"
      /> -->
      <card class="gallery-panel" v-for="part in parts" :key="part.id">
        <template v-slot:header> </template>
        <template v-slot:default>
          <!-- Show Image -->
          <router-link v-if="part?.Attachments" :to="`/part/${part.id}`">
            <Image
              v-if="part.Attachments"
              :src="part.Attachments?.[0]?.url"
              class="transform transition-all hover:scale-125 hover:translate-y-20"
            />
          </router-link>
          <!-- Upload missing image -->
          <Stack v-else class="img-upload">
            <i>No Image Found...Please Upload one!</i>
            <form-input src="updatedUrl" placeholder="URL" class="" />
            <!-- <Label>Url</Label> -->
            <!-- <button v-data="{{show: false}}" @click= "show = true">Expand</button> -->
            <!-- <input type="text" v-show="show" /> -->
          </Stack>
        </template>

        <template v-slot:footer>
          <div class="m-10">
            <!-- <svg-button></svg-button> -->
            <h3 class="p-xl hover:text-orange-500 border-4 border-dotted">
              {{ part.Name }}
            </h3>
          </div>
        </template>
      </card>
    </div>
  </div>
</template>
<script>
import { initialOptions } from "../../../data/airtable-curl";
import Spinner from "../atoms/Spinner.vue";
import useTable from "../useTable";
import Stack from "../../components/flex/Stack.vue";
import Section from "../../components/molecules/Section.vue";
import Label from "../../components/atoms/Label.vue";
import FormInput from "../../components/atoms/FormInput.vue";
import Image from "../../components/atoms/Image.vue";
import SVGButton from "../../components/atoms/SVGButton.vue";
import Card from "../../components/molecules/Card.vue";

export default {
  components: { Spinner, Stack, Label, Section, Card, Image, FormInput, SVGButton },
  data() {
    return {
      selected: 10,
      limits: [10, 20, 50, 100],
      loading: false,
      show: true,
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
