<template>
  <div class="card">
    <h3>{{ game.title }} - {{ game.platform }}</h3>
    <span>owned: {{ game.owned }}</span><br>
    <span>playerCount: {{ game.playerCount }}</span><br>
    <span>priceBought: {{ game.priceBought }}</span><br>
    <span>vendor: {{ game.vendor }}</span>
  </div>
</template>

<!-- <div class="card p-2">
  <h3>{{ game.title }} - {{ game.platform }}</h3>
    <span>owned: {{ game.owned }}</span><br>
    </span>playerCount: {{ game.playerCount }}</span><br>
    </span>priceBought: {{ game.priceBought }}</span><br>
    </span>vendor: {{ game.vendor }}</span>
</div> -->
<script>
export default {
  props: [
    'game'
  ]
}
</script>
<style lang="scss" scoped>
  
</style>