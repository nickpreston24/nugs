<template>
  <div class="m-10 bg-gray-100">
    <div id="nav">
      <router-link v-if="devmode" to="/">Home | </router-link>
      <router-link v-if="!devmode" to="/about">About | </router-link>
      <router-link v-if="!devmode" to="/signin">Sign In | </router-link>
      <router-link v-if="devmode" to="/orders">Orders | </router-link>
      <router-link to="/builds">Builds | </router-link>
      <router-link to="/parts">Parts | </router-link>
      <router-link v-if="devmode" to="/orders/add-part">To Ship | </router-link>
      <router-link v-if="devmode" to="/sandbox"> Sandbox</router-link>
    </div>
    <img class="gentle-flex" alt="Vue logo" src="./assets/logo.png" />

    <!-- <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view> -->

    <footer class="bg-gray-100">Powered by {{ db }}</footer>
  </div>
</template>
<script>
import { devmode } from "./helpers/generators";
export default {
  data() {
    return {
      devmode: devmode(),
      db: null,
      neo4jSampleResult: null,
    };
  },
  mounted() {
    this.db = import.meta.env.VITE_VERCEL_USER;

    // const PORT = 3000;
    const fetchNugs = async () => {
      const {
        data: { data },
      } = await axios.get(`"http://127.0.0.1:5000/gallery"`);
      if (data.length > 0) {
        setImages(
          data.map((image) => ({
            original: `${image.url}`,
            thumbnail: `${image.url}`,
          }))
        );
      }
    };
    fetchNugs();
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

/*route transitions*/
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.15s ease-in-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.15s ease-in;
}
</style>
