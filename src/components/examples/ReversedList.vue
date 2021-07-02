<template>
  <div>
    <h2>list</h2>
    <!-- Add in a button that toggles our `reversed` flag -->
    <button @click="reversed = !reversed">Toggle</button>
    <ul>
      <li v-for="(item, index) in reversedList" v-bind:key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
  },
  name: "ReversedList",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log(`this.list`, this.list);
  },
  data() {
    return {
      // Define a reversed data property
      reversed: false,
    };
  },
  computed: {
    reversedList() {
      let clone = JSON.parse(JSON.stringify(this.list));
      console.log(`clone`, clone);
      //   return this.list.reverse();
      //   // Check if we need to reverse the list
      if (this.reversed) {
        console.log("hi");
        return clone.reverse();
      } else {
        // If not, return the plain list passed in
        console.log("bye");

        return this.list;
      }
    },
  },
};
</script>

