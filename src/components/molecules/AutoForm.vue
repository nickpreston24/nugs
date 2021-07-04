<template>
  <div>
    <h1>{{ title }}</h1>
    <ul class="gentle-flex">
      <li v-for="(value, key, index) in schema" :key="index">
        <!-- <label v-bind:[key]="_">{{ key }}: </label> -->
        <!-- v-model="schema[key]" -->
        <input
          class="bullet-border"
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
/**
 * Braden's example:
 * <template>
  <li>
    <p v-text="`Skill Level: ${level}`"></p>
    <input
      :name="name"
      :value="schema"
      @input="$emit('update:schema', $event.target.value)"
    />
  </li>
</template>
 */
export default {
  name: "Label",
  emits: ["update:schema"],
  props: ["title", "schema"],

  computed: {
    value: {
      get() {
        return this.schema;
      },
      set(value) {
        this.$emit("update:schema", value);
      },
    },
  },
};
</script>
