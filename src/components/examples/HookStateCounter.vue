<template>
  <div>
    <b>Count: {{ state.get() }}</b>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { useState } from "@hookstate/vue";
export default {
  data() {
    return {
      state: useState(0),
    };
  },

  methods: {
    increment() {
      this.state.set((p) => p + 1);
    },
  },
};
</script>

<style></style>
