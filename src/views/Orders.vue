<template>
  <div class="orders">
    <Button @click="show = !show">{{
      !show ? "Add Orders" : "View Orders"
    }}</Button>

    <OrdersGallery v-show="!show" />

    <!-- <iframe
      v-if="show"
      class="airtable-embed"
      src="https://airtable.com/embed/shrbrxYaV6KdOymx4?backgroundColor=blue"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style="background: transparent; border: 1px solid #ccc"
    ></iframe> -->
  </div>
</template>

<script>
import Button from "../components/atoms/Button.vue";
import OrdersGallery from "../components/orders/OrdersGallery.vue";
import { devmode } from "../helpers/generators";

export default {
  data() {
    return {
      show: false,
      devmode: devmode(),
    };
  },
  components: {
    OrdersGallery,
    Button,
  },
};
</script>
<style scoped>
html,
body {
  min-height: 100vh;
  background-color: #030303;
}
</style>

