<template>
  <div class="builds">
    <div class="text-purple-400 bg-midnight">
      <div>
        <h1 v-if="range" class="text-pink-500 text-7xl">{{ range }}</h1>
        <!-- <Button
          class="shadow-purple-400/50 shadow-md"
          v-if="false"
          @click="views.gallery.show = !views.gallery.show"
          >{{ views.gallery.show ? "Add Builds" : "View Builds" }}</Button
        > -->

        <div>
          <!-- <pre class="text-tiny">{{ groupBy(parts, "Type") }}</pre> -->
          <!-- <pre class="text-tiny">{{ checklist }}</pre> -->
          <!-- <pre class="text-tiny">{{ groupedParts }}</pre> -->
          <!-- <pre class="text-tiny">{{ partTypes }}</pre> -->
          <!-- <pre lass="text-tiny">{{ builds.map((b) => b?.Name) }}</pre> -->
          <!-- <pre class="text-tiny">{{ incomplete }}</pre> -->
          <!-- </Row> -->
          <!-- <Stack>
            <pre class="text-tiny">{{ percentCompleted }}</pre>
            <pre class="text-tiny">{{ totalEntries }}</pre>
          </Stack> -->

          <Stack>
            <radial-progress-bar
              :diameter="220"
              :completed-steps="completedSteps"
              :total-steps="totalSteps"
            >
              <h2>You are {{ percentCompleted.toFixed() }}% Done</h2>
            </radial-progress-bar>
          </Stack>
        </div>

        <!-- Checklist -->

        <!-- <pre>{{ parts.map((b) => b?.Name) }}</pre> -->

        <!-- <BuildsGallery v-if="views.gallery.show" /> -->

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
          <h1 class="text-4xl text-purple-500">Choose One of Each Part</h1>

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

        <!-- An Accordion style picker for parts -->

        <!-- <Accordion :list="builds">
          <template v-slot:header>
            <h1>&#x1F503;</h1>
          </template>
        </Accordion> -->

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
        <div v-for="type in partTypes">
          <!-- {{ type }} -->
          <h3 class="text-3xl" v-if="groupedParts[type]?.length > 0">
            Pick your {{ type }}
          </h3>

          <!-- <h4>{{ groupedParts[type] }}</h4> -->
          <Grid mode="photo">
            <card v-for="part in groupedParts[type]" :key="part.id" class="bg-tahiti-700">
              <PartCard :part="part">
                <button @click="addPart(part)">Add</button>
              </PartCard>
            </card>
          </Grid>
        </div>

        <!-- Builder -->
        <Grid v-if="false">
          <card
            class="gallery-panel border-4 max-w-2xl"
            v-for="part in parts"
            :key="part.id"
          >
            <template v-slot:header> </template>
            <template v-slot:default>
              <!-- Show Image -->

              <Stack>
                <p class="w-1/3 max-h-64">{{ part.Notes }}</p>
                <p class="w-1/3 max-h-64">{{ part.Type }}</p>
                <img
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
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import useTable from "../hooks/useTable";
import useBuilds from "../hooks/useBuilds";
import { random } from "../helpers/generators.ts";
import { devmode, Log, groupBy } from "../helpers";
import PartCard from "../components/parts/PartCard.vue";
import { Button, Spinner } from "../components/atoms";
import Brandon from "../components/atoms/Brandon.vue";
import Section from "../components/molecules/Section.vue";
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
    };
  },

  setup() {
    const {
      builds,
      parts,
      loading,
      error,
      addPart,
      checklist,
      percentCompleted,
      incomplete,
      majorParts,
      partTypes,
      groupedParts,
      totalEntries,
    } = useBuilds();

    return {
      builds,
      parts,
      loading,
      error,
      addPart,
      checklist,
      percentCompleted,
      incomplete,
      majorParts,
      partTypes,
      groupedParts,

      totalEntries,
    };
  },
  methods: {
    getRandomBuild() {
      this.views.randomBuild.show = true;
      this.build.parts = random.Shuffle(this.parts).take(3);
    },
    // addToChecklist(part) {
    //   if (!this.buildId) {
    //     this.create("Builds", part);
    //     Log(this.state.value, "after creating build...");
    //   }
    setRange(range) {
      this.$store.setRange(range);
    },
    computed: {
      range() {
        return this.$store.state.range;
      },
    },
  },
};
</script>
