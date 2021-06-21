<template>
  <div class="home flex items-center">
    <ul>
      <NugList />
      <HookStateCounter />
      <TailwindCard />
      <ChitChatToast />
      <!-- <Capacitor/> -->
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TailwindCard from "@/components/TailwindCard.vue";
import ChitChatToast from "@/components/ChitChatToast.vue";
import HookStateCounter from "@/components/HookStateCounter.vue";
import Capacitor from "@/components/Capacitor.vue";
import NugList from "../components/nugs/NugList.vue";
export default defineComponent({
  name: "Home",
  components: {
    TailwindCard,
    ChitChatToast,
    HookStateCounter,
    NugList,
  },
});
</script>
<style scoped>
</style>
