<template>
  <div id="range" class="demo">
    <span class="p-2 bg-pink-300" v-for="n in 9" :key="n">{{ n * 100 }} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: false,
      paletteColor: "blue",
    };
  },
  
};
</script>

<style>
</style>