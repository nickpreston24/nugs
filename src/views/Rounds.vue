<template>
  <div id="rounds-view">
    <div v-if="show.rounds" id="rounds-page">
      <AddRounds />
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

    <iframe
      class="airtable-embed"
      src="https://airtable.com/embed/shr3OhGRrERrqhP0e?backgroundColor=blue&layout=card&viewControls=on"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style="background: transparent; border: 1px solid #ccc"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: { rounds: true },
    };
  },
};
</script>
