<template>
  <div>
    <Row>
      <div v-for="(item, key, index) in options">
        <label :for="item.id">{{ key }}</label>
        <input
          type="checkbox"
          v-model="options"
          :id="item.index"
          :value="item[togglePropName]"
          @click="item[togglePropName] = !item[togglePropName]"
          @input="$emit('onOptionChanged', $event.target.value)"
        />
      </div>
    </Row>
  </div>
</template>
<script>
import { Row } from "../../components/flex";
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    isToggle: {
      default: false,
    },
    togglePropName: {
      type: String,
      required: false,
      default: "enabled",
    },
  },
};
</script>
