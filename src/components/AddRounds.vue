<template>
  <div>
    <!-- 
      https://css-tricks.com/centering-in-css/
      https://css-tricks.com/achieving-vertical-alignment-thanks-subgrid/ -->
    <div class="gentle-flex">
      <!-- DYNAMICALLY GENERATED FORM!!! -->

      <auto-form title="Pop!" v-bind:schema="round" />
      <reversed-list :list="list" />
      <ul v-show="false" class="gentle-flex">
        <li v-for="(value, key, index) in round" :key="index">
          <!-- <label v-bind:[key]="something">{{ key }}: </label> -->
          <input
            class="bullet-border"
            v-model="round[key]"
            type="text"
            v-bind:placeholder="key"
          />
        </li>
      </ul>

      <span v-if="devmode">{{ { ...round } }}</span>
      <label v-if="force > 0" v-bind="force">Force: {{ force }}</label>
      <label v-if="wound > 0" v-bind="wound">Wound: {{ wound }}</label>
      <button v-show="ready" v-on:click="addRound">Add Round</button>
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
import { config } from "../config";
import { createRounds } from "../../api/airtable";
import { hasEmptyValues, devmode } from "../helpers/generators";
import AutoForm from "./molecules/AutoForm.vue";
import ReversedList from "./examples/ReversedList.vue";
export default {
  components: { AutoForm, ReversedList },
  methods: {
    async addRound() {
      this.clear();
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
    clear() {
      this.round = {};
    },
    lorem() {
      let fake = {
        Name: "Blammo Ammo " + Math.ceil(Math.random() * 150),
        Diameter: 0.3,
        Grain: 115,
        MuzzleVelocity: 3000,
        Found: "example.com",
      };
      this.round = fake;
    },
  },
  data() {
    return {
      config,
      devmode,

      list: ["hi", "hi", "good morning!"],
      round: {
        Name: "",
        Diameter: null,
        Grain: null,
        MuzzleVelocity: null,
        Found: "",
      },
    };
  },
  mounted() {
    devmode && console.log(`round`, this.round);
  },
  computed: {
    ready() {
      if (!this) return false;
      return !hasEmptyValues(this.round);
    },
    wound() {
      if (!this || !this.round || !this.round.Diameter) return 0;
      const { MuzzleVelocity, Grain, Diameter } = this.round;
      return +(
        (Math.pow(Grain, 2) * MuzzleVelocity) /
        (700000 * Math.pow(Diameter, 2))
      ).toFixed(2);
    },
    // a computed getter
    force() {
      if (!this || !this.round || !this.round.Diameter) return 0;
      const { MuzzleVelocity, Grain } = this.round;
      return +((Math.pow(MuzzleVelocity, 2) * Grain) / 450437).toFixed(2);
    },
  },
};
</script>
