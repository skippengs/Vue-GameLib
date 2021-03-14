<template>
  <div class="search-wrapper">
    <input type="text" v-model="Search" placeholder="Search title.."/>
  </div>

</template>
<script>
//import gamelist from '@/games.json'
export default {
  name: 'Search',
  //gamesJson: gamelist,
  data (){
    return{
      Search: ''
    }
  },
  computed: {
    filteredList: function(){
      console.log(this.Search);
      let filteredList = this.$jsonlist;
      filteredList = filteredList.filter(post => { 
        return post.title.toLowerCase().includes(this.Search.toLowerCase());
      });

      filteredList.$emit('filteredList')
      return filteredList;
    }
  }
  
  
}
</script>
<style lang="scss" scoped>

</style>