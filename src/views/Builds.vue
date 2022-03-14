<template>
  <div class="builds">
    <div class="bg-midnight">
      <Dashboard>
        <template v-slot:header>
          <!-- <div class="w-auto border-2 h-80"></div> -->
        </template>

        <template v-slot:top>
          <h1 class="text-lg text-orange-300 lg:text-5xl">Pick Your Parts</h1>
        </template>
        <template v-slot:left>
          <div class="w-auto h-screen overflow-auto">
            <Spinner
              v-if="loading"
              :animation-duration="2000"
              :size="60"
              class="color-arctic-500"
            />
            <div v-for="type in partTypes" :key="type">
              <h3
                class="text-lg text-purple-400 lg:text-3xl"
                v-if="groupedParts[type]?.length > 0"
              >
                Pick your {{ type }} ({{ groupedParts[type]?.length || "" }} total)
              </h3>

              <swiper
                class="border-2"
                :slides-per-view="3"
                :space-between="50"
                :autoplay="{ delay: 2500 }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
              >
                <swiper-slide v-for="part in groupedParts[type]" :key="part?.Id">
                  <Card
                    :key="part.id"
                    :part="part"
                    class="overflow-auto text-purple-500 border-4 border-tahiti-500"
                  >
                    <template v-slot:header>
                      <p>{{ part.Name }}</p>
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
                        <p>${{ part?.Cost || "???" }}</p>
                      </Stack>
                    </template>

                    <template v-slot:footer>
                      <Row class="m-2">
                        <button
                          tip="Hi"
                          class="w-16 text-white border-2 border-white rounded-lg hover:border-orange-300 hover:text-orange-300"
                          @click="addPart(part)"
                        >
                          <i class="fa fa-plus"></i>
                        </button>

                        <button
                          class="w-16 text-white transform border-2 border-white rounded-lg hover:border-orange-300 hover:text-orange-300 hover:scale-110"
                        >
                          <a :href="part?.URL" target="_blank">
                            <i class="fa fa-link"></i>
                          </a>
                        </button>
                      </Row>
                    </template>
                    <!--  -->
                  </Card>
                </swiper-slide>
              </swiper>

              <!--   <Grid v-if="true" mode="feed">
                <div v-for="part in groupedParts[type]" :key="part.id">
                  <PartCard :part="part">
                    <button
                      class="border-4 hover:border-orange-300 hover:text-orange-300 "
                      @click="addPart(part)"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </PartCard>
                </div> 
              </Grid>-->
            </div>

            <!-- Builder attempt 2-->
            <Grid v-if="false">
              <Card
                class="max-w-2xl border-4 gallery-panel"
                v-for="part in groupedParts[type]"
                :key="part.id"
              >
                <template v-slot:header>
                  <!-- <p>
                    {{ part?.Cost || "no $" }}
                  </p> -->
                </template>
                <template v-slot:default>
                  <Stack>
                    <p>
                      {{ part?.Cost }}
                    </p>
                    <p class="w-1/3 max-h-64">{{ part.Notes }}</p>
                    <p class="w-1/3 max-h-64">{{ part.Type }}</p>
                    <img
                      v-if="part.Attachments"
                      :src="part.Attachments?.[0]?.url"
                      class="transition-all transform hover:scale-125"
                    />
                  </Stack>
                </template>

                <template v-slot:footer>
                  <div class="m-10">
                    <SVGButton class="bg-orange-300" @click="addToChecklist(part)"
                      >Add</SVGButton
                    >
                  </div>
                </template>
              </Card>
            </Grid>
          </div>
        </template>
        <template v-slot:right>
          <div class="w-auto h-screen overflow-auto text-ocean-500">
            <!-- Budget label -->
            <!-- <label v-show="range" class="text-lg lg:text-3xl">{{ budgetLabel }}</label> -->

            <Stack class="">
              <radial-progress-bar
                :diameter="250"
                :completed-steps="completedSteps"
                :total-steps="totalSteps"
              >
                <h2>{{ percentCompleted.toFixed() }}% Done</h2>
              </radial-progress-bar>
            </Stack>

            <Grid v-if="true" mode="photo">
              <div v-for="item in picks" :key="item.id">
                <p v-if="item?.[1]?.Name" class="text-tahiti-500">
                  <i v-show="item?.[1]?.Name" class="fa fa-check"></i> {{ item?.[0] }}
                </p>
                <p v-else-if="!item?.[1]?.Name" class="text-gray-300">
                  <i v-show="item?.[1]?.Name" class="fa fa-check"></i> {{ item?.[0] }}
                </p>
              </div>
            </Grid>
            <Stack>
              <!-- <h1 class="text-lg lg:text-3xl">Options:</h1> -->
              <Row v-if="true" class="gap-5 lg:gap-15">
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

              <!-- Budget Option -->
              <Stack>
                <button class="mb-4 text-lg text-purple-400 lg:text-3xl">
                  Change your Budget here!
                </button>
                <slider min="500" @range-changed="setRange"></slider>
                <!-- Weird this is staying constant, yet I can still set the range ref -->
                <p v-if="devmode">{{ range }}</p>
              </Stack>
            </Stack>
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

        <!-- Checklist -->

        <!-- <pre>{{ parts.map((b) => b?.Name) }}</pre> -->

        <!-- <BuildsGallery v-if="views.gallery.show" /> -->

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
      </Dashboard>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import { useRange, useBuilds } from "../hooks";
import { random } from "../helpers/generators.ts";
import { devmode } from "../helpers";
import PartCard from "../components/parts/PartCard.vue";
import { Button, Spinner, Brandon } from "../components/atoms";
import { Section, Card, SVGButton } from "../components/molecules";
import Image from "../components/atoms/Image.vue";
import BuildsGallery from "../components/builds/BuildsGallery.vue";
import { Stack, Grid, Row } from "../components/flex";
import Gradient from "../components/atoms/Gradient.vue";
import Slider from "../components/atoms/Slider.vue";
import RadialProgressBar from "vue3-radial-progress";
import { Dashboard } from "../components/templates";

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
      incomplete,
      partTypes,
      totalEntries,
      groupedParts,
      buildMode,
      clear,
    } = useBuilds();

    const { range } = useRange();

    return {
      builds,
      parts,
      build,
      loading,
      error,
      addPart,
      checklist,
      percentCompleted,
      incomplete,
      partTypes,
      totalEntries,
      groupedParts,
      buildMode,
      clear,

      range,

      totalEntries,
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
  },
  computed: {
    budgetLabel() {
      return `Your Budget: $${this.range?.value?.[0] || ""} -> ${
        this.range?.value?.[1] || ""
      } `;
    },
    picks() {
      console.log("picks", this.checklist);
      const result = new Map(Object.entries(this.checklist));
      return result;
    },
    remaining() {
      return; //this.checklist;
    },
  },
};
</script>

<!-- <Button
          class="shadow-md shadow-purple-400/50"
          v-if="false"
          @click="views.gallery.show = !views.gallery.show"
          >{{ views.gallery.show ? "Save Builds" : "See What others are building" }}</Button
        > -->
