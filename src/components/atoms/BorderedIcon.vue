<template>
  <div class="circle-wrapper">
    <div class="border"></div>
    <div class="icon">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    background: String,
    foreground: String,
    border: String,
  },
  computed: {
    border() {
      return "border-red border-4";
    },
  },
};
</script>
<style scoped>
.circle-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  float: left;
  margin: 10px;
}

.icon {
  position: absolute;
  color: #fff;
  font-size: 55px;
  top: 55px;
  left: 55px;
  transform: translate(-50%, -50%);
}

.circle {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 2.5px;
  background-clip: content-box;
  animation: spin 10s linear infinite;
}

.circle-wrapper:active .circle {
  animation: spin 2s linear infinite;
}

.colors {
  background-color: #4bb543;
  border: 2.5px dashed #4bb543;
}

@keyframes spin {
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
