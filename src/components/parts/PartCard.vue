<!-- Sample CSS Image hover show button
        https://codepen.io/philcheng/pen/YWyYwG?editors=1000
https://www.30secondsofcode.org/css/s/image-hover-rotate
  https://codepen.io/philcheng/pen/YWyYwG?editors=1000
-->
<template>
  <div
    v-if="part.Name"
    class="container flex flex-col items-center overflow-hidden text-purple-500 card"
  >
    <!-- <pre>Selected? {{ part?.selected }}</pre> -->
    <figure>
      <!-- Show Image -->
      <router-link v-if="part?.Attachments" :to="`/part/${part.id}`">
        <img
          v-if="part?.Attachments"
          :src="part?.Attachments?.[0]?.url"
          class="transition-all transform hover:scale-125"
        />
      </router-link>
      <!-- Upload missing image -->
      <Stack v-else-if="!part?.Attachment">
        <form-input :input="onChange" type="text" src="updatedUrl" placeholder="URL">
          <i class="fa fa-link fa-lg"></i>
        </form-input>
        <i>Image Coming Soon!</i>
        <!-- <Button @click="submit">Update</Button> -->
      </Stack>
    </figure>
    <p class="text-sm title lg:text-md ellipsis hover:text-purple-400">{{ part.Name }}</p>
    <div class="overlay"></div>
    <div class="button" name="button">
      <a class="border-2 border-white z-1"><slot></slot></a>
    </div>
  </div>
</template>

<script>
import Stack from "../flex/Stack.vue";
import { Border } from "../atoms";
import { Card } from "../molecules";

export default {
  props: {
    part: Object,
    // id: {
    //   required: true,
    //   type: String,
    // },
    // Name: {
    //   required: true,
    //   type: String,
    // },
  },
  // setup(props) {
  //   return {
  //     part: {
  //       Name: props.Name,
  //     },
  //   };
  // },
  components: {
    Stack,
    Border,
    Card,
  },
  computed: {
    border() {
      return part?.selected ? "border-4 border-orange-500" : "";
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  margin-top: 50px;
  width: 500px;
  height: 300px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: background 0.5s ease;
}

.container:hover .overlay {
  display: block;
  background: rgba(0, 0, 0, 0.3);
}

img {
  position: absolute;
  width: 500px;
  height: 300px;
  left: 0;
}

.title {
  position: absolute;
  width: 500px;
  left: 0;
  top: 120px;
  /* font-weight: 700; */
  /* font-size: 30px; */
  text-align: center;
  text-transform: uppercase;
  z-index: 1;
  transition: top 0.5s ease;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.container:hover .title {
  top: 90px;
}

.button {
  position: absolute;
  width: 500px;
  left: 0;
  top: 180px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.button a {
  width: 200px;
  padding: 12px 48px;
  text-align: center;
  /* color: white; */
  /* border: solid 2px white; */
  z-index: 1;
}

.container:hover .button {
  opacity: 1;
}

/* Rotate */
/* 
.hover-rotate {
  overflow: hidden;
  margin: 8px;
  min-width: 240px;
  max-width: 320px;
  width: 100%;
}

.hover-rotate img {
  transition: all 0.3s;
  box-sizing: border-box;
  max-width: 100%;
}

.hover-rotate:hover img {
  transform: scale(1.3) rotate(5deg);
} */
</style>
