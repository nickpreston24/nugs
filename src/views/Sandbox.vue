<template>
  <div v-if="devmode" class="sandbox gentle-flex bg-white dark:bg-gray-300">
    <h2>Api Call result:</h2>
    <p>{{ order }}</p>
    <Button @click="onSubmit">
      Get order.
    </Button>

    <!-- <gallery v-show="true"/> -->

    <!-- Props passing attempt 1 -->

    <div v-show="false" v-for="part in parts" v-bind:key="part.id">
      <h2>Cards Example</h2>
      <Card>
        <template v-slot:header>
          <h1>
            {{ part.Name }}
          </h1>
        </template>
        <template v-slot:default>
          <!-- <img src="https://picsum.photos/300" /> -->
          <img src="{{part.Attachments[0].url}}" alt="" />
          <!-- <p>{{ part.GelTest.replace("watch?v=", "embed/")
            .replace("t=","start=")
             }}</p> -->
          <!-- <Embed v-bind:url="part.GelTest" v-if="true" /> -->
          <p>{{ part.GelTest }}</p>
          <!-- <iframe width="640" height="480" src="part.GelTest"></iframe> -->
        </template>
        <template v-slot:footer>
          <!-- Toggle the remaining details like weight, url, etc -->
          <Button v-if="false">Show Details</Button>
        </template>
      </Card>
    </div>

    <tailwind-card v-show="false" />
    
    <label>Result</label>
    <span v-if="!!result">{{ result }}</span>
    <img
      v-else-if="!result"
      src="https://media.giphy.com/media/13gQDQyb4JIWic/giphy.gif"
    />
  </div>
</template>
<script>
import TailwindCard from "../components/examples/TailwindCard.vue";
import { base } from "../../api/airtable";
import Card from "../components/molecules/Card.vue";
import { devmode } from "../helpers/generators";
import Button from "../components/atoms/Button.vue";
import Gallery from '../components/examples/Gallery.vue';
export default {
  methods: {
    speak() {
      alert("clicky!");
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
      parts: [],
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
      result: [],
      devmode: devmode,
      order: { id: "empty" },
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