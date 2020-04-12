<template>
  <div class="ui medium images">
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
    margin-right: 30px;
  }
</style>