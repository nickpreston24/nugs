<template>
  <div class="builds">
    <Section class="text-white">
      <div>
        <h1 v-if="range" class="text-pink-500 text-7xl">{{ range }}</h1>

        <Stack>
          <Row class="gap-10">
            <Stack class="gap-0.5">
              <brandon
                @click="startCustomBuild"
                class="transform transition-all hover:scale-125"
              >
                Big Blaster Builder
              </brandon>
            </Stack>

            <brandon
              class="transform transition-all hover:scale-125"
              @click="getRandomBuild"
              >LET'S GO RANDOM!</brandon
            >
          </Row>

          <h1 v-if="buildMode === 'random'" class="text-4xl text-purple-500">
            Choose One of Each Part
          </h1>

          <!-- Budget Option -->
          <Stack v-if="views.budgetBuild.show">
            <button class="text-purple-400 text-5xl mb-4">Pick your Budget here!</button>
            <slider min="500" @range-changed="setRange"></slider>
            <p>{{ range }}</p>
          </Stack>
        </Stack>

        <Button v-if="false" @click="crud">Run Serverless Function</Button>

        <Spinner
          v-if="loading"
          :animation-duration="2000"
          :size="60"
          class="color-arctic-500"
        />
        <div v-for="type in partTypes">
          <h3 class="text-3xl" v-if="groupedParts[type]?.length > 0">
            Pick your {{ type }}
          </h3>

          <Grid v-if="devmode" mode="photo">
            <div
              v-for="part in groupedParts[type]"
              :key="part.id"
              class="bg-transparent border-ocean-500 border-4 h-full"
            >
              <Gradient v-if="part.selected">
                <PartCard :part="part">
                  <button @click="addPart(part)">Add</button>
                </PartCard>
              </Gradient>
            </div>
          </Grid>
        </div>
      </div>

      <Stack>
        <h2 class="text-4xl text-purple-500">Here's Your Build!</h2>
        <Card v-bind="build">
          <template v-slot:header>
            {{ build?.Name || build?.Id || "Untitled" }}
          </template>
          <Row>
            <p>{{ build?.Calibers }}</p>
            <p>{{ build?.Weight }}</p>
          </Row>
          <template v-slot:footer>
            <radial-progress-bar
              :diameter="220"
              :completed-steps="completedSteps"
              :total-steps="totalSteps"
            >
              <h2>You are {{ percentCompleted.toFixed() }}% Done</h2>
            </radial-progress-bar>
          </template>
        </Card>
      </Stack>

      <!-- <div v-if="devmode"> -->
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
      <!-- </div> -->
    </Section>
  </div>
</template>
<script>
import axios from "axios";
import useTable from "../hooks/useTable";
import useBuilds from "../hooks/useBuilds";
import { random } from "../helpers/generators.ts";
import { devmode, Log, groupBy } from "../helpers";
import PartCard from "../components/parts/PartCard.vue";
import { Section, Card, SVGButton, Modal } from "../components/molecules";

import {
  Button,
  Spinner,
  Brandon,
  Image,
  Gradient,
  Slider,
  Shadow,
} from "../components/atoms";

import BuildsGallery from "../components/builds/BuildsGallery.vue";
import Stack from "../components/flex/Stack.vue";
import Grid from "../components/flex/Grid.vue";
import Row from "../components/flex/Row.vue";
import RadialProgressBar from "vue3-radial-progress";
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

      devmode: devmode,
      showModal: false,
    };
  },

  setup() {
    const {
      builds,
      parts,
      build,
      loading,
      error,
      addPart,
      checklist,
      percentCompleted,
      partTypes,
      groupedParts,
      getRandomBuild,
      buildMode,
    } = useBuilds();

    return {
      builds,
      parts,
      build,
      loading,
      error,
      addPart,
      checklist,
      percentCompleted,
      partTypes,
      groupedParts,
      getRandomBuild,
      buildMode,
    };
  },
  methods: {
    startCustomBuild() {},
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

<!-- <Button
          class="shadow-purple-400/50 shadow-md"
          v-if="false"
          @click="views.gallery.show = !views.gallery.show"
          >{{ views.gallery.show ? "Add Builds" : "View Builds" }}</Button
        > -->

<!-- <BuildsGallery v-if="views.gallery.show" /> -->

<!-- DEV Toggles -->
<!-- <Row v-if="devmode">
          <div v-for="(item, key, index) in views">
            <label class="" for="checkbox">{{ key }}</label>
            <input type="checkbox" id="key" v-model="views" />
          </div>
        </Row> -->

<!-- A filter for Search Boxes -->

<!-- <h2 class="text-3xl">Filter</h2>
        <Grid>
          <chip
            v-for="type in types"
            class="text-white shadow-2xl border-white border-2 bg-orange-500 rounded-4xl"
            >{{ type }}
          </chip>
        </Grid> -->

<!-- Builder -->
<!-- <Grid v-if="true">
          <Card
            class="gallery-panel border-4 max-w-2xl"
            v-for="part in parts"
            :key="part.id"
          >
            <template v-slot:header> </template>
            <template v-slot:default>

              <Stack>
                <p class="w-1/3 max-h-64">{{ part.Notes }}</p>
                <p class="w-1/3 max-h-64">{{ part.Type }}</p>
                <img
                  v-if="part.Attachments"
                  :src="part.Attachments?.[0]?.url"
                  class="transform transition-all hover:scale-125"
                />
              </Stack>
            </template>

            <template v-slot:footer>
              <div class="m-10">
                <SVGButton class="bg-orange-500" @click="addPart(part)">Add</SVGButton>
              </div>
            </template>
          </Card>
        </Grid> -->
