<template>
  <div>
    <Header />
    <div class="ui container">
      <router-view>
      </router-view>
    </div>
  </div>
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