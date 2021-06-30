<template>
  <div class="home flex items-center">
    <h2>Building time!</h2>
    <ul>
      <NugList />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { NugList } from "../components/nugs";
export default defineComponent({
  name: "Home",
  components: {
    NugList,
  },
});
</script>
<style scoped></style>
