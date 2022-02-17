<template>
  <div>
    <slot name="header">
      <h1>
        Hi there! This Page not implemented yet, but hang tight! Or, poke me
        <Button @click="contactUs"> </Button>
      </h1>
    </slot>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <Footer class="min-h-64">
      <template v-slot:left>LEFT</template>
      <Stack>
        <a href="#">Affiliates</a>
        <a href="#">Help</a>
      </Stack>
      <template v-slot:right>RIGHT</template>
    </Footer>
  </div>
</template>
<script>
import Footer from "../molecules/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>
