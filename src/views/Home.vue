<template>
  <div>
    <parallax
      title="Ready to Build?"
      subtitle="😎"
      backgroundImage="https://picsum.photos/id/377/600/400"
      foregroundImage="https://laserwar.com/PromoPages/ar-15_ranger/images/body-ar15.png"
      description="Are you really into rifles? \nGreat!  Because we can help you.  \nYou choose a budget\n We suggest the parts.  \nGet a build in minutes!  \nSound good?\n\n Pick the categories you want, here:"
    />

    <!-- 
    <Row class="h-screen">
      <div
        class="text-midnight shadow-3xl bg-gradient-to-r from-purple-700 via-purple-300 to-medium-purple"
      >
        We need more lemon pledge...
      </div>

      <div
        class="w-auto text-midnight shadow-3xl bg-gradient-to-r from-arctic-500 via-ocean-300 to-pink-600"
      >
        We need more lemon pledge...
      </div>
    </Row>

    <ul class="gentle-flex">
      <button v-on:click="showRounds = !showRounds">
        {{ !showRounds ? "[+] Rounds" : "[-] Rounds" }}
      </button>

      <button v-on:click="showBuilds = !showBuilds">
        {{ !showBuilds ? "[+] Builds" : "[-] Builds" }}
      </button>

      <button v-show="false" v-on:click="showOrders = !showOrders">
        {{ !showOrders ? "[+] Orders" : "[-] Orders" }}
      </button>
      <button v-on:click="showParts = !showParts">
        {{ !showParts ? "[+] Parts" : "[-] Parts" }}
      </button>
    </ul>

    <div id="orders-page" v-if="showOrders">
     
      <div id="orders-view">

        <h2>Orders</h2>
        <i>Below are the current orders</i>
        <iframe
          v-if="false"
          class="airtable-embed"
          src="https://airtable.com/embed/shraaIuwqj2wm3n3z?backgroundColor=blue&viewControls=on"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style="background: transparent; border: 1px solid #ccc"
        ></iframe>
      </div>
    </div>

    <div id="builds-page" v-if="showBuilds">
      <add-builds />
      <div id="builds-view">
        <h2>Builds</h2>
        <i>Below are full sample builds</i>
        <iframe
          v-if="false"
          class="airtable-embed"
          src="https://airtable.com/embed/shrdyDkisxdh7HSkb?backgroundColor=blue&layout=card&viewControls=on"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style="background: transparent; border: 1px solid #ccc"
        ></iframe>
      </div>
    </div>

    <div id="parts-page" v-if="showParts">
      <add-parts />
      <parts-grid />
    </div>
-->
  </div>
</template>

<script>
import parallax from "../components/templates/parallax.vue";
import BlackHoleIcon from "../components/atoms/BlackHoleIcon.vue";
import Gradient from "../components/atoms/Gradient.vue";
import Button from "../components/atoms/Button.vue";
import Stack from "../components/flex/Stack.vue";
import Row from "../components/flex/Row.vue";

export default {
  name: "Home",
  components: {
    parallax,
    BlackHoleIcon,
    Gradient,
    Stack,
    Row,
  },
};
</script>
