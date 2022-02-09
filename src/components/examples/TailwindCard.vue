<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-arctic-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <p>
                An advanced online playground for Tailwind CSS, including support for
                things like:
              </p>
              <ul class="list-disc space-y-2">
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <!-- <svg
                      class="flex-shrink-0 h-5 w-5 text-cyan-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg> -->
                    <status-icon status="success" />
                  </span>
                  <p class="ml-2">
                    Customizing your
                    <code class="text-sm font-bold text-gray-900"
                      >tailwind.config.js</code
                    >
                    file
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <!-- <svg
                      class="flex-shrink-0 h-5 w-5 text-cyan-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg> -->
                    <status-icon status="success" />
                  </span>
                  <p class="ml-2">
                    Extracting classes with
                    <code class="text-sm font-bold text-gray-900">@apply</code>
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <!-- <svg
                      class="flex-shrink-0 h-5 w-5 text-cyan-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg> -->
                    <status-icon status="success" />
                  </span>
                  <p class="ml-2">Code completion with instant preview</p>
                </li>
              </ul>
              <p>
                Perfect for learning how the framework works, prototyping a new idea, or
                creating a demo to share online.
              </p>
            </div>
            <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <p>Want to dig deeper into Tailwind?</p>
              <p>
                <a
                  href="https://tailwindcss.com/docs"
                  class="text-cyan-600 hover:text-cyan-700"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <div>
                <img
                  class="sm:w-64 sm:h-64 md:w-128 md:h-auto md:rounded-none rounded-full mx-auto"
                  src="../../assets/valkyrie-barrel.jpg"
                  alt=""
                  width="384"
                  height="512"
                />
              </div>
              <blockquote>
                <p class="text-lg font-semibold">
                  “Why the heck didn't I investigate this in the first place? It's so
                  gosh-darn easy to use!”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-cyan-600">Michael Preston</div>
                <div class="text-gray-500">Nobody, Fort Worth</div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatusIcon from "../StatusIcon.vue";

export default {
  components: {
    StatusIcon,
  },
};
</script>

<!-- <figure
              class="d:flex rounded-xl p-8 md:p-0 relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10"
            >
              <img
                class="sm:w-32 sm:h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src="../assets/mikepreston.jpg"
                alt=""
                width="384"
                height="512"
              />
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p class="text-lg font-semibold">
                    “Why the heck didn't I investigate this in the first place?
                    It's so gosh-darn easy to use!”
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-cyan-600">Michael Preston</div>
                  <div class="text-gray-500">Nobody, Fort Worth</div>
                </figcaption>
              </div>
            </figure> -->
