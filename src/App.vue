<template>
  <body>
    <div id="nav" class="mb-20 bg-gray">
      <router-link v-if="devmode" to="/">Home | </router-link>
      <router-link v-if="!devmode" to="/about">About | </router-link>
      <router-link v-if="!devmode" to="/signin">Sign In | </router-link>
      <router-link v-if="devmode" to="/orders">Orders | </router-link>
      <router-link to="/builds">Builds | </router-link>
      <router-link to="/parts">Parts | </router-link>
      <router-link v-if="devmode" to="/orders/add-part">To Ship | </router-link>
      <router-link v-if="devmode" to="/sandbox"> Sandbox</router-link>
    </div>
    <ul id="sandbox" class="gentle-flex">
      <!-- <img class="w-15 h-15" alt="Vue logo" src="./assets/logo.png" />

      <h3>
        <a :href="info.url" target="_blank">Api Call</a>
      </h3> -->

      <!-- <b>{{ message }}</b> -->
      <label for="">
        result:
        <i>{{ info }}</i>
      </label>
    </ul>

    <footer class="bg-gray-100">
      Powered by {{ info.db }} <br />
      Mode: {{ !devmode ? "Production" : "Dev" }}
    </footer>
  </body>
  <!-- <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view> -->
</template>
<script>
import { devmode } from "./helpers/generators";
import axios from "axios";
export default {
  data() {
    return {
      devmode: devmode(),
      info: { db: null, result: null, message: "" },
    };
  },
  mounted() {
    // let self = this;
    // let info = self.info;

    // devmode && console.log("import.meta.env :>> ", import.meta.env);
    // let uri = import.meta.env?.VITE_VERCEL_URI || "http://localhost:";
    // let port = import.meta.env.VITE_PORT;

    // const url = devmode
    //   ? `http://localhost:${"3001"}/api/nugs/1`
    //   : `${uri}${port}/api/nugs/1`;
    // info.url = url;

    // // update the render of info for dev only
    // if (devmode) {
    //   info.db = import.meta.env.VITE_VERCEL_USER;
    //   info.message = "fetching nugs...";
    //   info.uri = uri;
    //   info.port = port;
    // }

    // info.devmode = devmode;

    // axios
    //   .get(url)
    //   .then((response) => {
    //     info.result = response.data;
    //   })
    //   .catch((err) => {
    //     if (devmode) info.message = err;
    //     console.log("err :>> ", err);
    //   });
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
