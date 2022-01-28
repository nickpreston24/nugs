<template>
  <div id="rounds-view">
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
  data(){
    return {
      showRounds: false
    }
  }
}
</script>