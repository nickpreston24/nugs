<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <div class="w-10 h-10 bg-pink rotate-90"></div>
    <p>
      Edit <code>components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
    <p>cmon{{ env }}</p>
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
      env: {},
    };
  },
  mounted() {
    // this.env = process.env;
    // console.log("process.env :>> ", process.env);
    console.log("import.meta.env :>> ", import.meta.env);

    this.env = { foo: import.meta.env.VITE_FOO };
    console.log("this.env :>> ", this.env);

    console.log("VITE_FOO? :>> ", import.meta.env.VITE_FOO);
    // console.log("FOO? :>> ", import.meta.env);
  },
};
</script>
