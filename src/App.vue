<template>
  <div id="nav">
    <router-link v-if="devmode" to="/">Home | </router-link>
    <router-link v-if="devmode"  to="/about">About | </router-link>
    <router-link v-if="devmode"  to="/signin">Sign In | </router-link>
    <router-link to="/orders">Orders | </router-link>
    <router-link to="/builds">Builds | </router-link>
    <router-link to="/parts">Parts | </router-link>
    <router-link v-if="devmode" to="/sandbox"> Sandbox</router-link>
  </div>
  <router-view />
</template>
<script>
import { devmode } from "./helpers/generators";
export default {
  data() {
    return {
      devmode: devmode(),
    };
  },
};
</script>
<style global>
/* No hover borders */
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}


/* Todo: move to tailwind component */
label {
  padding: 1rem;
  font-weight: 500;
  color: #42b983;
}

/* Todo: move to tailwind component */
input.bullet-border {
  border: 2px solid #42b983;
  border-radius: 0% 50% 50% 0%;
  outline: none;
}

/* Auto-center component and contents */
.gentle-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1ch;
}

#app {
  font-family: "Trebuchet MS", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
