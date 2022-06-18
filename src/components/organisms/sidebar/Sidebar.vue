<template>
  <div
    v-show="!hidden"
    class="duration-300 p-25 z-1"
    :class="className"
    :style="{ width: sidebarWidth }"
  >
    <h1>
      <span v-if="collapsed">
        <div>R</div>
        <div>W</div>
      </span>
      <span v-else>Rifle Workshop</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/builds" icon="fas fa-gear">Builder</SidebarLink>
    <SidebarLink to="/about" icon="fas fa-image">About</SidebarLink>
    <SidebarLink v-if="devmode" to="/about" icon="fas fa-image">About</SidebarLink>

    <span
      class="absolute bottom-0 p-2 text-white transition duration-200 opacity-70"
      @click="toggleSidebar"
      :class="{ 'rotate-180': collapsed }"
    >
      <icon class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script setup>
import SidebarLink from "./SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth, className, hidden } from "./useSidebar";

const props = defineProps({
  mode: { type: String, default: "LEFT" },
});
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
