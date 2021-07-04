<template>
  <li v-if="showOutOfStocks">{{ value }} In stock: {{ inStockMessage }}</li>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      value: "Nehi Grape",
      inStock: false,
      showOutOfStocks: true, //TODO: make this something we can get from parent component!
    };
  },
  computed: {
    inStockMessage() {
      return this.value?.inStock ? "Yes" : "No";
    },
  },
};
</script>


