<template>
  <div>
    <div class="gentle-flex">
      <ul>
        <li v-for="(value, key, index) in build" :key="index">
          <!-- <label v-bind:[key]="N_A">{{ key }}: </label> -->
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
      <Button v-if="ready" v-on:click="addBuild">Add Build</Button>
      <Button @click="lorem" v-if="devmode">Lorem</Button>
      <br />
    </div>
  </div>
</template>
<script>
//import { create } from "../../../data/airtable-curl";
import { isEmpty, devmode } from "../../helpers/generators";
const initial = {
  Name: "",
};
export default {
  methods: {
    async addBuild() {
      create("Builds", [{ ...this.build, CreatedAt: Date.now() }]);
      this.clear();
    },
    clear() {
      this.build = initial;
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
      devmode: devmode,

      build: initial,
    };
  },
  mounted() {
    devmode && console.log(`build`, this.build);
  },
  computed: {
    ready() {
      if (!this) return false;
      return !isEmpty(this.build);
    },
  },
};
</script>
