<template>
  <div class="builds">
    <Section class="text-purple-500">
      <div>
        <pre>{{ showModal }}</pre>
        <Modal :show="showModal">
          <template #header>
            <div class="bg-midnight">
              <h3 class="text-3xl text-purple-500">Clear Build?</h3>
            </div>
          </template>
          <p class="text-xl text-ocean-600 semibold">
            FYI, this will clear your current build. Are you sure you wish to continue?
          </p>
          <template #footer>
            <Row>
              <Button @click="clearBuild">Yes</Button>
              <Button @click="showModal = false">No</Button>
            </Row>
          </template>
        </Modal>

        <Stack>
          <Row class="gap-10">
            <Stack class="gap-1.5 p-3xl">
              <brandon
                type="button"
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

          <div>
            <Card v-bind="build" class="bg-midnight p-4xl">
              <template v-slot:header>
                <h2 class="text-4xl">Your Build</h2>
                <h1 v-if="range" class="text-purple-500 text-xl">
                  {{ `Your budget is from $${range[0]} to $${range[1]}` }}
                </h1>
                <h3>
                  {{ build?.Name || build?.Id || "Untitled" }}
                </h3>
                <h4>Cost: ${{ totalCost }}</h4>
              </template>
              <Row>
                <p>{{ build?.Calibers }}</p>
                <p>{{ build?.Weight }}</p>
              </Row>

              <template v-slot:footer>
                <Stack>
                  <radial-progress-bar
                    :diameter="220"
                    :color="green"
                    :completed-steps="completedSteps"
                    :total-steps="totalSteps"
                  >
                    <h2>You are {{ percentCompleted.toFixed() }}% Done</h2>
                  </radial-progress-bar>
                </Stack>
              </template>
            </Card>
          </div>

          <h1 v-if="buildMode !== 'random'" class="text-4xl text-purple-500 p-lg">
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
        <Stack class="p-xl" v-if="percentCompleted < 100.0" v-for="type in partTypes">
          <h3 class="text-3xl" v-if="groupedParts[type]?.length > 0">
            Pick your {{ type }}
          </h3>

          <Row class="w-max-full">
            <div v-for="part in groupedParts[type]" :key="part.id" class="bg-transparent">
              <div v-if="part.selected" class="border-yellow border-2">
                <PartCard :part="part">
                  <Button @click="addPart(part)">Add</Button>
                </PartCard>
              </div>
              <div v-else-if="!part.selected">
                <PartCard :part="part">
                  <Button @click="addPart(part)">Add</Button>
                </PartCard>
              </div>
            </div>
          </Row>
        </Stack>
      </div>

      <div v-if="devmode">
        <!-- <pre class="text-tiny">{{ groupBy(parts, "Type") }}</pre> -->
        <pre class="text-tiny">{{ checklist }}</pre>
        <!-- <pre class="text-tiny">{{ groupedParts }}</pre> -->
        <!-- <pre class="text-tiny">{{ partTypes }}</pre> -->
        <!-- <pre lass="text-tiny">{{ builds.map((b) => b?.Name) }}</pre> -->
        <!-- <pre class="text-tiny">{{ incomplete }}</pre> -->
        <!-- </Row> -->
        <!-- <Stack>
            <pre class="text-tiny">{{ percentCompleted }}</pre>
            <pre class="text-tiny">{{ totalEntries }}</pre>
          </Stack> -->
      </div>
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
    Modal,
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
    };
  },

  setup() {
    const showModal = ref(false);

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
      clear,
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
      clear,

      showModal,
    };
  },
  methods: {
    clearBuild() {
      this.clear();
      this.showModal = false;
    },
    startCustomBuild() {
      this.showModal = !this.showModal;
    },
    setRange(range) {
      this.$store.setRange(range);
    },
  },
  computed: {
    range() {
      return this.$store.state.range;
    },
    totalCost() {
      const vals = this.build?.checklist;
      console.log("vals", vals);
      if (!vals) return 0;

      return Object.entries(vals).reduce((total, item) => {
        console.log("item", item);
        total += item?.Cost || 0.0;
        return total;
      }, 0);
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
