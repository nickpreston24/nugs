<template>
  <span class="fill border">
    <button class="tech border fill">
      <slot></slot>
    </button>
  </span>
</template>
<style scoped>
.tech .border {
  position: absolute;
  top: -0.25rem;
  left: -0.25rem;
  right: -0.25rem;
  bottom: -0.25rem;
  background: 0 0;
}

.tech {
  --button-text: #fff;
  --button-text-hover: #fff;
  --button-border: #fff;
  --button-border-hover: #fff;
  --button-background: linear-gradient(to right, var(--pink-dark), var(--pink-light));
  --button-background-hover: linear-gradient(
    to right,
    var(--pink-dark),
    var(--pink-light)
  );
  color: var(--button-text);
  font-size: calc(1.8rem * var(--font-multiplier));
  font-weight: 500;
  display: block;
  background: var(--button-background);
  padding: 2.25rem 2.5rem 2.25rem 3.5rem;
  position: relative;
  -webkit-transition: all 0.275s ease-out;
  transition: all 0.275s ease-out;
  text-decoration: none;
  text-align: center;
  border-radius: 0;
}

.tech .border:before {
  border-top: 0.3rem solid var(--button-border);
  border-left: 0.3rem solid var(--button-border);
  top: 0.5rem;
  left: 0.5rem;
  animation: slide 0.25s ease-in-out reverse;
}
.tech .border:before,
.tech .border:after {
  content: "";
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  z-index: 1;
}

.tech .border:after {
  border-bottom: 0.3rem solid var(--button-border);
  border-right: 0.3rem solid var(--button-border);
  left: calc(100% + -2.3rem);
  bottom: 0.6rem;
  -webkit-animation: slide 0.25s ease-in-out;
  animation: slide 0.25s ease-in-out;
}

.tech .border:before,
.tech .border:after {
  content: "";
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  z-index: 1;
}

.tech .fill:before {
  content: "";
  position: absolute;
  top: -0.25rem;
  left: -0.25rem;
  bottom: -0.25rem;
  right: -0.25rem;
  border: 0.1rem solid var(--button-border);
  -webkit-transition: border-color 0.25s ease-in-out;
  transition: border-color 0.25s ease-in-out;
}
</style>
