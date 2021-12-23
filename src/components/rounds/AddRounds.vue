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
      <Button v-show="ready" v-on:click="addRound">Add Round</Button>
      <Button @click="lorem" v-if="devmode">Lorem</Button>
      <br />
    </div>
  </div>
</template>

<script>
import { config } from "../../config";
import { create } from "../../../api/airtable";
import { isEmpty, devmode } from "../../helpers/generators";
import Button from "../atoms/Button.vue";

export default {
  components: { Button },
  methods: {
    async addRound() {
      await create("Rounds", [
        {
          ...this.round,

          // Idea: there's gotta be a way to automate this:
          Grain: parseFloat(this.round.Grain),
          Diameter: parseFloat(this.round.Diameter),
          MuzzleVelocity: parseFloat(this.round.MuzzleVelocity),
        },
      ]);
      this.clear();
    },
    clear() {
      this.round = {};
    },
    lorem() {
      let fake = {
        Name: "Blammo Ammo " + Math.ceil(Math.random() * 150),
        Diameter: 0.3,
        Grain: 55 + Math.ceil(Math.random() * 80),
        MuzzleVelocity: 575 + Math.ceil(Math.random() * 2700),
        Found: "example.com",
      };
      this.round = fake;
    },
  },
  data() {
    return {
      config,
      devmode: devmode,

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
      return !isEmpty(this.round);
    },
    wound() {
      if (!this || !this.round || !this.round.Diameter) return 0;
      const { MuzzleVelocity, Grain, Diameter } = this.round;
      return +(
        (Math.pow(Grain, 2) * MuzzleVelocity) /
        (700000 * Math.pow(Diameter, 2))
      ).toFixed(2);
    },
    force() {
      if (!this || !this.round || !this.round.Diameter) return 0;
      const { MuzzleVelocity, Grain } = this.round;
      return +((Math.pow(MuzzleVelocity, 2) * Grain) / 450437).toFixed(2);
    },
  },
};
</script>
