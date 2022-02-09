<template>
  <Section class="parts">
    <Brandon class="w-64" @click="parts.show = !parts.show">{{
      !parts.show ? "Add Parts" : "View Parts"
    }}</Brandon>

    <PartsGallery v-if="!parts.show" />

    <AddParts />
  </Section>
</template>
<script>
import Button from "../components/atoms/Button.vue";
import Brandon from "../components/atoms/Brandon.vue";
import PartsGallery from "../components/parts/PartsGallery.vue";
import Row from "../components/flex/Row.vue";
import Section from "../components/molecules/Section.vue";
import useTable from "../components/useTable";
import AddParts from "../components/parts/AddParts.vue";
export default {
  data() {
    return {
      parts: { show: false },
      form: {
        Name: "",
        URL: "",
        Cost: 0.0,
      },
    };
  },
  components: {
    PartsGallery,
    Button,
    Row,
    Section,
    Brandon,
    AddParts,
  },
};
</script>
<style scoped>
html,
body {
  min-height: 100vh;
  background-color: #030303;
}
</style>
