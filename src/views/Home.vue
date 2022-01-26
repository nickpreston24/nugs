<template>
  <div class="home">
    <parallax
      title="Ready to build?!"
      subtitle="(We know we are!)"
      backgroundImage="https://picsum.photos/id/377/600/400"
      foregroundImage="https://laserwar.com/PromoPages/ar-15_ranger/images/body-ar15.png"
      description="Are you really into rifles?  Great!  Because we don't have a clue what you want in your next build...  Fortunately for you (and the sake of humanity), you have two options: 1) Go to 100 different rifle manufacturers and create a spreadsheet - OR - (literally) choose a budget and start buying.  Sound good?  (we know you said 'Yes')"
    />
    <!-- 
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
-->

    <!-- Todo: Once the form is created for each of these pages, refactor both view and form -->
    <div id="orders-page" v-if="showOrders">
      <!-- <add-orders /> -->
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
  </div>
</template>

<script>
import parallax from "../components/templates/parallax.vue";
export default {
  name: "Home",
  components: {
    parallax,
  },
};
</script>
