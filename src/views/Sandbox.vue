<template>
  <Page class="border-2 border-red">
    <!-- <div class="w-64 h-64 bg-yellow-500"></div> -->

    <!-- <template v-slot:header> -->
    <Stack class="bg-white-500 h-max">
      <Shadow type="inset"> Toggle Components </Shadow>

      <Border>
        <Row class="w-5/6 overflow-scroll">
          <Button
            theme="show[key] ? bg-ocean-500 hover:text-tahiti-400 : bg-red"
            v-for="(item, key) in show"
            :key="key"
            @click="show[key] = !show[key]"
          >
            {{ key }}
          </Button>

          <Button @click="toggle('borders')">Borders</Button>
        </Row>
      </Border>
    </Stack>
    <!-- </template> -->

    <Dashboard v-if="show.dashboard" class="text-4xl text-tahiti-500">
      <!--  Header -->
      <template v-slot:header>
        <div class="">
          <swiper
            class="border-2 border-red"
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="slide in slides" :key="slide" class="carousel-slider">
              <img :src="slide" :alt="slide" />
            </swiper-slide>
          </swiper>
        </div>

        <!-- <carousel>
            <slide v-for="slide in slides" :key="slide" class="carousel-slider">
              <img :src="slide" :alt="slide" />
            </slide>
          </carousel> -->
        <!-- <header-bar>
          <template v-slot:left>
            <Shadow v-if="show.logo" class="m-2">
              <Row>
                <i class="fa fa-pause"></i>
                <p>Your Logo HERE</p>
              </Row>
            </Shadow>
          </template>

          <Gradient :show="true">
            <img
              v-if="show.pencilImg"
              class="pencil-effect"
              src="https://storage.googleapis.com/blog-images-backup/0*L21nPsxAgdm6M14u"
            />
          </Gradient>
          <template v-slot:right> </template>
        </header-bar> -->
      </template>

      <template v-slot:top>
        <Grid mode="feed" v-if="show.svg">
          <!-- <Button type="button" class="bg-red-600 btn-primary" disabled>
              <svg class="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24">Processing</svg>
            </Button> -->

          <EightPointSixBlackoutIcon class="w-32 h-32" />
          <AwesomeIcon class="w-32 h-32" />
          <AwesomeThinkingIcon class="w-32 h-32" />
          <AwesomeSurprisedFaceIcon class="w-32 h-32" />
          <AwesomeConfusedIcon class="w-32 h-32" />
          <PistolIcon class="w-32 h-32" />
          <StatusIcon class="w-16 h-16" status="success" />
          <icon-base width="32" height="32" icon-name="write"><icon-write /></icon-base>
        </Grid>
      </template>
      <template v-slot:left>
        <!-- <h1>Flop:</h1>
        <Row>
          <div
            v-for="(card, key, index) in board.flop"
            id="index"
            class="w-32 h-32 border-2 border-black text-tiny bg-white-500"
          >
            <h3>{{ card.face }} of {{ card.suit }}</h3>
          </div>
        </Row> -->
        <!-- <div class="h-64 bg-transparent w-128">LEFT</div> -->
      </template>
      <template v-slot:right>
        <!-- <h2>Hand:</h2>
        <Row>
          <div
            v-for="(card, key, index) in board.hand"
            id="index"
            class="w-32 h-32 border-2 border-black bg-white-500"
          >
            <h3>{{ card.face }} of {{ card.suit }}</h3>
          </div>
        </Row> -->
        <!-- <div class="h-64 bg-transparent w-128">RIGHT</div> -->
      </template>
      <template v-slot:bottom>
        <Grid mode="photo" v-if="show.photo">
          <card>
            <img
              src="https://images.unsplash.com/photo-1641236247214-2d5a33c6d391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            />
          </card>
          <card>
            <img
              src="https://images.unsplash.com/photo-1641236247219-57c87fe8713d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </card>

          <card>
            <img
              src="https://images.unsplash.com/photo-1551972251-12070d63502a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            />
          </card>
          <card>
            <img
              src="https://images.unsplash.com/photo-1641236247219-57c87fe8713d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </card>
          <card>
            <img
              src="https://images.unsplash.com/photo-1641490237771-a5ed5cbb1011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </card>
          <card>
            <img
              src="https://images.unsplash.com/photo-1634828535553-70267ceac5c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            />
          </card>
          <card>
            <img
              src="https://images.unsplash.com/photo-1513714920387-b00f52df9e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            />
          </card>
          <card>
            <img
              src="https://media.istockphoto.com/photos/cat-snow-leopard-irbis-uncia-uncia-picture-id1306144389"
            />
          </card>
          <card>
            <img
              src="https://images.unsplash.com/photo-1641236247214-2d5a33c6d391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            />
          </card>
          <card>
            <img
              src="https://images.unsplash.com/photo-1513714920387-b00f52df9e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            />
          </card>
          <card>
            <img
              src="https://images.unsplash.com/photo-1551972251-12070d63502a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            />
          </card>
          <card>
            <img
              src="https://images.unsplash.com/photo-1641490237771-a5ed5cbb1011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </card>
          <card>
            <img
              src="https://images.unsplash.com/photo-1641490237771-a5ed5cbb1011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </card>
        </Grid>

        <!-- <div v-else-if="!show.photo" class="w-full h-64 bg-transparent">bottom</div> -->
      </template>
    </Dashboard>

    <div v-if="false" class="z-0 bg-white sandbox gentle-flex dark:bg-gray-300">
      <div class="container" v-if="false"></div>

      <div
        v-if="false"
        class="w-full max-w-sm p-4 mx-auto border border-blue-300 rounded-md shadow"
      >
        <div v-if="false" class="flex space-x-4">
          <div class="w-12 h-12 bg-blue-400 rounded-full"></div>
          <div class="flex-1 py-1 space-y-4">
            <div class="w-3/4 h-4 bg-blue-400 rounded"></div>
            <div class="space-y-2">
              <div class="h-4 bg-blue-400 rounded"></div>
              <div class="w-5/6 h-4 bg-blue-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <span class="flex w-3 h-3">
        <span
          class="absolute inline-flex w-full h-full bg-purple-400 rounded-full opacity-75 animate-ping"
        ></span>
        <span class="relative inline-flex w-3 h-3 bg-purple-500 rounded-full"></span>
      </span>

      <gallery v-if="false" />

      <tailwind-card v-if="true" />
    </div>
  </Page>
