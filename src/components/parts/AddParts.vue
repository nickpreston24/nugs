<template>
  <div>
    <div class="gentle-flex">
      <ul>
        <li v-for="(value, key, index) in part" :key="index">
          <!-- <label v-bind:[key]="something">{{ key }}: </label> -->
          <input
            class="bullet-border"
            v-model="part[key]"
            type="text"
            v-bind:placeholder="key"
          />
        </li>
      </ul>

      <span v-show="devmode">{{ { ...part } }}</span>
      <label v-if="force > 0" v-bind="force">Force: {{ force }}</label>
      <label v-if="wound > 0" v-bind="wound">Wound: {{ wound }}</label>
      <button v-show="ready" v-on:click="addPart">Add Part</button>
      <button @click="lorem" v-if="devmode">Lorem</button>
      <br />
    </div>
  </div>
</template>
<style scoped>
</style>

<script>
import { create } from "../../../api/airtable";
import {
  hasEmptyValues,
  devmode,
  randomInt,
  randomName,
  randomFloat,
  randomParagraph,
} from "../../helpers/generators";
export default {
  mounted() {
    console.log(`devmode?`, devmode);
  },
  methods: {
    async addPart() {
      await create("Parts", [{ ...this.part }]);
      this.clear();
    },
    clear() {
      this.part = {};
    },
    lorem() {
      let fake = {
        Name: randomName("ACME", "Upper Receiver", 10),
        Cost: randomFloat(3000),  
        Link: "example.com",
        Notes: randomParagraph(),
        Weight: randomFloat(7 * 16),
      };
      console.log(`fake`, fake)
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
  computed: {
    ready() {
      if (!this) return false;
      return !hasEmptyValues(this.part);
    },
  },
};
</script>
