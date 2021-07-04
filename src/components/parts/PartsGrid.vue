<template>
  <div>
    <ul v-for="(part, idx) in parts" :key="idx" class="gentle-flex">
      <li>hi</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      parts: [],
    };
  },
};
</script>