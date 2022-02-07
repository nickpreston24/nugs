<template>
  <div>
    <h1>{{ title }}</h1>
    <ul class="gentle-flex">
      <li v-for="(value, key, index) in object" :key="index">
        <label v-bind:[key]="_">{{ key }}: </label>
        <input
          @input="$emit('update:value', $event.target.value)"
          :value="value"
          type="text"
          v-mode:placeholder="key"
        />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Label",
  emits: ["update:object"],
  props: ["title", "object"],

  computed: {
    value: {
      get() {
        return this.object;
      },
      set(value) {
        this.$emit("update:object", value);
      },
    },
  },
};
</script>
