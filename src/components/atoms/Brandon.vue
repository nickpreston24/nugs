<template>
  <button
    class="text-4xl p-lg hover:text-arctic-300 text-white bg-midnight border-regal-400 border-2 hover:shadow-3xl"
  >
    <!-- Top -->
    <Row class="gap-1 p-tiny">
      <div class="bg-red h-1 w-4/5"></div>
      <div v-for="(item, index) in 5" :key="index" style="font-size: 0.75rem">
        <i class="fa fa-star fa-xs"></i>
      </div>
      <div class="bg-red h-1 w-4/5"></div>
    </Row>
    <slot></slot>
    <Row class="gap-1 p-tiny">
      <div class="bg-red h-1 w-4/5"></div>
      <div v-for="(item, index) in 5" :key="index" style="font-size: 0.75rem">
        <i class="fa fa-star fa-xs"></i>
      </div>
      <div class="bg-red h-1 w-4/5"></div>
    </Row>
    <!-- Bottom -->
  </button>
</template>
<script>
import Row from "../flex/Row.vue";
import Stack from "../flex/Stack.vue";
import Grid from "../flex/Grid.vue";
export default {
  components: {
    Row,
    Stack,
    Grid,
  },
};
</script>
<style></style>
