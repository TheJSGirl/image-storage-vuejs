<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="right menu">
        <a href="#" class="ui item" >Gallery</a>
        <a href="#" class="ui item" >Upload</a>
        <a href="#" class="ui item" @click="logout">Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout']),
    // methods: {
  //   // using spread operater you can add other methods 
  //   ...mapActions(['login']),

  // }
}
</script>