<template>
  <div class="parts">
    <Button @click="show = !show">{{
      !show ? "Add Parts" : "View Parts"
    }}</Button>

    <PartsGallery v-show="!show" />

    <iframe
      v-show="show"
      class="airtable-embed"
      src="https://airtable.com/embed/shreqIf5JuPgS9pyq?backgroundColor=blue"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style="background: transparent; border: 1px solid #ccc"
    ></iframe>

    <Row>
      <button v-on:click="showRounds = !showRounds">
        {{ !showRounds ? "[+] Rounds" : "[-] Rounds" }}
      </button>

      <button v-on:click="showBuilds = !showBuilds">
        {{ !showBuilds ? "[+] Builds" : "[-] Builds" }}
      </button>

      <button v-show="false" v-on:click="showOrders = !showOrders">
        {{ !showOrders ? "[+] Orders" : "[-] Orders" }}
      </button>
      <button v-on:click="showParts = !showParts">
        {{ !showParts ? "[+] Parts" : "[-] Parts" }}
      </button>
    </Row>
  </div>
</template>
<script>
import Button from "../components/atoms/Button.vue";
import PartsGallery from "../components/parts/PartsGallery.vue";
import Row from "../components/flex/Row.vue";
export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    PartsGallery,
    Button,
    Row,
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
