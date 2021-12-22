<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <div class="w-10 h-10 bg-pink rotate-90"></div>
    <p>
      Edit <code>components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    console.log("FOO? :>> ", import.meta.env);
  },
};
</script>
