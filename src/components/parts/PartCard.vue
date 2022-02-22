<!-- Sample CSS Image hover show button
        https://codepen.io/philcheng/pen/YWyYwG?editors=1000
https://www.30secondsofcode.org/css/s/image-hover-rotate
-->
<template>
  <div
    class="min-h-screen bg-trueGray-100 py-6 flex flex-col justify-center sm:py-12 border-tahiti-500 border-2"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <!-- <div
        class="absolute inset-0 bg-gradient-to-r to-purple-500 from-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-4xl"
      ></div> -->
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div class="divide-y divide-trueGray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-trueGray-700 sm:text-lg sm:leading-7"
            >
              <h1 class="p-lg text-cyan-800">
                {{ part?.Name }}
              </h1>
              <ul class="list-disc space-y-2">
                <li
                  v-if="part?.Features"
                  v-for="(feature, key, index) in part?.Features"
                  class="flex items-start"
                >
                  <span :key="index" class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-tahiti-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Weight
                    <code class="text-sm font-bold text-trueGray-900">{{ feature }}</code>
                  </p>
                </li>
              </ul>
              <p>
                {{ part?.Notes }}
              </p>
            </div>
            <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <!-- <p>Want to dig deeper into Tailwind?</p> -->
              <p>
                <a
                  :href="part?.Link"
                  class="text-tahiti-600 hover:text-tahiti-700"
                  target="_"
                >
                  Check it Out &rarr;
                </a>
              </p>
            </div>
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <div>
                <img
                  class="sm:w-64 sm:h-64 md:w-128 md:h-auto md:rounded-none rounded-full mx-auto"
                  :src="part?.Attachments?.[0].url"
                  alt=""
                  width="384"
                  height="512"
                />
              </div>
              <blockquote v-if="part?.Testimonial">
                <p class="text-lg font-semibold">
                  {{ part?.Testimonial }}
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div v-if="part?.Cost" class="text-tahiti-600">${{ part?.Cost }}</div>
                <div v-if="part?.Weight" class="text-trueGray-500">
                  {{ part?.Weight }} oz
                </div>
              </figcaption>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
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
      return this.part?.selected ? "border-4 border-white" : "border-2 border-red";
    },
  },
};
</script>
