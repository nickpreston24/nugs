<template>
  <div class="home flex items-center">
    <ul>
      <TailwindCard />
      <ChitChatToast />
      <!-- <Palette /> -->
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Reverser from "@/components/Reverser.vue";
import Books from "@/components/Books.vue";
import ListItem from "@/components/ListItem.vue";
import InventoryList from "@/components/InventoryList.vue";
import TodoList from "@/components/todo/TodoList.vue";
import TailwindCard from "@/components/TailwindCard.vue";
import ChitChatToast from "@/components/ChitChatToast.vue";
import Palette from "@/components/Palette.vue";

export default defineComponent({
  name: "Home",
  components: {
    // Reverser,
    // Books,
    // ListItem,
    // InventoryList,
    // TodoList,
    TailwindCard,
    ChitChatToast,
    // Palette,
  },
});
</script>
<style scoped>
</style>
