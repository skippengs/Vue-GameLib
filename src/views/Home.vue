<template>
<div class="home">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="title">
          Game Library        
        </h1>
      </div>
    </div>
        
        
		
  </div>
  <GameList />
</div>
</template>
<script>
import GameList from '../components/GameList';
export default {
  name: 'home',
  components: {
    GameList
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    }
  }
}
</script>
<style lang="scss" scoped>
  
</style>