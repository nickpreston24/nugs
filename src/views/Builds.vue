<template>
  <div class="builds">
    <div class="bg-midnight">
      <Dashboard>
        <template v-slot:header>
          <!-- <div class="w-auto border-2 h-80"></div> -->
        </template>

        <template v-slot:top>
          <!-- <h1 class="text-lg text-orange-300 lg:text-5xl">Pick Your Parts</h1> -->
        </template>
        <template v-slot:left>
          <div class="w-auto h-screen m-1 overflow-auto">
            <Spinner
              v-if="loading"
              :animation-duration="2000"
              :size="60"
              class="color-arctic-500"
            />
            <div v-for="type in partTypes" :key="type">
              <h3
                class="text-lg shadow-2xl text-ocean-400 lg:text-3xl shadow-ocean-500"
                v-if="groupedParts[type]?.length > 0"
              >
                Pick a {{ type }}
              </h3>
              <!-- <p class="text-xs text-white">
                ({{ groupedParts[type]?.length || "" }} Options)
              </p> -->
              <swiper
                :slides-per-view="3"
                :space-between="2"
                :autoplay="{ delay: 2500 }"
                :style="{
                  autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                  },
                }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
              >
                <swiper-slide v-for="part in groupedParts[type]" :key="part?.Id">
                  <Card
                    :key="part.id"
                    :part="part"
                    class="m-1 text-purple-500 border-2 rounded-lg overflow-wrap border-tahiti-500"
                  >
                    <template v-slot:header>
                      <p class="overflow-auto ellipsis">{{ part.Name }}</p>
                      <pre>{{ part?.selected ? "y" : "" }}</pre>
                    </template>
                    <template v-slot:default>
                      <Stack class="text-purple-500">
                        <figure>
                          <img
                            v-if="part?.Attachments"
                            :src="part?.Attachments?.[0]?.url"
                            class="transition-all transform hover:scale-125"
                          />
                          <Stack v-else-if="!part?.Attachment">
                            <form-input
                              :input="onChange"
                              type="text"
                              src="updatedUrl"
                              placeholder="URL"
                            >
                              <i class="fa fa-link fa-lg"></i>
                            </form-input>
                            <i class="text-orange-300">Image Coming Soon!</i>
                          </Stack>
                        </figure>
                        <p>
                          ${{
                            part?.Cost === undefined || part?.Cost === null
                              ? "???"
                              : part?.Cost || 0
                          }}
                        </p>
                      </Stack>
                    </template>

                    <template v-slot:footer>
                      <Row class="m-2">
                        <button
                          v-if="part?.Name"
                          class="w-16 text-white border-2 border-white rounded-lg hover:border-orange-300 hover:text-orange-300"
                          @click="addPart(part)"
                        >
                          <i class="fa fa-plus"></i>
                        </button>

                        <button
                          v-if="part?.URL"
                          class="w-16 text-white transform border-2 border-white rounded-lg hover:border-orange-300 hover:text-orange-300 hover:scale-110"
                        >
                          <a :href="part?.URL" target="_blank">
                            <i class="fa fa-link"></i>
                          </a>
                        </button>
                      </Row>
                    </template>
                  </Card>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </template>
        <template v-slot:right>
          <div class="w-auto h-screen overflow-auto text-ocean-600">
            <Card>
              <template v-slot:header>
                <!-- <pre>completedSteps? {{ completedSteps }}</pre> -->
                <!-- <pre>totalSteps? {{ totalSteps }}</pre> -->
                <Stack class="">
                  <radial-progress-bar
                    :diameter="130"
                    :completed-steps="completedSteps"
                    :total-steps="totalEntries"
                  >
                    <h2>{{ percentCompleted.toFixed() }}% Done</h2>
                  </radial-progress-bar>
                </Stack>
              </template>

              <Stack>
                <!-- <h1 class="text-lg lg:text-3xl">Options:</h1> -->
                <Row v-if="false" class="gap-5 lg:gap-15">
                  <brandon
                    v-if="devmode"
                    @click="clear"
                    class="transition-all transform hover:scale-125"
                  >
                    Customize!
                  </brandon>

                  <brandon
                    class="transition-all transform hover:scale-125"
                    @click="getRandomBuild"
                    >Randomize!</brandon
                  >
                </Row>

                <!-- Budget Options -->

                <Stack>
                  <label v-show="range" class="text-lg lg:text-2xl">{{
                    budgetLabel
                  }}</label>

                  <slider min="500" @range-changed="setRange"></slider>
                </Stack>

                <label>{{ build?.Name }}</label>

                <label v-if="devmode">Within Budget: {{ isWithinBudget }}</label>
                <label>Build Cost: {{ buildCost }}</label>
                <label
                  >Caliber:
                  <Chip class="text-white bg-orange-500">
                    <p>{{ checklist["Barrel"]?.Calibers?.[0] || "unknown" }}</p>
                    <icon class="fa-solid fa-beer"></icon>
                  </Chip>
                </label>

                <Row class="flex-wrap" v-if="true" mode="photo">
                  <div v-for="item in picks" :key="item.id">
                    <p v-if="item?.[1]?.Name" class="text-tahiti-500">
                      <i v-show="item?.[1]?.Name" class="fa fa-check"></i> {{ item?.[0] }}
                    </p>
                    <p v-else-if="!item?.[1]?.Name" class="text-gray-300">
                      <i v-show="item?.[1]?.Name" class="fa fa-check"></i> {{ item?.[0] }}
                    </p>
                  </div>
                </Row>
              </Stack>
            </Card>
          </div>
        </template>
        <template v-slot:bottom>
          <div v-if="devmode" class="w-auto h-auto">
            <div>
              <!-- <pre class="text-tiny">{{ checklist }}</pre> -->
              <!-- <pre class="text-tiny">{{ groupedParts }}</pre> -->
              <!-- <pre lass="text-tiny">{{ builds.map((b) => b?.Name) }}</pre> -->
            </div>
          </div>
        </template>
      </Dashboard>
    </div>
  </div>
