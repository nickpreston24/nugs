<template>
  <radial-progress-bar
    :diameter="200"
    :completed-steps="completedSteps"
    :total-steps="totalSteps"
    class="border-red border-4"
  >
    <slot></slot>
  </radial-progress-bar>
</template>

<script>
export default {
  setup() {
    const completedSteps = ref(0);
    const totalSteps = ref(10);

    return {
      completedSteps,
      totalSteps,
    };
  },
};
</script>
