<template>
  <div class="search-wrapper">
    <input type="text" v-model="Search" placeholder="Search title.."/>
  </div>

</template>
<script>
import gamelist from '@/games.json'
export default {
  name: 'Search',
  gamesJson: gamelist,
  data (){
    return{
      Search: ''
    }
  },
  computed: {
    filteredList: function(){
      let filteredList = this.gamesJson;
      filteredList = filteredList.filter(post => { 
        return post.title.toLowerCase().includes(this.Search.toLowerCase());
      });

      return filteredList;
    }
  }
  
  
}
</script>
<style lang="scss" scoped>

</style>