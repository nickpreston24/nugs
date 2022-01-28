<template>
  <!-- <div class="z-40">
    <rect x="100" class="bg-ocean-500" width="100" height="100">5</rect>
  </div>
  <div class="z-30">
    <rect x="100" class="bg-ocean-500" width="100" height="100">4</rect>
  </div>
  <div class="z-20">
    <rect x="100" class="bg-ocean-500" width="100" height="100">3</rect>
  </div>
  <div class="z-10">
    <rect x="100" class="bg-ocean-500" width="100" height="100">2</rect>
  </div>
  <div class="z-0">
    <rect x="100" class="bg-ocean-500" width="100" height="100">1</rect>
  </div> -->

  <div v-if="devmode" class="sandbox gentle-flex bg-white dark:bg-gray-300 z-0">
    <div class="container" v-show="false">
      <form @submit.prevent="handleSubmit">
        <div
          class="form-group form-check"
          v-for="item in Items"
          v-bind:key="item.id"
        >
          <label class="form-check-label" :for="item.id">{{ item.name }}</label>
          <input
            type="checkbox"
            :id="item.name"
            :value="item.name"
            @click="item.show = !item.show"
          />
        </div>

        <div class="form-group">
          {{ sandboxViews }}
        </div>

        <div class="form-group">
          <Button class="btn btn-primary">Submit</Button>
        </div>
      </form>
    </div>

    <!-- <div id="demo">
      <Button @click="show = !show">Toggle</Button>

      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <Button>Wiggle</Button> -->
    <!-- <transition name="wiggle spin-slow" class="wiggle spin-slow">
      <p>Wiggle</p>
    </transition> -->

    <!-- <bear-svg/> -->
    <!-- <c-accordion :allow-toggle="true">
      <c-accordion-item>
        <c-accordion-header>
          <c-box flex="1" text-align="left"> Section 1 title </c-box>
          <c-accordion-icon />
        </c-accordion-header>
        <c-accordion-panel pb="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </c-accordion-panel>
      </c-accordion-item>
      <c-accordion-item>
        <c-accordion-header>
          <c-box flex="1" text-align="left"> Section 2 title </c-box>
          <c-accordion-icon />
        </c-accordion-header>
        <c-accordion-panel pb="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </c-accordion-panel>
      </c-accordion-item>
    </c-accordion> -->
    <!-- <Button type="button" class="bg-red-600" disabled>
      <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
        <bear />
      </svg>
      Processing
    </button> -->

    <!-- <div
      class="
        border border-blue-300
        shadow
        rounded-md
        p-4
        max-w-sm
        w-full
        mx-auto
      "
    >
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-blue-400 h-12 w-12"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-blue-400 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-blue-400 rounded"></div>
            <div class="h-4 bg-blue-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <span class="flex h-3 w-3">
      <span
        class="
          animate-ping
          absolute
          inline-flex
          h-full
          w-full
          rounded-full
          bg-purple-400
          opacity-75
        "
      ></span>
      <span
        class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"
      ></span>
    </span> -->

    <!-- <gallery v-show="true"/> -->

    <!-- Props passing attempt 1 -->
    <label for="">
      result:
      <i>{{ info }}</i>
    </label>
    <tailwind-card v-show="true" />
    <footer>
      <label>
        result:
        <i>{{ info }}</i>
      </label>
      <h3>
        <a :href="info.url" target="_blank">Api Call</a>
      </h3>

        Powered by {{ info.db }} <br />
      Mode: {{ !devmode ? "Production" : "Dev" }}
    
    </footer>
  </div>

  <!-- <TriangleSVG class="bg-left-top" /> -->
</template>
<script>
import TailwindCard from "../components/examples/TailwindCard.vue";
import { devmode } from "../helpers/generators";
import Button from "../components/atoms/Button.vue";
import useTable from "../components/useTable";
import axios from 'axios'

export default {
  components: {
    TailwindCard,
    Button,
  },
  setup() {
    let { state } = useTable("Builds");
    return {
      state,
    };
  },
  methods: {
    handleSubmit() {
      alert(JSON.stringify(this.user));
    },

    onNext() {
      let { searchPagified } = useTable();
      let parts = searchPagified();
      console.log(parts);
    },

    onSubmit: async (e) => {
      await e.preventDefault();

      // const res = await fetch("api/orders/1234?name=severus", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   // body: JSON.stringify({ to: number, body: body }),
      // });

      const data = await res.json();
      console.log("data", data);
      if (data.success) {
        alert("success!");
      } else {
        console.log("failed");
      }
    },
  },
  data() {
    return {
      show: false,
      devmode: devmode,
      info: { db: null, result: null, message: "" },

      order: { id: "empty" },
      pagedData: {},

      Items: [
        {
          name: "Tailwind",
          show: false,
        },
        {
          name: "Orange",
          show: false,
        },
        {
          name: "Mango",
          show: false,
        },
        {
          name: "Cherry",
          show: false,
        },
      ],
      sandboxViews: [],
    };
  },
  computed() {
    return {
      records() {
        console.log(this.state.records);
        return this.state.records;
        // .filter((p) => p?.Attachments)
        // .map((p) => {
        //   return { ...p, url: p?.Attachments ? [0].url : "" };
        // });
      },
    };
  },
  mounted() {
    // let self = this;
    // let info = self.info;

    // devmode && console.log("import.meta.env :>> ", import.meta.env);
    // let uri = import.meta.env?.VITE_VERCEL_URI || "http://localhost:";
    // let port = import.meta.env.VITE_PORT;

    // const url = devmode
    //   ? `http://localhost:${"3001"}/api/nugs/1`
    //   : `${uri}${port}/api/nugs/1`;
    // info.url = url;

    // // update the render of info for dev only
    // if (devmode) {
    //   info.db = import.meta.env.VITE_VERCEL_USER;
    //   info.message = "fetching nugs...";
    //   info.uri = uri;
    //   info.port = port;
    // }

    // info.devmode = devmode;

    // axios
    //   .get(url)
    //   .then((response) => {
    //     info.result = response.data;
    //   })
    //   .catch((err) => {
    //     if (devmode) info.message = err;
    //     console.log("err :>> ", err);
    //   });
  },
};
</script>
<style scoped>
.part-card {
  width: 300px;
  background: yellow;
}
.sandbox {
  background-image: url(../assets/svgs/triangles.svg);
}
</style>