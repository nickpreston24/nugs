<template>
  <div>
    <img class="rounded" :src="img" :alt="imgAlt" />
    <div class="mt-2">
      <div>
        <router-link v-if="Name" :to="`/build/${id}`">
          {{ Name }}
        </router-link>
        <div class="mt-2 text-sm text-gray-600">
          {{ Calibers }}
        </div>
        <div class="mt-2 text-sm text-gray-600">${{ Cost }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Name", "Cost", "Calibers", "Weight", "id"],
  computed: {
    links() {
      return "http://www.example.com";
    },
  },
};
</script>
