<template>
  <div class="builds">
    <Section class="text-purple-400">
      <div>
        <h1 v-if="range" class="text-pink-500 text-7xl">{{ range }}</h1>

        <Button v-if="false" @click="views.gallery.show = !views.gallery.show">{{
          views.gallery.show ? "Add Builds" : "View Builds"
        }}</Button>

        <BuildsGallery v-if="views.gallery.show" />

        <!-- DEV Toggles -->
        <!-- <Row v-if="devmode">
          <div v-for="(item, key, index) in views">
            <label class="" for="checkbox">{{ key }}</label>
            <input type="checkbox" id="key" v-model="views" />
          </div>
        </Row> -->

        <!-- gallery: { show: true }, builder: { show: true }, budgetBuild: { show: false }, -->
        <!-- randomBuild: { show: true }, -->
        <!-- Slider bar -->
        <Stack>
          <h1 class="text-7xl text-purple-500">Build options</h1>

          <pre class="text-tiny">{{ checklist }}</pre>

          <Row class="gap-10">
            <Stack class="gap-0.5">
              <brandon class="transform transition-all hover:scale-125">
                Big Blaster Builder
              </brandon>
            </Stack>

            <brandon
              class="transform transition-all hover:scale-125"
              @click="getRandomBuild"
              >LET'S GO RANDOM!</brandon
            >
          </Row>

          <!-- Budget Option -->
          <Stack v-if="views.budgetBuild.show">
            <button class="text-purple-400 text-5xl mb-4">Pick your Budget here!</button>
            <slider min="500" @range-changed="setRange"></slider>
            <p>{{ range }}</p>
          </Stack>

          <Stack v-else-if="views.randomBuild.show">
            <!-- TODO: Create Randomizer Button & Parts Row set -->

            <!-- <label class="text-orange-300">Build List:</label>
            <pre v-if="devmode">{{ build }}</pre>
            <label class="text-orange-300">Checklist:</label>
            <pre v-if="devmode">{{ checklist }}</pre> -->
          </Stack>
        </Stack>

        <Button v-if="false" @click="crud">Run Serverless Function</Button>

        <!-- Checklist -->

        <radial-progress-bar
          v-if="false"
          :diameter="200"
          :completed-steps="completedSteps"
          :total-steps="totalSteps"
        >
          <h2>{{ percent }}%</h2>
        </radial-progress-bar>

        <!-- A Checklist-->
        <!-- <Grid v-if="devmode">
          <Row v-for="(item, outer) in types">
            <input type="checkbox" checked="item" />
            <label>{{ item || "item" }}</label>
          </Row>
        </Grid> -->

        <!-- A filter for Search Boxes -->

        <!-- <h2 class="text-3xl">Filter</h2>
        <Grid>
          <chip
            v-for="type in types"
            class="text-white shadow-2xl border-white border-2 bg-orange-500 rounded-4xl"
            >{{ type }}
          </chip>
        </Grid> -->

        <Spinner
          v-if="loading"
          :animation-duration="2000"
          :size="60"
          class="color-arctic-500"
        />
        <Grid mode="photo">
          <card v-for="(part, key, index) in parts" :key="part.id" class="bg-tahiti-700">
            <PartCard :part="part">
              <button @click="addToChecklist(part)">Add</button>
            </PartCard>
          </card>
        </Grid>

        <!-- Builder -->
        <Grid v-if="false">
          <card
            class="gallery-panel border-4 max-w-2xl"
            v-for="part in parts"
            :key="part.id"
          >
            <template v-slot:header>
              <!-- <div
                class="text-orange-400 border-orange-700 border-4 border-double p-tiny"
              >
                <div
                  class="text-orange-400 border-ocean-700 border-4 border-double p-tiny"
                >
                  <h3 class="p-tiny text-white border-purple-700 border-4 border-double">
                    {{ part.Name }}
                  </h3>
                </div>
              </div> -->
            </template>
            <template v-slot:default>
              <!-- Show Image -->

              <Stack class="">
                <!-- <p class="w-1/3 max-h-64">{{ part.Notes }}</p> -->
                <p class="w-1/3 max-h-64">{{ part.Type }}</p>
                <Image
                  v-if="part.Attachments"
                  :src="part.Attachments?.[0]?.url"
                  class="transform transition-all hover:scale-125"
                />
                <!-- <figure class='' v-else-if="!part.Attachments">No Attachment</figure> -->
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
        </Grid>

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
      </div>
    </Section>
  </div>
