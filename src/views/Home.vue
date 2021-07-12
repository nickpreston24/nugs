<template>
  <div class="home">
    <ul class="gentle-flex">
      <button v-on:click="showRounds = !showRounds">
        {{ !showRounds ? "[+] Rounds" : "[-] Rounds" }}
      </button>

      <button v-on:click="showBuilds = !showBuilds">
        {{ !showBuilds ? "[+] Builds" : "[-] Builds" }}
      </button>

      <button v-on:click="showOrders = !showOrders">
        {{ !showOrders ? "[+] Orders" : "[-] Orders" }}
      </button>

      <button v-on:click="showParts = !showParts">
        {{ !showParts ? "[+] Parts" : "[-] Parts" }}
      </button>
    </ul>

    <div v-if="showRounds" id="rounds-page">
      <AddRounds />
      <div id="rounds-view">
        <iframe
          v-if="false"
          class="airtable-embed"
          src="https://airtable.com/embed/shr3OhGRrERrqhP0e?backgroundColor=blue&layout=card&viewControls=on"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style="background: transparent; border: 1px solid #ccc"
        ></iframe>
      </div>
    </div>

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
import AddRounds from "@/components/rounds/AddRounds.vue";
import AddBuilds from "@/components/builds/AddBuilds.vue";
import AddParts from "@/components/parts/AddParts.vue";
import PartsGrid from "../components/parts/PartsGrid.vue";
export default {
  data() {
    return {
      // todo: phase these out as routes instead of toggles
      showRounds: false, // db
      showOrders: false,
      showBuilds: false,
      showParts: false,
    };
  },
  name: "Home",
  components: {
    AddRounds,
    AddBuilds,
    AddParts,
    PartsGrid,
    // AddOrders,  // todo: make an UpdateOrdders view
  },
};
</script>