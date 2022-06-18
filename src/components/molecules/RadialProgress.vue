<template>
  <radial-progress-bar
    :diameter="200"
    :completed-steps="completedSteps"
    :total-steps="totalSteps"
  >
    <!-- Your inner content here -->
  </radial-progress-bar>
</template>

<script>
import RadialProgressBar from "vue3-radial-progress";
import { ref } from "vue";
export default {
  setup() {
    const completedSteps = ref(5);
    const totalSteps = ref(10);

    return {
      completedSteps,
      totalSteps,
    };
  },
};
</script>