</template>
<script>
import axios from "axios";
import useTable from "../components/useTable";
import { random } from "../helpers/generators.ts";
import { UniqueArray, unique } from "../helpers/array.ts";
import { nameOf, devmode } from "../helpers";

import PartCard from "../components/parts/PartCard.vue";
import { Button, Spinner } from "../components/atoms";
import Brandon from "../components/atoms/Brandon.vue";
// import Toggle from "../components/atoms/Toggle.vue";
import Chip from "../components/atoms/Chip.vue";
import Section from "../components/molecules/Section.vue";
// import RadialProgress from "../components/molecules/RadialProgress.vue";
import Image from "../components/atoms/Image.vue";
import BuildsGallery from "../components/builds/BuildsGallery.vue";
import Card from "../components/molecules/Card.vue";
import Stack from "../components/flex/Stack.vue";
import Grid from "../components/flex/Grid.vue";
import Row from "../components/flex/Row.vue";
import Gradient from "../components/atoms/Gradient.vue";
import SVGButton from "../components/molecules/SVGButton.vue";
import Slider from "../components/atoms/Slider.vue";
import RadialProgressBar from "vue3-radial-progress";
import { Shadow } from "../components/atoms";
import { ref } from "vue";
import { Log } from "../helpers";

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
    // Toggle,
    Grid,
    RadialProgressBar,
    Brandon,
    PartCard,
    Shadow,
    Spinner,
  },
  data() {
    return {
      views: {
        gallery: { show: false },
        builder: { show: false },
        budgetBuild: { show: false },
        randomBuild: { show: false },
      },

      devmode: devmode,

      build: {
        parts: [],
      },
    };
  },
  computed: {
    checklist() {
      return this.$store.state.checklist;
    },
    percent() {
      return (this.completedSteps / this.totalSteps) * 100;
    },
    parts() {
      return this.state.records;
    },
    types() {
      const list = Object.keys(this.$store.state.checklist);
      return list;
    },
    categories() {
      const list = Object.keys(this.$store.state.checklist);
      const arr = list.filter((r) => r.Type).map((j) => j.Type);
      return arr.filter((a, i) => arr.findIndex((s) => a === s) === i);
    },
    completed() {
      const list = Object.entries(this.$store.state.checklist).filter((entry) => !!entry);

      // this.completedSteps = list?.length || 0;
      // console.log("this.completedSteps", this.completedSteps);
      return list;
    },
  },

  setup() {
    let { state, searchTable, getById, loading, error } = useTable("Parts", {
      maxRecords: 20,
    });

    const completedSteps = ref(5);
    const totalSteps = ref(10);

    return {
      state,
      searchTable,
      getById,

      completedSteps,
      totalSteps,

      loading,
      error,
    };
  },
  methods: {
    getRandomBuild() {
      this.views.randomBuild.show = true;
      this.build.parts = random.Shuffle(this.parts).take(3);
    },
    addToBuild() {},

    addToChecklist(part) {
      Log("part", part);
      this.$store.commit("addPart", part);
    },
    setRange(range) {
      this.$store.setRange(range);
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
          Log(response);
          // info.result = response.data;
        })
        .catch((err) => {
          // if (devmode) info.message = err;
          Log("err :>> ", err);
        });
    },
  },
};
</script>
