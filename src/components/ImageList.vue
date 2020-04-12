<template>
  <div class="ui medium images image-container">
    <img  class="ui image custom-image" v-for="(image, index) in allImages" :key="index" :src="image.link" />
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';

export default {
  name: 'ImageList',
  computed: mapGetters(['allImages']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
  .custom-image {
    max-width: 100%;
    padding: 5px;
  }
  .image-container {
    column-count: 3;
    column-gap: 0;
  }
</style>