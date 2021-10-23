<template>
  <div>
    <PartsGallery />
    <PartPhoto />
  </div>
</template>
<script>
import PartsGallery from "../components/parts/PartsGallery.vue";
import PartPhoto from "../components/parts/PartPhoto.vue";
export default {
  name: "part",
  components: {
    PartPhoto,
    PartsGallery,
  },
};
</script>
