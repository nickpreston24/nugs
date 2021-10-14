<template>
<div>
  <Gallery/>
  <PartPhoto/>
</div>
</template>

<script>
import Gallery from '../components/examples/Gallery.vue';
import PartPhoto from '../components/parts/PartPhoto.vue';

export default {
  name: 'part-photo',
  components: {
    Gallery,
    PartPhoto,
  },
};
</script>