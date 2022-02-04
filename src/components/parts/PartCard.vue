// https://codepen.io/philcheng/pen/YWyYwG?editors=1000 //
https://www.30secondsofcode.org/css/s/image-hover-rotate
<template>
  <div v-show="part.Attachments" class="container text-arctic-400">
    <figure>
      <img v-if="part.Attachments" :src="part.Attachments?.[0]?.url" />
    </figure>
    <p class="title hover:text-arctic-200">{{ part.Name }}</p>
    <div class="overlay"></div>
    <div class="button">
      <a><slot></slot></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    part: Object,
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
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  z-index: 1;
  transition: top 0.5s ease;
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
