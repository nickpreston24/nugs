<template>
  <div class="bg-gray-900 gradient-border hover:bg-regal-700" id="box">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:200");

#box {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Raleway";
}
.gradient-border {
  --borderWidth: 3px;
  position: relative;
  border-radius: var(--borderWidth);
}
.gradient-border:after {
  content: "";
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
