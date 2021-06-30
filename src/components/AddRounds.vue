<template>
  <div>
    <h1>Add an Order</h1>

    <div v-bind="record">
      <ul>
        <li>{{ Name }}</li>
        <li>{{ Id }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { config } from "../config";
import { createOrder } from "../../api/airtable";
export default {
  data() {
    return {
      customerName: "",
      config,
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