</template>
<script>
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import TailwindCard from "../components/examples/TailwindCard.vue";
import HeaderBar from "../components/molecules/HeaderBar.vue";
import Dashboard from "../components/templates/Dashboard.vue";
import FormInput from "../components/atoms/FormInput.vue";
import { Row, Stack, Grid } from "../components/flex";
import {
  Shadow,
  IconBase,
  Button,
  Border,
  Settings,
  Gradient,
} from "../components/atoms";
import {
  AwesomeSurprisedFaceIcon,
  AwesomeConfusedIcon,
  AwesomeIcon,
  EightPointSixBlackoutIcon,
  IconWrite,
  StatusIcon,
  AwesomeThinkingIcon,
  PistolIcon,
} from "../assets/icons";
import { Card } from "../components/molecules";
import { Carousel, Slide, SwiperExample } from "../components/molecules/carousel";
import { Log, devmode } from "../helpers";
import { random } from "../helpers/generators.ts";

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function (from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

export default {
  setup() {
    const onSwiper = (swiper) => {
      console.log("swiper :>> ", swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    useSwiper,
    TailwindCard,
    Button,
    Stack,
    Row,
    HeaderBar,
    Border,
    Dashboard,
    Shadow,
    FormInput,
    Settings,
    IconBase,
    Card,
    Grid,
    IconWrite,
    AwesomeIcon,
    StatusIcon,
    AwesomeSurprisedFaceIcon,
    AwesomeConfusedIcon,
    EightPointSixBlackoutIcon,
    AwesomeThinkingIcon,
    PistolIcon,
    Gradient,
    Carousel,
    Slide,
    SwiperExample,
  },
  created() {
    this.toggle("borders");
  },
  methods: {
    toggle(setting = "") {
      this.$store.dispatch("toggleSetting", { name: setting });
    },
    handleSubmit() {
      alert(JSON.stringify(this.user));
    },

    onNext() {
      let { searchTable } = useTable();
      let parts = searchTable("Parts");
      Log(parts);
    },

    onInputChanged(e) {
      Log("e", e);
    },

    svgLoadError(error) {
      Log("error", error);
    },

    deal() {},
  },
  data() {
    return {
      devmode: devmode,
      info: { db: null, result: null, message: "" },

      order: { id: "empty" },
      pagedData: {},

      values: {
        password: "",
        email: "",
      },

      errors: {
        password: "",
        email: "",
      },
      show: {
        pencilImg: true,
        photo: true,
        svg: true,
        logo: true,
        dashboard: true,
      },

      // svg: "awesome-face.svg",

      deck: [{ face: null, suit: null }],
      poker: {
        faces: ["A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2],
        suits: ["Hearts", "Spades", "Diamonds", "Clubs"],
      },

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

  computed: {
    board() {
      const deck = this.deck;

      const { faces, suits } = this.poker;

      for (let x = 0; x < faces.length; x++) {
        for (let y = 0; y < suits.length; y++) {
          deck.push({ face: faces[x], suit: suits[y] });
        }
      }

      Log(deck);

      for (let i = 0; i < 11; i++) {
        random.Shuffle(deck);
      }

      let flop = deck.splice(0, 3);
      let hand = deck.splice(0, 2);
      let opponentHand = deck.splice(0, 2);

      return {
        flop,
        hand,
      };
    },
  },

  mounted() {
    // do something here
  },
};
</script>
<style scoped>
.sandbox {
  background-image: url(../assets/img/triangles.svg);
}

/* https://blog.logrocket.com/advanced-effects-with-css-background-blend-modes-4b750198522a/ */
.pencil-effect {
  background-size: cover;
  background-blend-mode: difference;
  background-position: calc(50% — 1px) calc(50% — 1px), calc(50% + 1px) calc(50% + 1px);
  filter: brightness(3) invert(1) grayscale(1);
}
</style>

<!-- <h1>contents</h1> -->
<!-- <Carousel3d class="border-2">
            <h2>contents show here?</h2>
            <slide :index="0"> Slide 1 Content </slide>
            <slide :index="1"> Slide 2 Content </slide>
          </Carousel3d> -->

<!-- <carousel-3d>
            <slide v-for="(slide, i) in slides" :index="i" :key="i">
              <img src="https://placehold.it/360x270" />
            </slide>
          </carousel-3d> -->
<!-- <div class="w-auto overflow-auto border-2 h-80"></div> -->
<!-- <Carousel>
            <div
              class="w-32 h-32 border-2 text-tahiti-400 bg-ocean-700 card"
              v-for="card in cards"
              :key="card"
            >
              <div class="card">
                {{ card }}
              </div>
            </div>
          </Carousel> -->
