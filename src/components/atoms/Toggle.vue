<template>
  <Toggle
    v-model="on"
    :classes="{
      container: 'inline-block',

      toggleOn: 'bg-orange-500 border-orange-500 justify-start text-white',
      toggleOff: 'bg-regal-200 border-regal-200 justify-end text-regal-700',
      toggleOnDisabled:
        'bg-regal-300 border-regal-300 justify-start text-regal-400 cursor-not-allowed',
      toggleOffDisabled:
        'bg-regal-200 border-regal-200 justify-end text-regal-400 cursor-not-allowed',
      handle: 'inline-block bg-white w-5 h-5 top-0 rounded-full absolute transition-all',
      handleOn: 'left-full transform -translate-x-full',
      handleOff: 'left-0',
      handleOnDisabled: 'bg-regal-100 left-full transform -translate-x-full',
      handleOffDisabled: 'bg-regal-100 left-0',
      label: 'text-center w-8 border-box whitespace-nowrap select-none',
    }"
  >
    <template v-slot:label="{ checked, classList }">
      <span :class="classList.label">{{ checked ? text : "Off" }}</span>
    </template>
  </Toggle>
</template>

<script>
import Toggle from "@vueform/toggle";

export default {
  components: {
    Toggle,
  },
  //   setup() {
  //     // console.log("this.onLabel", this.onLabel);
  //   },
  data() {
    return {
      on: true,
      text: "test",
    };
  },
  props: ["text"],
  //   props: {
  //     onLabel: { type: String, default: "ON" },
  //     offLabel: { type: String, default: "OFF!" },
  //   },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
