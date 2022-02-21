<template>
  <div>
    <img class="rounded" :src="img" :alt="imgAlt" />
    <p>Weight {{ weight }}</p>
    <div class="mt-2">
      <div>
        <router-link v-if="Name" :to="`/build/${id}`">
          {{ Name }}
        </router-link>
        <div class="mt-2 text-sm text-gray-600">
          {{ Calibers }}
        </div>
        <div class="mt-2 text-sm text-gray-600">${{ Cost }}</div>
        <p>{{ Weight }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {computed} from' 'vue'
export default {
  props: {
    Name: {
      type: String,
      required: true,
      default: "",
    },
     Type: {
      type: String,
      required: true,
      default: "",
    },
     Kind: {
      type: String,
      required: true,
      default: "",
    },
    id: { type: String, required: true, default: "" },
    "Total Cost": { type: Number, required: false, default: 0.0 },
    Caliber: { type: Array, required: false, default: [] },
    Weight: { type: Number, required: false, default: null },
    Parts: {
      type: Array<Object>,
      required: true,
      default: [],
    },
    Owner : {
      type:Object,
      required: false,
      default: null
    },
    Reasoning: { type: String, required: false, default: "" },
    Pics: { type: Array, required: false, default: [] },

  },
  setup(props) {

//     const weight = computed(()=> {return

//     {oz: props.Weight, lbs: Math.round( props.Weight/16.0)}})

// return {
//   weight
// }
  }

  // props: ["Name", "Cost", "Calibers", "Weight", "id"],
  // computed: {
  //   links() {
  //     return "http://www.example.com";
  //   },
  // },
};
</script>
