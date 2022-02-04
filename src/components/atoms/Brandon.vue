<template>
  <button class="text-white bg-midnight w-2/3 h=1/3 border-regal-400 border-2">
    <div style="font-size: 1.25rem hover-rotate">
      <i class="fa fa-star fa-xs"></i>
    </div>

    <Row class="gap-4 p-tiny">
      <div class="bg-red h-2 w-1/5"></div>
      <div class="bg-red h-2 w-1/5"></div>
    </Row>
    <slot></slot>
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
<style>

</style>
