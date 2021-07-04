<template>
  <card>
    <!-- <template>
      <h2>{{ title }}</h2>
    </template> -->
    <template v-slot:header>
      <h2>{{ title }}</h2>
    </template>
    <template v-slot:default>
      <img src="https://picsum.photos/0" />
    </template>
    <template v-slot:footer>
      <button>Show Details</button>
    </template>
  </card>
</template>

<script>
import Card from "../molecules/Card.vue";
export default {
  props: ["title"],
  // components: { Card },
};
</script>
<style>
.part-card {
  width: 300px;
  height: 200px;
  background: yellow;
}
</style>