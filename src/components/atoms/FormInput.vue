<template>
  <Stack :class="['form-group', !!error && 'has-error']">
    <div class="icon">
      <label v-show="label" class="form-label" for="email">{{ label }}</label>
      <input
        :placeholder="placeholder"
        :id="name"
        :name="name"
        :type="type"
        :value="value"
        class="text-orange-800 w-4/5 md:w-5/6"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('validate')"
        @keypress="$emit('validate')"
      />
      <i class="">
        <slot class=""> </slot>
      </i>
    </div>
    <p class="" v-if="!!error">{{ error }}</p>
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
    Stack,
  },
};
</script>

<style scoped>
/* Assign full width inputs*/
/* input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 40px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
} */

/* Set a style for the buttons*/
/* button {
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
} */

/* Set a hover effect for the button*/
/* button:hover {
  opacity: 0.8;
} */

/* .icon {
  position: relative;
}

.icon i {
  position: absolute;
  left: 15px;
  top: 40px;
  color: gray;
} */
</style>
