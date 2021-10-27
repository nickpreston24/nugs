<template>
  <div v-if="devmode" class="sandbox gentle-flex bg-white dark:bg-gray-300">
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

    <div v-show="false" v-for="part in parts" v-bind:key="part.id">
      <Card>
        <template v-slot:header>
          <h1>
            {{ part.Name }}
          </h1>
          <a :href="part.Link" target="_blank" rel="noopener noreferrer">
            <h2 class="p-2 font-normal text-arctic-600" v-if="part?.Name">
              {{ part.Name }}
            </h2>
          </a>
        </template>
        <template v-slot:default>
          <!-- <img src="https://picsum.parts/300" /> -->
          <!-- <img src="{{part.Attachments[0].url}}" alt="" /> -->
          <!-- <p>{{ part.GelTest.replace("watch?v=", "embed/")
            .replace("t=","start=")
             }}</p> -->
          <!-- <Embed v-bind:url="part.GelTest" v-if="true" /> -->
          <a rel="nofollow" :href="part.GelTest" />
          <!-- <a rel="nofollow" :href="part.source.url">{{ part.source.name }}</a> -->
          <!-- <p>{{ part.GelTest }}</p> -->
          <!-- <iframe width="640" height="480" src="part.GelTest"></iframe> -->
        </template>
        <template v-slot:footer>
          <!-- Toggle the remaining details like weight, url, etc -->
          <!-- <Button v-if="true">Show Details</Button> -->
        </template>
      </Card>
    </div>

    <tailwind-card v-show="true" />
  </div>
</template>
<script>
import TailwindCard from "../components/examples/TailwindCard.vue";
import { base } from "../../api/airtable";
import Card from "../components/molecules/Card.vue";
import { devmode } from "../helpers/generators";
import Button from "../components/atoms/Button.vue";
import useTable from "../components/useTable";

export default {
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

      const res = await fetch("api/orders/1234?name=severus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ to: number, body: body }),
      });

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
    base("Rounds")
      .select({
        maxRecords: 10,
        view: "Grid view",
      })
      .eachPage(
        (records, fetchNextPage) => {
          devmode && console.log(`records`, records);
          let parts = records.map((r) => {
            const { id, fields } = r;
            return {
              id,
              ...fields,
            };
          });
          console.log(
            `parts.map(p=>p.Attachments)`,
            parts.map((p) => p.Attachments)
          );
          this.result = parts.map((p) => p.Attachments);
          this.parts = parts;
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  },
  components: { TailwindCard, Card, Button },
};
</script>
<style scoped>
.part-card {
  width: 300px;
  background: yellow;
}
</style>