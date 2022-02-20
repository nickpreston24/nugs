<template>
  <Page class="border-red border-2">
    <!-- <div class="bg-yellow-500 h-64 w-64"></div> -->

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

    <Dashboard v-if="show.dashboard" class="text-tahiti-500 text-4xl">
      <!--  Header -->
      <template v-slot:header>
        <header-bar>
          <template v-slot:left>
            <Shadow v-if="show.logo" class="m-2">
              <Row>
                <i class="fa fa-pause"></i>
                <p>Your Logo HERE</p>
              </Row>
            </Shadow>
          </template>

          <img
            v-if="show.pencilImg"
            class="pencil-effect"
            src="https://storage.googleapis.com/blog-images-backup/0*L21nPsxAgdm6M14u"
          />

          <template v-slot:right> </template>
        </header-bar>
      </template>

      <template v-slot:top>
        <Grid mode="feed" v-if="show.svg">
          <!-- <Button type="button" class="btn-primary bg-red-600" disabled>
              <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">Processing</svg>
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
        <h1>Flop:</h1>
        <Row>
          <div
            v-for="(card, key, index) in board.flop"
            id="index"
            class="text-tiny bg-white-500 border-black border-2 h-32 w-32"
          >
            <h3>{{ card.face }} of {{ card.suit }}</h3>
          </div>
        </Row>
        <!-- <div class="bg-transparent h-64 w-128">LEFT</div> -->
      </template>
      <template v-slot:right>
        <!-- <h2>Hand:</h2>
        <Row>
          <div
            v-for="(card, key, index) in board.hand"
            id="index"
            class="bg-white-500 border-black border-2 h-32 w-32"
          >
            <h3>{{ card.face }} of {{ card.suit }}</h3>
          </div>
        </Row> -->
        <!-- <div class="bg-transparent h-64 w-128">RIGHT</div> -->
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

        <!-- <div v-else-if="!show.photo" class="bg-transparent h-64 w-full">bottom</div> -->
      </template>
    </Dashboard>

    <div v-if="false" class="sandbox gentle-flex bg-white dark:bg-gray-300 z-0">
      <div class="container" v-if="false"></div>

      <div
        v-if="false"
        class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
      >
        <div v-if="false" class="flex space-x-4">
          <div class="rounded-full bg-blue-400 h-12 w-12"></div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-blue-400 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-blue-400 rounded"></div>
              <div class="h-4 bg-blue-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>

      <span class="flex h-3 w-3">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"
        ></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
      </span>

      <gallery v-if="false" />

      <tailwind-card v-if="true" />
    </div>
  </Page>
</template>
<script>
import TailwindCard from "../components/examples/TailwindCard.vue";
import HeaderBar from "../components/molecules/HeaderBar.vue";
import Dashboard from "../components/templates/Dashboard.vue";
import FormInput from "../components/atoms/FormInput.vue";
import { Row, Stack, Grid } from "../components/flex";
import { Shadow, IconBase, Button, Border, Settings } from "../components/atoms";
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
import { Log, devmode } from "../helpers";
import { random } from "../helpers/generators.ts";

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function (from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

export default {
  components: {
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
