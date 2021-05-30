<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <Reverser />
    <Books />
    <InventoryList />
    <!-- <ol>
      <list-item />
      <list-item />
      <list-item />
    </ol> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Reverser from "@/components/Reverser.vue";
import Books from "@/components/Books.vue";
import ListItem from "@/components/ListItem.vue";
import InventoryList from "@/components/InventoryList.vue";

export default defineComponent({
  name: "Home",
  components: {
    Reverser,
    Books,
    // ListItem,
    InventoryList,
  },
});
</script>
<style scoped></style>
