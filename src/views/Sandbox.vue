<template>
  <dashboard class="text-tahiti-500 text-4xl">
    <!--  Header -->
    <template v-slot:header>
      <header-bar>
        <template v-slot:left>
          <!-- <LogoSVG /> -->

          <!-- <pre class="text-tiny">{{ show }}</pre> -->
          <!-- <Shadow v-if="show.logo" class="m-2">
            <Row>
              <i class="fa fa-pause"></i>
              <p>Your Logo HERE</p>
            </Row>
          </Shadow> -->
        </template>
        <Stack class="bg-white-500 h-max">
          <Shadow type="inset" class="text-orange-300">
            Toggle Sandbox Components
          </Shadow>

          <button @click="toggle('borders')">Toggle Borders</button>
          <!-- <pre class="text-tiny">{{ values }}</pre> -->
        </Stack>
        <template v-slot:right>
          <Stack class="bg-orange-500">
            <Shadow type="pop" class="text-white">Hello There!</Shadow>
            <!-- <Settings :options="show" /> -->
          </Stack>
        </template>
      </header-bar>
    </template>

    <template v-slot:top>
      <div class="bg-pink-500 h-64 w-full">
        <img
          v-if="show.pencilImg"
          class="pencil-effect"
          src="https://storage.googleapis.com/blog-images-backup/0*L21nPsxAgdm6M14u"
        />
        <p v-else>TOP</p>
      </div>
    </template>
    <template v-slot:left>
      <div class="bg-pink-500 h-64 w-128">LEFT</div>
    </template>
    <template v-slot:right>
      <div class="bg-pink-500 h-64 w-128">
        <!-- <Settings :options="show" /> -->
        RIGHT
      </div>
    </template>
    <template v-slot:bottom>
      <div v-if="show.grid" class="bg-pink-500 h-64 w-128">
        <Grid class="w-full">
          <Border class="bg-ocean-500 h-32 w-32"></Border>
          <Border class="bg-ocean-500 h-32 w-32"></Border>
          <Border class="bg-ocean-500 h-32 w-32"></Border>
          <Border class="bg-ocean-500 h-32 w-32"></Border>
          <Border class="bg-ocean-500 h-32 w-32"></Border>
        </Grid>
      </div>
    </template>
  </dashboard>

  <div v-if="false" class="sandbox gentle-flex bg-white dark:bg-gray-300 z-0">
    <div class="container" v-if="false"></div>

    <Button type="button" class="bg-red-600" disabled>
      <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
        <bear />
      </svg>
      Processing
    </Button>

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

    <gallery v-if="true" />

    <tailwind-card v-if="true" />

    <footer></footer>
  </div>
</template>
<script>
import TailwindCard from "../components/examples/TailwindCard.vue";
import { devmode } from "../helpers/generators";
import Button from "../components/atoms/Button.vue";
import Settings from "../components/atoms/Settings.vue";
import Border from "../components/atoms/Border.vue";
// import useTable from "../components/useTable";
import axios from "axios";
import HeaderBar from "../components/molecules/HeaderBar.vue";
import Dashboard from "../components/templates/Dashboard.vue";
import { Row, Stack } from "../components/flex";
import { Shadow } from "../components/atoms";
import FormInput from "../components/atoms/FormInput.vue";
// import { curry } from "../helpers/fn.js";

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
      console.log(parts);
    },

    onInputChanged(e) {
      console.log("e", e);
    },
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
        pencilImg: false,
        grid: false,
        svgs: false,
        logo: false,
      },
    };
  },

  mounted() {
    // do something here
  },
};
</script>
<style scoped>
.sandbox {
  background-image: url(../assets/icons/svgs/triangles.svg);
}

/* https://blog.logrocket.com/advanced-effects-with-css-background-blend-modes-4b750198522a/ */
.pencil-effect {
  background-size: cover;
  background-blend-mode: difference;
  background-position: calc(50% — 1px) calc(50% — 1px), calc(50% + 1px) calc(50% + 1px);
  filter: brightness(3) invert(1) grayscale(1);
}
</style>
