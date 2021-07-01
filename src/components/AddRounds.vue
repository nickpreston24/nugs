<template>
  <div>
    <h1>Add</h1>
    <!-- 
      https://css-tricks.com/centering-in-css/
      https://css-tricks.com/achieving-vertical-alignment-thanks-subgrid/ -->
    <div class="gentle-flex">
      <div>
        <input v-model="round.Name" type="text" />
        <label>Name</label>
      </div>
      <div>
        <input v-model="round.Grain" type="text" />
        <label>Grain</label>
      </div>
      <div>
        <input v-model="round['Muzzle Velocity']" type="text" />
        <label>Muzzle Velocity</label>
      </div>
      <div>
        <input v-model="round.Found" type="text" />
        <label>Found</label>
      </div>
      <div>
        <input v-model="round.Diameter" type="text" />
        <label>Diameter</label>
      </div>
      <div>
        <input v-model="round.Manufacturer" type="text" />
        <label>Manufacturer</label>
      </div>

      <span>{{ round }}</span>
      <button v-on:click="addRound">Add Round</button>

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
  background: #42b983;
  color: #eee;
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
export default {
  props: {},
  methods: {
    async addRound() {
      await createRounds([
        {
          ...this.round,

          // Idea: there's gotta be a way to automate this:
          Grain: parseFloat(this.round.Grain),
          Diameter: parseFloat(this.round.Diameter),
          "Muzzle Velocity": parseFloat(this.round["Muzzle Velocity"]),
        },
      ]);
    },
  },
  data() {
    return {
      config,
      round: {}, //form
    };
  },
};
</script>
