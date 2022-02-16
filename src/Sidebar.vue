<template>
  <body>
    <nav class="navbar sm:h-48">
      <div class="m-2 text-3xl">
        <router-link class="navbar-links text-5xl m-10" to="/">
          <Shadow
            :className="{ basic: true }"
            :color="{ color: '#1fff11' }"
            class="text-7xl"
          >
            <Row>
              <!-- <i class="fa fa-beer"></i> -->
              <h1 class="text-7xl">Blaster Builder</h1>
            </Row>
          </Shadow>
        </router-link>

        <!-- IDEA: Evolution of blasters svg
        https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KcXLemEwyV_kTP4_m6OcGwHaFj%26pid%3DApi&f=1
        
        wheel gun -> pistol -> musket -> shotgun -> bolt action -> AR-15/10
         -->
      </div>
      <a href="#" class="toggle-button" @click="toggleBurger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <!-- <pre>{{ classList }}</pre> -->
      <div class="classList">
        <ul>
          <li>
            <router-link class="navbar-links" to="/">Home </router-link>
          </li>
          <li>
            <router-link class="navbar-links" to="/about">About </router-link>
          </li>
          <li>
            <router-link class="navbar-links" v-if="devmode" to="/signin"
              >Sign In
            </router-link>
          </li>
          <li>
            <router-link class="navbar-links" v-if="devmode" to="/rounds"
              >Rounds
            </router-link>
          </li>
          <li>
            <router-link class="navbar-links" to="/builds">Builds </router-link>
          </li>
          <li>
            <router-link class="navbar-links" to="/parts">Parts </router-link>
          </li>
          <li>
            <router-link class="navbar-links" v-if="devmode" to="/sandbox">
              Sandbox</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </body>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
}

.navbar-links {
  height: 100%;
}

.navbar-links ul {
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  list-style: none;
}

.navbar-links li a {
  display: block;
  text-decoration: none;
  color: white;
  padding: 1rem;
}

.navbar-links li:hover {
  background-color: #555;
}

.toggle-button {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
}

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
}
</style>
<script>
import { Row } from "./components/flex";
import { Shadow } from "./components/atoms";
import { Log, devmode } from "./helpers";

export default {
  components: {
    Row,
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
      Log("active?", this.isActive);
    },
  },
  computed: {
    classList() {
      return `navbar-links ${this.isActive ? "flex" : ""}`;
    },
  },
};
</script>
