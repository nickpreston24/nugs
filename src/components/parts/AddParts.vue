<template>
  <div>
    <div class="gentle-flex">
      <ul v-show="true">
        <li class="p-1" v-for="(value, key, index) in part" :key="index">
          <!-- <label>{{ key }}:</label> -->
          <input
            class="bullet-border"
            type="text"
            v-bind:placeholder="key"
            @input="onChange"
          />
        </li>
      </ul>

      <span v-show="devmode">{{ { ...part } }}</span>
      <label v-if="force > 0" v-bind="force">Force: {{ force }}</label>
      <label v-if="wound > 0" v-bind="wound">Wound: {{ wound }}</label>
      <List>
        <Button v-show="ready" v-on:click="addPart">Add Part</Button>
        <Button @click="lorem" v-if="devmode">Lorem</Button>
        <Button @click="clear">X</Button>
      </List>
      <br />
    </div>
  </div>
</template>
<style scoped>
</style>

<script>
import { create, base } from "../../../api/airtable";
import { createState, useState } from "@hookstate/vue";
import { Part } from "../../helpers/yup";
import {
  devmode,
  randomName,
  randomFloat,
  randomParagraph,
  isEmpty,
} from "../../helpers/generators";
import Button from "../atoms/Button.vue";
import List from "../molecules/List.vue";

const initial = {
  Name: "",
  Cost: "",
  Link: "",
  Notes: "",
  Weight: "",
};
// const state = createState({
//   part: {
//     ...initial,
//   },
// });

const state = useState({ ...initial });

export default {
  components: {
    Button,
    List,
  },
  methods: {
    onChange(e) {
      const target = e.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.placeholder;
      // console.log(`target`, target);
      // console.log(`name`, name);
      // console.log(`e.target`, e.target);
      // console.log(`state[name]`, state[`${name}`].get()); // Trying to lookup by key and set that state
      // state[name].set(value);
      // state.merge((p) => ({
      //   name: value,
      // }));
      // console.log(`state`, state);
      console.log(`this.part`, this.part);
      this.part[name].set(value);
    },
    async addPart() {
      devmode && console.log(`this.part`, this.part);
      await create("Parts", [
        {
          ...this.part,
          Cost: parseFloat(this.part.Cost),
          Weight: parseFloat(this.part.Weight),
        },
      ]);
      this.clear();
    },
    clear() {
      console.log(`initial`, initial);
    },
    lorem() {
      let fake = {
        Name: randomName("ACME", "Upper Receiver", 10),
        Cost: randomFloat(3000),
        Link: "example.com",
        Notes: randomParagraph(),
        Weight: randomFloat(7 * 16),
      };
      devmode && console.log(`fake`, fake);
    },
  },
  data() {
    return {
      devmode: devmode,
      part: state,
    };
  },
  mounted() {
    // alert('ping')
    // console.log(`state`, state);
    // let test = useState(state.part)
    // console.log(`test`, test)
    // this.part  =
    // // this.part = useState( state.part)
    // this.part = useState(state);
    // console.log(`this.part`, this.part.Name);
    // this.part.Name.set("Nick");
    // this.part.set({});
    // this.part = useState({});
  },

  // mounted() {
  //   base("Parts")
  //     .select({
  //       maxRecords: 10,
  //       view: "Grid view",
  //     })
  //     .eachPage(
  //       (records, fetchNextPage) => {
  //         devmode && console.log(`records`, records);
  //         let parts = records.map((r) => {
  //           const { id, fields } = r;
  //           return {
  //             id,
  //             ...fields,
  //           };
  //         });
  //         console.log(`parts`, parts);
  //         // this.parts = useState(parts);
  //         // To fetch the next page of records, call `fetchNextPage`.
  //         // If there are more records, `page` will get called again.
  //         // If there are no more records, `done` will get called.
  //         fetchNextPage();
  //       },
  //       function done(err) {
  //         if (err) {
  //           console.error(err);
  //           return;
  //         }
  //       }
  //     );
  // },

  computed: {
    ready() {
      if (!this) return false;
      return !isEmpty(this.part);
    },
  },
};
</script>
