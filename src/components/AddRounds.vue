<template>
  <div>
    <h1>Add New Rounds</h1>
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
      <!-- <br />
      <button @click="addBuild">+ Build</button> -->
    </div>
    <br />
    <button v-on:click="addRound">[+] Round</button>
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
import { createOrders, createRounds, createBuilds } from "../../api/airtable";
export default {
  props: {},
  methods: {
    async addBuild() {
      await createBuilds(this.builds);
    },
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
      round: {},
      builds: [
        {
          Name: "Scarecrow MK I",
          Reasoning:
            "For comparison. All custom parts and DIY workmanship.  Each Minor, unregulated Part can wait according to priority.  Cost estimate is VERY W.I.P.",
          "Parts Included": [
            "rec7rbeflVZeUBeni",
            "recpUmGztuIUZwr5L",
            "recFmNKALgjyVoh1F",
            "recKHH1q1KbQzngYt",
            "recev397VEIbcof9N",
            "recOkTQ8jR5Yo7PMA",
            "reckWJIdETh3fsEUS",
            "recBCnARpgnCj0rYu",
            "recUWLNdhWaNWdrmx",
            "recRoodpz9x8Cl9vz",
            "recAIjKjympEEN7Y9",
            "rec3iyzJli7Q3a063",
          ],
          Caliber: ["5.56 NATO"],
          Users: ["Nick"],
          Status: ["Complete"],
          "Orders 2": ["recTMlhhcQCI0Y5hS"],
        },
        {
          Name: "Virtus Ghost",
          "Parts Included": [
            "recXx2gFplVhrki1g",
            "recpUmGztuIUZwr5L",
            "recn1182VLloKBAHD",
            "recFmNKALgjyVoh1F",
            "rec7rbeflVZeUBeni",
          ],
        },
      ],
      orders: [
        {
          fields: {
            Cart: ["recFQ63Pgm7IbQQEz"],
            "Buy?": true,
            "Count Desired": 1,
          },
        },
        {
          fields: {
            Cart: ["recWCRM1cS8VZxrv3"],
            "Count Desired": 1,
          },
        },
      ],
    };
  },
  async mounted() {
    console.log(`orders`, this.orders);
  },
};
</script>
