<template>
  <Section class="parts">
    <!-- <Brandon class="w-64" @click="parts.show = !parts.show">{{
      !parts.show ? "Add Parts" : "View Parts"
    }}</Brandon> -->

    <pre v-if="devmode" class="text-tahiti-300">{{ showModal }}</pre>

    <Button @click="showModal = !showModal">Add Part</Button>

    <Modal :show="showModal">
      <template #header>
        <h3 class="text-3xl">Add Part</h3>
      </template>

      <template #body>
        <!-- <img src="https://picsum.photos/id/684/600/400" alt="" /> -->

        <AddParts />
      </template>
    </Modal>

    <AddParts v-if="parts.show" />

    <PartsGallery />
  </Section>
</template>
<script>
import { Modal } from "../components/molecules";
import { Button, Brandon } from "../components/atoms";
import PartsGallery from "../components/parts/PartsGallery.vue";
import { Row } from "../components/flex";
import Section from "../components/molecules/Section.vue";
import useTable from "../components/useTable";
import AddParts from "../components/parts/AddParts.vue";
import { devmode } from "../helpers/";
import { ref, watch } from "vue";

export default {
  setup(props) {
    const showModal = ref(false);

    watch(
      () => props.show,
      (show) => {
        showModal.value = show;
      }
    );

    return {
      showModal,
    };
  },
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
    Modal,
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
