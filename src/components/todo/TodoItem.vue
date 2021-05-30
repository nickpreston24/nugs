<template>
  <li>
    {{ title }}
    <button @click="$emit('remove')">Remove</button>
  </li>
</template>

<script>
module.exports = {
  props: { ["title"]: "" },
};
</script>

<style>
</style>