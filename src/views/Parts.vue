<template>
  <div class="parts">

    <PartsGallery />
    <!-- <PartPhoto/> -->
    <!-- <Button>+</Button> -->
    <!-- 

    <iframe
      v-if="false"
      class="airtable-embed"
      src="https://airtable.com/embed/shreqIf5JuPgS9pyq?backgroundColor=blue"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style="background: transparent; border: 1px solid #ccc"
    ></iframe> -->
    
  </div>
</template>
<script>
import Button from "../components/atoms/Button.vue";
import PartsGallery from "../components/examples/PartsGallery.vue";
import PartPhoto from '../components/parts/PartPhoto.vue';
export default {
  name: 'parts',
  // data() {
  //   return {
  //     addButton: {
  //       show: true,
  //       class: "",
  //       text: "New Part",
  //     },
  //   };
  // },
  // methods: {
  //   toggleButton() {
  //     // this.addButton = { ...this.addButton };
  //     // this.$refs.btnToggle.innerText = this.addButton.show? false : true;
  //   },
  // },
  components: {
    PartsGallery,
    // PartPhoto,
    // Button,
    // Photo,
  },
};
</script>
