<template>
  <body class="m-0">
    <div class="wrapper">
      <header>
        <img :src="backgroundImage" class="background" />
        <img :src="foregroundImage" class="foreground" />
        <ul>
          <h1 class="title">{{ title }}</h1>
          <h4 class="text-lg text-white shadow-xl">{{ subtitle }}</h4>
        </ul>
      </header>
      <section>
        {{ description }}
      </section>
    </div>
  </body>
</template>
<script>
export default {
  props: {
    title: String,
    backgroundImage: String,
    foregroundImage: String,
    subtitle: String,
    description: String,
  },
};
</script>
<style global>
body {
  margin: 0;
}

.wrapper {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
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
  transform: translateZ(-10px) scale(2);
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
  font-size: 7rem;
  color: gold;
  text-shadow: 0 0 5px black;
}

section {
  font-size: 2rem;
  padding: 2rem;
  background-color: #333;
  color: white;
}
</style>