</template>
<script>
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// My Imports
import { useRange, useBuilds } from "../hooks";
import { random } from "../helpers/generators.ts";
import { devmode } from "../helpers";
import PartCard from "../components/parts/PartCard.vue";
import { Button, Spinner, Brandon, Chip } from "../components/atoms";
import { Section, Card, SVGButton } from "../components/molecules";
import Image from "../components/atoms/Image.vue";
import { Stack, Grid, Row } from "../components/flex";
import Gradient from "../components/atoms/Gradient.vue";
import Slider from "../components/atoms/Slider.vue";
import RadialProgressBar from "vue3-radial-progress";
import { Dashboard } from "../components/templates";
import {
  collapsed,
  toggleSidebar,
  mode,
  background,
  hidden,
} from "../components/organisms/sidebar/useSidebar";

export default {
  components: {
    Chip,
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
    Spinner,
    Dashboard,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      views: {
        gallery: { show: false },
        builder: { show: false },
        budgetBuild: { show: false },
        randomBuild: { show: false },
      },
      devmode,

      // sample:
      cards: [2, 4, 6, 8, 10],
      //carousel exmample:
      slides: [
        "https://picsum.photos/id/230/600/300",
        "https://picsum.photos/id/231/600/300",
        "https://picsum.photos/id/232/600/300",
        "https://picsum.photos/id/233/600/300",
        "https://picsum.photos/id/234/600/300",
        "https://picsum.photos/id/235/600/300",
        "https://picsum.photos/id/236/600/300",
      ],
    };
  },
  mounted() {
    this.startTimeouts();
  },
  setup() {
    // sidebar
    mode.value = "RIGHT";
    background.value = "bg-gray-300 opacity-50";

    const {
      builds,
      parts,
      build,
      loading,
      error,
      addPart,
      checklist,
      picks,
      percentCompleted,
      completedSteps,
      incomplete,
      partTypes,
      totalEntries,
      groupedParts,
      buildMode,
      clear,
      buildCost,
      isWithinBudget,
    } = useBuilds();

    const { range } = useRange();

    return {
      // Builds
      builds,
      parts,
      build,
      loading,
      error,
      addPart,
      checklist,
      picks,
      percentCompleted,
      incomplete,
      partTypes,
      totalEntries,
      groupedParts,
      buildMode,
      clear,
      totalEntries,

      // budget
      range,

      //sidebar
      toggleSidebar,
      collapsed,
      buildCost,
      completedSteps,
      isWithinBudget,
    };
  },
  methods: {
    getRandomBuild() {
      this.views.randomBuild.show = true;
      this.build.parts = random.Shuffle(this.parts);
    },
    // addToChecklist(part) {
    //   }
    setRange(range) {
      this.range.value = range;
    },
    startTimeouts() {
      setTimeout(() => {
        collapsed.value = true;
      }, 2500);
    },
  },
  computed: {
    budgetLabel() {
      return `Budget: $${this.range?.value?.[0] || ""} -> ${
        this.range?.value?.[1] || ""
      } `;
    },
    // picks() {
    //   console.log("picks", this.checklist);
    //   const result = new Map(Object.entries(this.checklist));
    //   return result;
    // },
    // remaining() {
    //   return; //this.checklist;
    // },
  },
};
</script>

<!-- <Button
          class="shadow-md shadow-purple-400/50"
          v-if="false"
          @click="views.gallery.show = !views.gallery.show"
          >{{ views.gallery.show ? "Save Builds" : "See What others are building" }}</Button
        > -->

<!-- DEV Toggles -->
<!-- <Row v-if="devmode">
          <div v-for="(item, key, index) in views">
            <label class="text-lg lg:text-3xl" for="checkbox">{{ key }}</label>
            <input type="checkbox" id="key" v-model="views" />
          </div>
        </Row> -->

<!-- gallery: { show: true }, builder: { show: true }, budgetBuild: { show: false }, -->
<!-- randomBuild: { show: true }, -->
<!-- Slider bar -->

<!-- <Button v-if="false" @click="crud">Run Serverless Function</Button> -->

<!-- An Accordion style picker for parts -->

<!-- <Accordion :list="builds">
          <template v-slot:header>
            <h1>&#x1F503;</h1>
          </template>
        </Accordion> -->

<!-- A filter for Search Boxes -->

<!-- <h2 class="text-lg lg:text-3xl">Filter</h2>
        <Grid>
          <chip
            v-for="type in types"
            class="text-white bg-orange-300 border-2 border-white shadow-2xl rounded-4xl"
            >{{ type }}
          </chip>
        </Grid> -->
