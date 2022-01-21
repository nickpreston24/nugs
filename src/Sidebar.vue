<template>
  <div>
    <div id="nav" class="sidenav bg-ocean-green-100 blur-sm">
      <router-link v-if="devmode" to="/">Home | </router-link>
      <router-link v-if="!devmode" to="/about">About | </router-link>
      <router-link v-if="!devmode" to="/signin">Sign In | </router-link>
      <router-link v-if="devmode" to="/recipes">Recipes | </router-link>
      <router-link to="/builds">Builds | </router-link>
      <router-link to="/parts">Parts | </router-link>
      <router-link v-if="devmode" to="/recipes/add-part"
        >To Ship |
      </router-link>
      <router-link v-if="devmode" to="/sandbox"> Sandbox</router-link>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
<style scoped>

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
<script>
import { devmode } from './helpers/generators';

export default {
    data() {
    return {
      devmode: devmode(),
    };
  },
}
</script>
