<template>
  <body class="m-0">
    <div class="wrapper text-arctic-500">
      <header>
        <img :src="backgroundImage" class="background" />
        <img :src="foregroundImage" class="foreground" />

        <Stack>
          <Gradient class="m-20">
            <Stack>
              <h1 class="shadow-2xl text-7xl text-arctic-500">{{ title }}</h1>
              <subtitle class="text-4xl shadow-2xl text-arctic-700">{{
                subtitle
              }}</subtitle>
              <Row class="gap-20">
                <button
                  class="h-20 text-3xl text-ocean-500 hover:text-bubble-gum"
                >
                  <router-link class="navbar-links" to="/builds"
                    >Build Now
                  </router-link>
                </button>
                <button
                  class="h-20 text-3xl text-ocean-500 hover:text-bubble-gum"
                  @click="alert('alons-y!')"
                >
                  I need more info
                </button>
              </Row>
            </Stack>
          </Gradient>
        </Stack>
      </header>

      <section class="text-3xl bg-regal-600 h-2/3">
        <p v-for="(item, index) in this.description.split('\\n')" :key="index">
          {{ item }}
        </p>
      </section>
    </div>
  </body>
</template>
<script>
import BorderedIcon from "../../components/atoms/BorderedIcon.vue";
import Button from "../../components/atoms/Button.vue";
import BlackHoleIcon from "../../components/atoms/BlackHoleIcon.vue";
import Stack from "../../components/flex/Stack.vue";
import Row from "../../components/flex/Row.vue";
import Gradient from "../../components/atoms/Gradient.vue";

export default {
  props: {
    title: String,
    backgroundImage: String,
    foregroundImage: String,
    subtitle: String,
    description: String,
  },
  components: {
    BorderedIcon,
    BlackHoleIcon,
    Gradient,
    Stack,
    Row,
    Button,
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
