<template>
  <div class="ui medium images custom-image">
    <img  class="ui image" v-for="(image, index) in allImages" :key="index" :src="image.link" />
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
    margin: 10px;
  }
</style>