<template>
  <div>
    <h1 class="text-3xl text-ocean-green-600">Parts Saved</h1>
    <ul
      @change="onChange(part)"
      v-for="(part, idx) in parts"
      :key="part.id"
      class="gentle-flex"
      @click="onChange(part)"
    >
      <Card @change="onChange" class="hover:text-red">
        <template v-slot:header>
          <h1>
            {{ part.Name }}
          </h1>
        </template>
        <template v-slot:default>
          <!-- <p>{{ part.GelTest }}</p> -->
          <!-- <p>{{ part.Notes }}</p> -->
        </template>
        <template v-slot:footer>
          <list class="flex-col">
            <span v-if="part.Weight > 0">{{ part.Weight }} oz.</span>
            <Button :key="idx" class="text-xs" @click="remove">X</Button>
          </list>
        </template>
      </Card>
    </ul>
  </div>
</template>
<script>
import { base } from "../../../api/airtable";
import { devmode } from "../../helpers/generators";
import Button from "../atoms/Button.vue";
import Card from "../molecules/Card.vue";
import List from "../molecules/List.vue";
export default {
  methods: {
    onChange(e) {
      // console.log(`e.target`, e.target);
      console.log(`e`, e)
    },
    handleSelection(item) {
      console.log(`item`, item);
    },
    remove(e) {
      const target = e.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      // const name = target.placeholder;
      console.log(`e`, e);
    },
  },
  data() {
    return {
      parts: [],
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
          console.log(`parts`, parts);
          this.parts = parts;
          // this.parts = useState(parts);
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
  components: {
    Card,
    List,
    Button, // Button,
  },
};
</script>