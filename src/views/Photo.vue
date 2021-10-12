<template>
<div>
  <Gallery/>
  <Photo />
</div>
</template>

<script>
import Photo from '../components/atoms/Photo.vue'
import Gallery from '../components/examples/Gallery.vue';

export default {
  name: 'photo',
  components: {
    Gallery,
    Photo
  },
};
</script>