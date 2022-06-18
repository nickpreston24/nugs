<template>
  <body class="h-16 border-box lg:h-32">
    <nav class="flex justify-between text-white bg-gray-500">
      <div class="text-3xl border-2 border-red">
        <router-link class="h-full m-2" to="/">
          <Shadow
            :className="{ basic: true }"
            :color="{ color: '#1fff11' }"
            class="text-7xl"
          >
            <Row>
              <i class="fa fa-cog pb-base fa-lg lg:fa-2xl" aria-hidden="true"></i>
              <h1 class="text-4xl lg:text-7xl drop-shadow-md">Blaster Designer</h1>
            </Row>
          </Shadow>
        </router-link>
      </div>
      <a
        href="#"
        class="absolute flex-col justify-between hidden h-5 toggle-button top-3 right-4 w-7"
        @click="toggleBurger"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <!-- <pre>{{ classList }}</pre> -->
      <div class="overflow-auto border-2 classList border-red">
        <Stack class="flex p-0 m-0">
          <p>
            <router-link class="navbar-links" to="/">Home </router-link>
          </p>
          <p>
            <router-link class="navbar-links" to="/about">About </router-link>
          </p>
          <p>
            <router-link class="navbar-links" v-if="devmode" to="/signin"
              >Sign In
            </router-link>
          </p>
          <p>
            <router-link class="navbar-links" v-if="devmode" to="/rounds"
              >Rounds
            </router-link>
          </p>
          <p>
            <router-link class="navbar-links" to="/builds">Builds </router-link>
          </p>
          <p>
            <router-link class="navbar-links" to="/parts">Parts </router-link>
          </p>

          <p>
            <router-link v-if="devmode" class="navbar-links" to="/blog"
              >Blog
            </router-link>
          </p>
          <p>
            <router-link v-if="devmode" class="navbar-links" to="/clones"
              >Clones
            </router-link>
          </p>
          <p>
            <router-link v-if="devmode" class="navbar-links" to="/guides"
              >Guides
            </router-link>
          </p>
          <p>
            <router-link class="navbar-links" v-if="devmode" to="/sandbox">
              Sandbox</router-link
            >
          </p>
        </Stack>
      </div>
    </nav>
  </body>
</template>
<script>
import { Row, Stack } from "../flex";
import { Shadow } from "../atoms";
import { devmode } from "../../helpers";

export default {
  components: {
    Row,
    Stack,
    Shadow,
  },
  data() {
    return {
      devmode: devmode,
      isActive: false,
    };
  },
  methods: {
    toggleBurger() {
      this.isActive = !this.isActive;
      devmode && console.log("this.isActive", this.isActive);
    },
  },
  computed: {
    classList() {
      return `navbar-links ${this.isActive ? "flex" : ""}`;
    },
  },
};
</script>

<style scoped>
/* * {
  box-sizing: border-box;
} */
/* 
body {
  margin: 0;
  padding: 0;
} */

/* .navbar {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white; 
}
*/
/* 
.navbar-links li {
  list-style: none;
} */

/* .navbar-links li a {
  display: block;
  text-decoration: none;
  color: white;
  padding: 1rem;
} */
/* 
.navbar-links li:hover {
  background-color: #555;
} */

/* .toggle-button {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
} */
/* 
.toggle-button .bar {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
} */
/* 
@media (max-width: 800px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .toggle-button {
    display: flex;
  }

  .navbar-links {
    display: none;
    width: 100%;
  }

  .navbar-links ul {
    width: 100%;
    flex-direction: column;
  }

  .navbar-links ul li {
    text-align: center;
  }

  .navbar-links ul li a {
    padding: 0.5rem 1rem;
  }

  .navbar-links.active {
    display: flex;
  }
} */
</style>
