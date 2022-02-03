<template>
  <Stack :class="['form-group', !!error && 'has-error']">
    <label v-show="label" class="form-label" for="email">{{ label }}</label>
    <input
      :placeholder="placeholder"
      :id="name"
      :name="name"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="form-input text-orange-800"
      @blur="$emit('validate')"
      @keypress="$emit('validate')"
    />
    <p class="form-input-hint" v-if="!!error">{{ error }}</p>
  </Stack>
</template>

<script>
import Row from "../flex/Row.vue";
import Stack from "../flex/Stack.vue";
export default {
  name: "form-input",
  props: {
    type: { required: true },
    label: { required: true },
    name: { required: true },
    value: { required: true },
    error: { required: true },
    placeholder: { required: false },
  },
  components: {
    Row,
  },
};
</script>
