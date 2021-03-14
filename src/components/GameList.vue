<template>
  <div class="events container">
    <div class="row">
      <div class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <Search/>
            </div>
              <!-- <div v-else v-for="data in $options.gamesJson" class="col-md-4">
                {{data}}
                <router-link :to="'/game/' + game.id">
                  <GameCard :game="game" />
                </router-link>
              </div> -->
              
              <div v-for="data in filteredList" :game="data" :key="data.id" class="col-md-6">
                <router-link :to="'/game/' + data.id">
                  <GameCard :game="data" />
                </router-link>
              </div>
              
              <div v-for="data in this.$jsonlist" :game="data" :key="data.id" class="col-md-6">
                <router-link :to="'/game/' + data.id">
                  <GameCard :game="data" />
                </router-link>
              </div>

          </div>
        </div>
    </div>
    
      
  </div>
</template>
<!-- 
  <div class="events container">
    <h2 class="subtitle is-3">
    Check out our upcoming events
    </h2>
    <div class="columns is-multiline">
      <div v-for="event in events" :event="event" :key="event.id" class="column is-one-quarter">
        <router-link :to="'/event/' + event.id">
          <EventCard :event="event" />
        </router-link>
      </div>
    </div>
  </div> -->
<script>
  import GameCard from '@/components/GameCard';
  import Search from '@/components/partials/Search';
  export default {
    name: 'GameList',
    components : {
      GameCard,
      Search
    }
    
  }
</script>
<style lang="scss" scoped>

</style>