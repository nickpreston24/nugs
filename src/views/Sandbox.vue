<template>
  <div v-if="devmode" class="sandbox gentle-flex">
    <!-- Props passing attempt 1 -->
    <div v-for="part in parts" v-bind:key="part.id">
      <card>
        <template v-slot:header>
          <h1>
            {{ part.Name }}
          </h1>
        </template>
        <template v-slot:default>
          <!-- <img src="https://picsum.photos/300" /> -->
          <img src="{{part.Attachments[0].url}}" alt="" />
        </template>
        <template v-slot:footer>
          <!-- Toggle the remaining detils like weight, url, etc -->
          <button>Show Details</button>
        </template>
      </card>
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
export default {
  data() {
    return {
      parts: [],
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
      result: [],
    };
  },
  mounted() {
    base("Parts")
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
  components: { TailwindCard, Card },
};
</script>
<style scoped>
.part-card {
  width: 300px;
  background: yellow;
}
</style>