<template>
  <div>
    <div class="gentle-flex">
      <ul>
        <li v-for="(value, key, index) in build" :key="index">
          <label v-bind:[key]="something">{{ key }}: </label>
          <input
            class="bullet-border"
            v-model="build[key]"
            type="text"
            v-bind:placeholder="key"
          />
        </li>
      </ul>

      <span v-if="devmode">{{ { ...build } }}</span>
      <label v-if="force > 0" v-bind="force">Force: {{ force }}</label>
      <label v-if="wound > 0" v-bind="wound">Wound: {{ wound }}</label>
      <button v-show="ready" v-on:click="addBuild">Add Build</button>
      <button @click="lorem" v-if="devmode">Lorem</button>
      <br />
    </div>
  </div>
</template>
<style scoped>
input {
  border: 2px solid #42b983;
  border-radius: 0% 50% 50% 0%;
  font-weight: inherit;
}

button {
  box-shadow: #aaa;
  color: #42b983;
  padding: 1rem;
  font-weight: 700;
  border: #42b983 1px solid;
}
</style>

<script>
import { createBuilds } from "../../../api/airtable";
import { hasEmptyValues, devmode } from "../../helpers/generators";
export default {
  methods: {
    async addBuild() {
      await createBuilds([{ ...this.build }]);
      this.clear();
    },
    clear() {
      this.build = {};
    },
    lorem() {
      let fake = {
        Name: `BFG MK ${Math.ceil(Math.random() * 150)}`,
      };
      this.build = fake;
    },
  },
  data() {
    return {
      devmode,

      build: {
        Name: "",
      },
    };
  },
  mounted() {
    devmode && console.log(`build`, this.build);
  },
  computed: {
    ready() {
      if (!this) return false;
      return !hasEmptyValues(this.build);
    },
  },
};
</script>
