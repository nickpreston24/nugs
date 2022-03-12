<!-- TOdo: try this: https://stackoverflow.com/questions/54535838/scroll-behaviour-vuejs-not-working-properly -->
<template>
  <body class="m-0">
    <div class="wrapper text-arctic-200 text-xl">
      <header>
        <img :src="backgroundImage" class="background" />
        <img :src="foregroundImage" class="foreground" />

        <FadeTransition>
          <Section class="text-tahiti-100 text-3xl">
            <Stack class="p-10 gap-2 m-8">
              <p v-for="(item, index) in description.split('\\n')" :key="index">
                {{ item }}
              </p>

              <h1 class="lg:text-3xl text-lg m-8">Choose your Budget:</h1>
              <slider @range-changed="setRange" />

              <Row class="m-8">
                <chip
                  v-for="description in categories"
                  class="transform transition-all hover:scale-110 text-white shadow-2xl border-white border-2 bg-orange-600 rounded-4xl"
                >
                  <router-link to="/builds">{{ description }} </router-link>
                </chip>
              </Row>
            </Stack>
          </Section>
        </FadeTransition>
      </header>

      <Gradient v-if="false" class="m-20">
        <Stack>
          <h1 class="shadow-2xl lg:text-3xl text-lg text-arctic-500">{{ title }}</h1>
          <subtitle class="text-4xl shadow-2xl text-arctic-700">{{ subtitle }}</subtitle>
          <Row class="gap-20">
            <button class="h-20 text-3xl text-ocean-500 hover:text-orange-500">
              <router-link class="shadow-2xl" to="/builds">Yes!</router-link>
            </button>
            <button class="h-20 text-3xl text-ocean-500 hover:text-orange-500">
              <router-link class="shadow-2xl" to="/about">F.A.Q.</router-link>
            </button>
          </Row>
        </Stack>
      </Gradient>
    </div>
  </body>
</template>

<script>
import BorderedIcon from "../../components/atoms/BorderedIcon.vue";
import Button from "../../components/atoms/Button.vue";
import Chip from "../../components/atoms/Chip.vue";
import Section from "../../components/molecules/Section.vue";
import BorderShiftButton from "../../components/atoms/BorderShiftButton.vue";
import BlackHoleIcon from "../../components/atoms/BlackHoleIcon.vue";
import Stack from "../../components/flex/Stack.vue";
import Row from "../../components/flex/Row.vue";
import Gradient from "../../components/atoms/Gradient.vue";
import Slider from "../../components/atoms/Slider.vue";
import FadeTransition from "../../components/transitions/FadeTransition.vue";
import { useRange } from "../../hooks";
import { useStorage } from "@vueuse/core";
const storage = useStorage("range", []);

export default {
  props: {
    title: String,
    backgroundImage: String,
    foregroundImage: String,
    subtitle: String,
    description: String,
  },
  data() {
    return {
      categories: ["Home Defense", "LEO/Military", "Hunting", "Competition"],
      title: "Ready to Build?",
      subtitle: "😎",
    };
  },
  setup(props) {
    const { range } = useRange();
    return {
      range,
    };
  },
  methods: {
    setRange(range) {
      this.range.value = range;
      storage.value = range;
    },
  },
  components: {
    BorderedIcon,
    BlackHoleIcon,
    Gradient,
    Stack,
    Row,
    Button,
    BorderShiftButton,
    Slider,
    Section,
    Chip,
    FadeTransition,
    useRange,
  },
};
</script>
<style scoped>
body {
  margin: 0;
}

.wrapper {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
  width: 100vw;
}

header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
}

.background {
  transform: translateZ(-10px) scale(2.1);
}

.foreground {
  transform: translateZ(-5px) scale(1.5);
}

.background,
.foreground {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}

.title {
  text-shadow: 0 0 5px black;
}
</style>
