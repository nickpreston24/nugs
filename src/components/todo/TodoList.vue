<template>
  <div id="todo-list-example">
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
      />
      <button>Add</button>
    </form>
    <ul>
      <li>
        {{ title }}
        <button @click="$emit('remove')">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "Do the dishes",
        },
        {
          id: 2,
          title: "Take out the trash",
        },
        {
          id: 3,
          title: "Mow the lawn",
        },
      ],
      nextTodoId: 4,
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
  color: #600;
}
</style>
