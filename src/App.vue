<template>
  <Header />
  <router-view>
  </router-view>
</template>

<script>
import Header from './components/AppHeader';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>