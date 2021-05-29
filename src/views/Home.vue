<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->

    <Reverser />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Reverser from "@/components/Reverser.vue";

export default defineComponent({
  // created() {},
  name: "Home",
  components: {
    Reverser,
  },
});
</script>
<style scoped>

</style>
