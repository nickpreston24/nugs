<template>
  <div class="builds">
    <Section class="text-purple-400">
      <Stack>
        <h1 class="text-pink-500 text-7xl">{{ range }}</h1>

        <Button v-if="gallery.show" @click="gallery.show = !gallery.show">{{
          gallery.show ? "Add Builds" : "View Builds"
        }}</Button>

        <!-- <BuildsGallery v-if="gallery.show" /> -->

        <!-- Slider bar -->
        <Stack>
          <h1 class="text-7xl">Your Budget</h1>
          <slider v-show="devmode" min="500" @range-changed="setRange"></slider>
        </Stack>

        <Button v-if="false" @click="crud">Run Serverless Function</Button>

        <legend v-if="devmode">{{ checklist }}</legend>

        <!-- <legend class="border-red border-4 w-64 h-28">api key:{{ apiKey }}</legend> -->
        <!-- Checklist -->

        <ul>
          <li v-for="item in types">
            <Row>
              <input type="checkbox" checked="item" />
              <label>{{ item || "item" }}</label>
            </Row>
          </li>
        </ul>

        <h2 class="text-3xl">Filter</h2>
        <Row>
          <chip v-for="type in types" class="text-pink-500 border-orange-500 border-2">{{
            type
          }}</chip>
        </Row>

        <!-- Builder -->
        <div class="gallery">
          <card
            class="gallery-panel border-4 max-w-2xl"
            v-for="part in parts"
            :key="part.id"
          >
            <template v-slot:header>
              <div class="text-orange-400 border-orange-700 border-4 border-double">
                <h3 class="p-xl text-orange-400 border-orange-700 border-4 border-double">
                  {{ part.Name }}
                </h3>
              </div>
            </template>
            <template v-slot:default>
              <!-- Show Image -->

              <Stack>
                <!-- <p class="w-1/3 max-h-64">{{ part.Notes }}</p> -->
                <p class="w-1/3 max-h-64">{{ part.Type }}</p>
                <Image
                  v-if="part.Attachments"
                  :src="part.Attachments?.[0]?.url"
                  class="transform transition-all hover:scale-125"
                />
              </Stack>
            </template>

            <template v-slot:footer>
              <div class="m-10">
                <SVGButton class="bg-orange-500" @click="addToChecklist(part)"
                  >Add</SVGButton
                >
              </div>
            </template>
          </card>
        </div>

        <!-- <Gradient class="m-4"> -->
        <!-- <card class="" @click="addPart">
          <template v-slot:header>
            <label class="text-5xl">Hanguard MS-KMR-13</label>
          </template>
          <template v-slot:default>
            <Stack>
              <Button class="text-5xl text-white border-radius hover:text-ocean-500"
                >Add to Build</Button
              >
              <Image
                src="https://cdn11.bigcommerce.com/s-16115g8ghe/images/stencil/1280x1280/products/1680/5284/BCM-BRL-MID-14-ELW-F-STD-2__04035.1571674582.jpg?c=1"
                alt="test"
              />
            </Stack>
          </template>
        </card> -->
        <!-- </Gradient> -->

        <!-- <Gradient class="m-4"> -->
        <!-- <card class="" @click="addPart">
          <template v-slot:header>
            <label class="text-5xl">Hanguard MS-KMR-13</label>
          </template>
          <template v-slot:default>
            <Stack>
              <Button class="text-5xl text-white border-radius hover:text-ocean-500"
                >Add to Build</Button
              >
              <Image
                src="https://www.weapondepot.com/wp-content/uploads/product-media/2020/07/BCM-GUNFTR-MCMR-RAIL-556-15-BLK-MLK-15837-1594054300-570x380.png"
                alt="test"
              />
            </Stack>
          </template>
        </card> -->
        <!-- </Gradient> -->

        <iframe
          v-if="false"
          class="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrtU3kYArQSfPHvs?backgroundColor=blue"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="1014"
          style="background: transparent; border: 1px solid #ccc"
        ></iframe>
      </Stack>
      // this.range = range;
    </Section>
  </div>
</template>
<script>
import axios from "axios";
import useTable from "../components/useTable";
import Button from "../components/atoms/Button.vue";
import Chip from "../components/atoms/Chip.vue";
import Section from "../components/molecules/Section.vue";
import Image from "../components/atoms/Image.vue";
import BuildsGallery from "../components/builds/BuildsGallery.vue";
import Card from "../components/molecules/Card.vue";
import Stack from "../components/flex/Stack.vue";
import Row from "../components/flex/Row.vue";
import Gradient from "../components/atoms/Gradient.vue";
import SVGButton from "../components/atoms/SVGButton.vue";
import Slider from "../components/atoms/Slider.vue";
import { devmode } from "../helpers/generators.ts";

export default {
  components: {
    BuildsGallery,
    Button,
    Stack,
    Row,
    Card,
    Gradient,
    Image,
    Section,
    SVGButton,
    Slider,
    Chip,
  },
  data() {
    return {
      gallery: { show: false },
      builder: { show: true },

      devmode: devmode(),

      build: {
        profile: { id: "12345", Name: "MP" },
      },
    };
  },
  computed: {
    checklist() {
      return this.$store.state.checklist;
    },
    parts() {
      return this.state.records;
    },
    types() {
      return this.state.records.filter((r) => r.Type).map((j) => j.Type);
    },
  },

  setup() {
    let { state, searchPagified, getById } = useTable("Parts");

    return {
      state,
      searchPagified,
      getById,
    };
  },
  methods: {
    addToChecklist(part) {
      console.log("part", part);
      // console.log("id", ({ id, Name, Attachments, Link, Calibers }: part));
      // const { checklist } = this;
      // const { buffer, upper, buttstock, lower } = checklist;
      // upper.barrel = "BCM fluted lw 5.56 NATO barrel";
      // upper.name = "MS-KMR-13";
      // upper.bcg = "BCM 5.56 NATO BCG Nitrided";
      // buttstock.brand = "Bravo Company";
      // return null;
    },
    setRange(range) {
      console.log("range", range);
      this.$store.state.range = range;
    },
    computed: {
      range() {
        return this.$store.state.range;
      },
    },
    crud() {
      const url = `api/sendMessage?name=${this.checklist.upper.name}`;
      // console.log("url", url);
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          // info.result = response.data;
        })
        .catch((err) => {
          // if (devmode) info.message = err;
          console.log("err :>> ", err);
        });
    },
  },
};
</script>
<style scoped>
html,
body {
  min-height: 100vh;
  background-color: #030303;
}

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
</style>
