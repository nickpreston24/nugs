<template>
  <div>
    <img class="rounded" :src="img" :alt="imgAlt" />
    <div class="mt-2">
      <div>
        <div class="text-xs text-gray-600 uppercase font-bold">{{ Name }}</div>
        <!-- <div class="font-bold text-gray-700 leading-snug">
          <a :href="url" class="hover:underline">{{  }}</a>
        </div> -->
        <div class="mt-2 text-sm text-gray-600">
          {{ Calibers }}
        </div>
        <div class="mt-2 text-sm text-gray-600">${{ Cost }}</div>
        <!-- <div class="mt-2 text-sm text-gray-600">{{ Weight }} lbs</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Name", "Cost", "Calibers", "Weight"],
};
</script>