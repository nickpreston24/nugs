<template>
  <div class="h-2/3 w-64 p-10 m-10">
    <Slider
      @change="$emit('rangeChanged', $event)"
      v-model="value"
      :format="format"
      :max="2000"
      :min="300"
      :step="100"
      :classes="{
        base: 'w-full h-full relative z-1 bg-orange-400 rounded text-pink-500',

        tooltip:
          'absolute block text-sm font-semibold whitespace-nowrap py-1 px-1.5 min-w-5 text-center text-white rounded border transform h:-translate-x-1/2 h:left-1/2 v:-translate-y-1/2 v:top-1/2 disabled:bg-orange-400 disabled:border-orange-400 merge-h:translate-x-1/2 merge-h:left-auto merge-v:-translate-x-4 merge-v:top-auto tt-focus:hidden tt-focused:block tt-drag:hidden tt-dragging:block',
        tooltipTop: 'bottom-6 h:arrow-bottom merge-h:bottom-3.5',
        tooltipBottom: 'top-6 h:arrow-top merge-h:top-5',
        tooltipLeft: 'right-6 v:arrow-right merge-v:right-1',
        tooltipRight: 'left-6 v:arrow-left merge-v:left-7',
        tooltipHidden: 'slider-tooltip-hidden',
        backgroundColor: '#3f3',
      }"
    />
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
  },
  setup() {
    return {
      // value: this.$store.state.range,
    };
  },
  data: () => ({
    value: [600, 1800],
    format: function (value) {
      return `$${Math.round(value, 2)}`;
    },
  }),

  props: {
    range: {
      type: [Array],
      default: [300, 2000],
    },
  },
  // methods: {
  //   onChange(e) {
  //     console.log("e", e);
  //   },
  // },
};
</script>

<style src="@vueform/slider/themes/default.css">
/* .slider-red {
  --slider-connect-bg: #ef4444;
  --slider-tooltip-bg: #ef4444;
  --slider-handle-ring-color: #ef444430;
}

.slider-blue {
  --slider-connect-bg: #3b82f6;
  --slider-tooltip-bg: #3b82f6;
  --slider-handle-ring-color: #3b82f630;
} */
</style>
