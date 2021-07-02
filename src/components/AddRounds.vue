<template>
  <div>
    <!-- 
      https://css-tricks.com/centering-in-css/
      https://css-tricks.com/achieving-vertical-alignment-thanks-subgrid/ -->
    <div class="gentle-flex">
      <!-- DYNAMICALLY GENERATED FORM!!! -->
      <ul class="gentle-flex">
        <li v-for="(value, key, index) in round" :key="index">
          <!-- <label v-bind:[key]="something">{{ key }}: </label> -->
          <input v-model="round[key]" type="text" v-bind:placeholder="key" />
        </li>
      </ul>

      <span v-if="devmode">{{ { ...round, force, wound } }}</span>

      <button v-show="ready" v-on:click="addRound">Add Round</button>

      <br />
    </div>
  </div>
</template>
<style scoped>
label {
  padding: 1rem;
  font-weight: 500;
}

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
}
</style>

<script>
import { config } from "../config";
import { createRounds } from "../../api/airtable";
import { hasEmptyValues, devmode } from "../helpers/generators";
export default {
  watch: {},
  methods: {
    async addRound() {
      await createRounds([
        {
          ...this.round,

          // Idea: there's gotta be a way to automate this:
          Grain: parseFloat(this.round.Grain),
          Diameter: parseFloat(this.round.Diameter),
          MuzzleVelocity: parseFloat(this.round.MuzzleVelocity),
        },
      ]);
    },
  },
  data() {
    return {
      config,
      devmode,
      round: {
        Name: "",
        Diameter: 0.224,
        Grain: 70,
        MuzzleVelocity: 2975,
      },
    };
  },
  mounted() {
    console.log(`round`, this.round);
  },
  computed: {
    ready() {
      if (!this) return false;
      return !hasEmptyValues(this.round);
    },
    // a computed getter
    force() {
      if (!this || !this.round) return 0;

      // console.log(`this`, this);
      // let { MuzzleVelocity: mv, Diameter: d } = this.round;
      // console.log(`rpops`, mv, d);
      // console.log(`n`, typeof this.round);
      return 1;
    },
  },
};
</script>