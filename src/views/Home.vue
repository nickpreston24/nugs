<template>
  <div>
    <parallax
      backgroundImage="https://picsum.photos/id/377/600/400"
      foregroundImage="https://laserwar.com/PromoPages/ar-15_ranger/images/body-ar15.png"
      description="Are you really into rifles? \nGreat!  This tool will help you!  \nYou choose a budget\n We suggest the parts.  \nGet a build in minutes!  \nSound good?\n\n Let's begin..."
    />
  </div>
</template>

<script>
import parallax from "../components/templates/parallax.vue";
import BlackHoleIcon from "../components/atoms/BlackHoleIcon.vue";
import Gradient from "../components/atoms/Gradient.vue";
import Stack from "../components/flex/Stack.vue";
import Row from "../components/flex/Row.vue";
import { collapsed } from "../components/organisms/sidebar/useSidebar";

export default {
  name: "Home",
  data() {
    return {};
  },

  mounted() {
    setTimeout(() => {
      collapsed.value = true;
    }, 3000);
  },
  components: {
    parallax,
    BlackHoleIcon,
    Gradient,
    Stack,
    Row,
  },
};
</script>
