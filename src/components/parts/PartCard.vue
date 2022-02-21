// https://codepen.io/philcheng/pen/YWyYwG?editors=1000 //
https://www.30secondsofcode.org/css/s/image-hover-rotate

<!-- Sample CSS Image hover show button
        https://codepen.io/philcheng/pen/YWyYwG?editors=1000
-->
<template>
  <!-- <Gradient>  show if selected :) -->
  <div class="min-h-screen bg-warmGray-100 py-6 flex border-tahiti-500 border-2">
    <!-- <img class="rounded" :src="part?.Attachments?.[0]?.url" :alt="part?.Name" /> -->
    <div class="mt-2">
      <div>
        <div
          v-if="part?.Cost"
          class="text-xs text-slate-600 uppercase font-bold tracking-wider"
        >
          <!-- ${{ part?.Cost }} -->
        </div>
        <div class="font-bold text-slate-700 leading-snug">
          <a :href="url" class="hover:underline">{{ title }}</a>
        </div>
        <div class="text-sm font-bold text-gray-900">${{ part?.Cost }}</div>
      </div>
    </div>

    <!-- OLd -->
    <div v-if="false">
      <!-- <figure> -->
      <!-- Show Image -->
      <div v-if="part?.Attachments">
        <!-- <img class="rounded" :src="part?.Attachments?.[0]" :alt="imgAlt" /> -->
      </div>
      <!-- <router-link v-if="part?.Attachments" :to="`/part/${part.id}`">
        <img
          v-if="part?.Attachments"
          :src="part?.Attachments?.[0]?.url"
          class="transform transition-all hover:scale-125"
        />
      </router-link> -->
      <!-- Upload missing image -->
      <Stack v-else-if="!part?.Attachment">
        <form-input :input="onChange" type="text" src="updatedUrl" placeholder="URL">
          <i class="fa fa-link fa-lg"></i>
        </form-input>
        <i>Image Coming Soon!</i>
      </Stack>

      <!-- </figure> -->
      <!-- <p class="title ellipsis hover:text-arctic-200">{{ part.Name }}</p> -->
      <!-- <div class="overlay w-16 border-orange-500 border-x-2"></div> -->
      <!-- <div class="button w-16 border-red border-x-2" name="button">
        <a><slot></slot></a>
      </div> -->
    </div>
  </div>

  <!-- <Button @click="submit">Update</Button> -->
  <!-- </Gradient> -->
</template>

<script>
import Stack from "../flex/Stack.vue";
import { Border } from "../atoms";
import { Card } from "../molecules";

export default {
  props: {
    part: Object,
  },
  components: {
    Stack,
    Border,
    Card,
  },
  computed: {
    border() {
      return this.part?.selected ? "border-4 border-white" : "border-2 border-red";
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  /* margin-top: 50px; */
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
/* 
//TODO: find a better way than this absolute positioning trash
img {
  position: absolute;
  width: 500px;
  height: 300px;
  left: 0;
} */

.title {
  position: absolute;
  width: 500px;
  left: 0;
  top: 120px;
  font-weight: 700;
  font-size: 30px;
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
  color: white;
  border: solid 2px white;
  z-index: 1;
}

.container:hover .button {
  opacity: 1;
}

/* Rotate */

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
}
</style>
