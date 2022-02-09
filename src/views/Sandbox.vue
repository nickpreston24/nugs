<template>
  <dashboard class="text-tahiti-500 text-4xl">
    <!--  Header -->
    <template v-slot:header>
      <header-bar>
        <template v-slot:left>
          <Shadow class="m-2">
            <Row>
              <i class="fa fa-pause"></i>
              <h1>Your Logo HERE</h1>
            </Row>
          </Shadow>
        </template>
        <div class="bg-orange-500 h-32">
          <!-- <Button @click="toggle('borders')">Toggle Borders</Button> -->
          <!-- <pre class="text-tiny">{{ values }}</pre> -->
        </div>
        <template v-slot:right>
          <div class="bg-orange-500 h-32">
            <form class="login-form" @submit.prevent="loginUser">
              <div>
                <form-input
                  :vertical="false"
                  label="Email"
                  placeholder="Email"
                  v-model="values.email"
                  type="email"
                  name="email"
                  :error="errors.email"
                ></form-input>
                <form-input
                  :vertical="false"
                  label="Password"
                  v-model="values.password"
                  type="password"
                  name="password"
                  :error="errors.password"
                ></form-input>
                <button class="btn btn-primary btn-block">Login</button>
              </div>
            </form>
          </div>
        </template>
      </header-bar>
    </template>

    <template v-slot:top>
      <div class="bg-pink-500 h-64 w-full">
        <img
          class="pencil-effect"
          src="https://storage.googleapis.com/blog-images-backup/0*L21nPsxAgdm6M14u"
        />
      </div>
    </template>
    <template v-slot:left>
      <div class="bg-pink-500 h-64 w-128"></div>
    </template>
    <template v-slot:right>
      <div class="bg-pink-500 h-64 w-128">RIGHT</div>
    </template>
    <template v-slot:bottom>
      <div class="bg-pink-500 h-64 w-128">
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

    <div id="demo">
      <Button @click="show = !show">Toggle</Button>

      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <Button>Wiggle</Button>

    <transition name="wiggle spin-slow" class="wiggle spin-slow">
      <p>Wiggle</p>
    </transition>

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
import Border from "../components/atoms/Border.vue";
// import useTable from "../components/useTable";
import axios from "axios";
import HeaderBar from "../components/molecules/HeaderBar.vue";
import Dashboard from "../components/templates/Dashboard.vue";
import { Row, Stack } from "../components/flex";
import { Shadow } from "../components/atoms";
import FormInput from "../components/atoms/FormInput.vue";

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
  },
  setup() {
    // let { state } = useTable("Builds");
    // return {
    //   state,
    // };
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
      // console.log("value", value);
    },

    // onSubmit: async (e) => {
    //   await e.preventDefault();

    //   // const res = await fetch("api/orders/1234?name=severus", {
    //   //   method: "POST",
    //   //   headers: {
    //   //     "Content-Type": "application/json",
    //   //   },
    //   //   // body: JSON.stringify({ to: number, body: body }),
    //   // });

    //   // const data = await res.json();
    //   // console.log("data", data);
    //   // if (data.success) {
    //   //   alert("success!");
    //   // } else {
    //   //   console.log("failed");
    //   // }
    // },
  },
  data() {
    return {
      show: false,
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
      // sandboxViews: [],
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

.pencil-effect {
  background-size: cover;
  background-blend-mode: difference;
  background-position: calc(50% — 1px) calc(50% — 1px), calc(50% + 1px) calc(50% + 1px);
  filter: brightness(3) invert(1) grayscale(1);
}
</style>
