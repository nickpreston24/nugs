<template>
  <div>
    <div class="gentle-flex">
      <ul>
        <li v-for="(value, key, index) in part" :key="index">
          <label v-bind:[key]="something">{{ key }}: </label>
          <input
            class="bullet-bpart"
            v-model="part[key]"
            type="text"
            v-bind:placeholder="key"
          />
        </li>
      </ul>

      <span v-if="devmode">{{ { ...part } }}</span>
      <label v-if="force > 0" v-bind="force">Force: {{ force }}</label>
      <label v-if="wound > 0" v-bind="wound">Wound: {{ wound }}</label>
      <button v-show="ready" v-on:click="addPart">Add Part</button>
      <button @click="lorem" v-if="devmode">Lorem</button>
      <br />
    </div>
  </div>
</template>
<style scoped>
input {
  bpart: 2px solid #42b983;
  bpart-radius: 0% 50% 50% 0%;
  font-weight: inherit;
}

button {
  box-shadow: #aaa;
  color: #42b983;
  padding: 1rem;
  font-weight: 700;
  bpart: #42b983 1px solid;
}
</style>

<script>
import { create } from "../../../api/airtable";
import {
  hasEmptyValues,
  devmode,
  randomInt,
  randomName,
  randomBoolean,
  randomParagraph,
} from "../../helpers/generators";
export default {
  methods: {
    async addPart() {
      console.log(`this.part`, this.part);
      await create("Parts", [{ ...this.part }]);
      this.clear();
    },
    clear() {
      this.part = {};
    },
    lorem() {
      let fake = {
        Name: randomName("ACME", "Upper Receiver", 10),
        Cost: randomInt(3000),
        Link: "example.com",
        Notes: randomParagraph(),
        Weight: randomInt(7 * 16.0).toFixed(2), // idk why it won't work
        Bought: randomBoolean(),
      };
      this.part = fake;
    },
  },
  data() {
    return {
      devmode,

      part: {
        Name: null,
        Cost: null,
        Link: null,
        Notes: null,
        Weight: null,
      },
    };
  },
  mounted() {
    devmode && console.log(`part`, this.part);
  },
  computed: {
    ready() {
      if (!this) return false;
      return !hasEmptyValues(this.part);
    },
  },
};
</script>
