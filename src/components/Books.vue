<template>
  <div id="computed-basics">
    <h2>{{ fullName }}</h2>
    <p>Has published books?</p>
    <span>{{ getMessage }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: {
        books: [
          {
            title: "12 Rules for Life",
          },
        ],
      },
      firstName: "Jordan",
      lastName: "Peterson",
    };
  },
  computed: {
    getMessage() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(nextValue) {
        const names = nextValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
};
</script>

<style>
</style>