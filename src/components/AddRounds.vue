<template>
  <div>
    <h1>Add Rounds</h1>

    <div action="" style="display:flex align:center">
      <ul>
        <label>Name</label>
        <br /><input v-model="round.Name" type="text" />
        <br /><label>Grain</label>
        <br /><input v-model="round.Grain" type="text" />
        <br /><label>Muzzle Velocity</label>
        <br /><input v-model="round['Muzzle Velocity']" type="text" />
        <br /><label>Found</label>
        <br /><input v-model="Found" type="text" />
        <br /><label>Diameter</label>
        <br /><input v-model="Diameter" type="text" />
        <br /><label>Manufacturer</label>
        <br /><input v-model="Manufacturer" type="text" />
        <br />
        <span>{{ round }}</span>
        <br />
        <button v-on:click="AddRounds">Submit</button>
      </ul>
    </div>

    <!-- <div v-bind="record">
      <ul>
        <li>{{ Name }}</li>
        <li>{{ Id }}</li>
      </ul>
    </div> -->
  </div>
</template>
<style scoped>
label {
  color: #a45;
}
input {
  background: #a45;
  color: limegreen;
}
button {
  background: steelblue;
  box-shadow: turquoise;
}
</style>

<script>
import { config } from "../config";
import { createOrder, createRound, Round } from "../../api/airtable";
export default {
  methods: {
    async AddRounds() {
      console.log(`this.round`, this.round);
      console.log(`this.round.Name`, this.round.Name)
      console.log(`this.round (keys)`, Object.keys( this.round))
      // alert("added");
      await createRound([{ Name: "Test ammo" }]);
    },
  },
  data() {
    return {
      customerName: "",
      config,
      // round: Round = {},
      round: {}
    };
  },
  async mounted() {
    // let orders = [
    //   {
    //     fields: {
    //       Cart: ["recFQ63Pgm7IbQQEz"],
    //       "Buy?": true,
    //       "Count Desired": 1,
    //     },
    //   },
    //   {
    //     fields: {
    //       Cart: ["recWCRM1cS8VZxrv3"],
    //       "Count Desired": 1,
    //     },
    //   },
    // ];
    // await createOrder(orders);
  },
};
</script>
