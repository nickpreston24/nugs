<template>
  <Section class="parts">
    <!-- <Brandon class="w-64" @click="parts.show = !parts.show">{{
      !parts.show ? "Add Parts" : "View Parts"
    }}</Brandon> -->

    <pre v-if="devmode" class="text-tahiti-300">{{ showModal }}</pre>

    <Button @click="showModal = !showModal">Add Part</Button>

    <Modal :show="showModal">
      <template #header>
        <h3 class="text-lg lg:text-3xl">Add Part</h3>
      </template>
      <div>
        <AddParts />
      </div>

      <template #footer>
        <Row>
          <Button @click="submit">Submit</Button>
        </Row>
      </template>
    </Modal>

    <AddParts v-if="parts.show" />

    <PartsGallery />
  </Section>
</template>
<script setup lang="ts">
import { Modal, Accordion } from "../components/molecules";
import { Button, Brandon } from "../components/atoms";
import PartsGallery from "../components/parts/PartsGallery.vue";
import { Row } from "../components/flex";
import Section from "../components/molecules/sections/Section.vue";
import useTable from "../hooks/useTable";
import AddParts from "../components/parts/AddParts.vue";
import { devmode } from "../helpers/";
import { ref, watch } from "vue";

const showModal = ref(false);
const { state } = useParts("Parts", { maxRecords: 10 });
// console.log("state", state);
// console.log("state.value", state.value.records);

const props = defineProps({
  show: false,
  form: {
    Name: "",
    URL: "",
    Cost: 0.0,
  },
});

watch(
  () => props.show,
  (show) => {
    showModal.value = show;
  }
);
</script>
<style scoped>
html,
body {
  min-height: 100vh;
  background-color: #030303;
}
</style>
