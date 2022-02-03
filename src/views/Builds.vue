<template>
  <div class="builds">
    <Section class="text-purple-400">
      <Stack>
        <Button v-if="gallery.show" @click="gallery.show = !gallery.show">{{
          gallery.show ? "Add Builds" : "View Builds"
        }}</Button>

        <BuildsGallery v-show="gallery.show" />

        <!-- Slider bar -->

        <Button @click="crud">Run Serverless Function</Button>

        <!-- Builder -->

        <!-- <legend>{{ checklist }}</legend> -->

        <!-- <legend class="border-red border-4 w-64 h-28">api key:{{ apiKey }}</legend> -->

        <ul>
          <li v-for="item in checklist">
            <label>{{ item?.name || "item" }}</label>
            <input type="checkbox" checked="item" />
          </li>
        </ul>

        <!-- <Gradient class="m-4"> -->
        <card class="" @click="addPart">
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
          <!-- <template v-slot:footer> </template> -->
        </card>
        <!-- </Gradient> -->

        <!-- <Gradient class="m-4"> -->
        <card class="" @click="addPart">
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
          <!-- <template v-slot:footer> </template> -->
        </card>
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
    </Section>
  </div>
</template>
<script>
import Button from "../components/atoms/Button.vue";
import Section from "../components/molecules/Section.vue";
import Image from "../components/atoms/Image.vue";
import BuildsGallery from "../components/builds/BuildsGallery.vue";
import Card from "../components/molecules/Card.vue";
import Stack from "../components/flex/Stack.vue";
import Row from "../components/flex/Row.vue";
import Gradient from "../components/atoms/Gradient.vue";
import axios from "axios";
import useTable from "../components/useTable";

export default {
  data() {
    return {
      // apiKey: import.meta.env.VITE_VERCEL_AIRTABLE_API_KEY,

      gallery: { show: true },
      builder: { show: true },

      build: {
        parts: [],
        profile: { id: "12345", Name: "MP" },
      },

      checklist: {
        buffer: {
          spring: null,
          tube: null,
          alt: null,
        },
        upper: {
          handguard: null,
          barrel: null,
          bcg: null,
          gasblock: null,
          gastube: null,
        },
        buttstock: { id: null, brand: "" },
        lower: {
          LPK: {
            brand: "",
          },
        },
      },
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
  methods: {
    addPart() {
      const { checklist } = this;
      const { buffer, upper, buttstock, lower } = checklist;
      upper.barrel = "BCM fluted lw 5.56 NATO barrel";
      upper.name = "MS-KMR-13";
      upper.bcg = "BCM 5.56 NATO BCG Nitrided";
      buttstock.brand = "Bravo Company";
      return null;
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
  components: {
    BuildsGallery,
    Button,
    Stack,
    Card,
    Gradient,
    Image,
    Section,
  },
};
</script>
<style scoped>
html,
body {
  min-height: 100vh;
  background-color: #030303;
}
</style>
