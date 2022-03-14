<template>
  <div class="">
    <h1>This is an about page</h1>
    <h2>The sidebar is {{ collapsed ? "closed" : "open" }}</h2>
    <button @click="toggleSidebar">Toggle sidebar</button>
  </div>
</template>
<script>
import { collapsed, toggleSidebar } from "../components/organisms/sidebar/state";
export default {
  setup() {
    return { collapsed, toggleSidebar };
  },
};
</script>
