<template>
  <Row>
    <div v-for="(item, key, index) in options">
      <label :for="key">{{ key }}</label>
      <input
        type="checkbox"
        v-model="options"
        :id="index"
        :value="value"
        @click="options[propName || key] = !options[propName || key]"
        @input="$emit('onOptionChanged', $event.target.value)"
      />
    </div>
  </Row>
</template>
<script>
import Row from "../../components/flex/Row.vue";
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    isToggle: {
      default: false,
    },
    propName: {
      type: String,
      required: false,
      // default: "enabled",
    },
  },
};
</script>
