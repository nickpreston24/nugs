<template>
  <ul>
    <div id="event-handling">
      <h1 v-if="seen">Now You see me</h1>
      <p>{{ message }}</p>
      <input v-model="message" />
      <button v-on:click="reverseMessage">Reverse Message!</button>
      <!-- <ol>
        <li v-bind:key="todo.text" v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol> -->
    </div>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      message: "I like guns",
      seen: true,
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
      this.seen = !this.seen;
    },
  },
};
</script>

<style>
#paragraph {
  color: #600;
}
</style>
