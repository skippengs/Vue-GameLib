<template>
  <div class="game-single container">
    <div class="row">
      <div class="col-md-12">
        <h1>{{game.title}}</h1>
        <span>Owned: {{game.owned}}</span><br>
        <span>playerCount: {{game.playerCount}}</span><br>
        <span>priceBought: {{game.priceBought}}</span><br>
        <span>vendor: {{game.vendor}}</span><br>
        <span>platform: {{game.platform}}</span><br>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'GameSingle',
  //gamesJson: gamelist,
  created() {
    const ID = Number(this.$route.params.id);
    let game = this.game.find(game => game.id === ID);
    this.game = game;

    
  },
  data: function() {
    return {
      game: this.$jsonlist, // passing array data into Vue
    };
  },

  mounted: function() {
    // Checking if everything works, delete this right after you see that everything works
    console.log(this.game);
  }
  
}
</script>