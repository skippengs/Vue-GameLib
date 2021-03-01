new Vue({
  el: '#app',
  data () {
    
    return {
    	id: null,
		gameList: null,
		loading: true,
		errored: false,
		checkedPlatforms: [],
		vendorData: [],
		platformData: [],
		ownedBoolean: false,
		pricerange: 0,
		selectedVendor: null,
		search: ''
    }
  },

  mounted () {
    axios.get('https://games.skippyweb.nl/games.json')
    .then(response => {
		this.gameList = response.data;
		for (let i = 0; i < this.gameList.length; i++) {
			if(this.gameList[i].vendor){
				var existsVendor  = this.vendorData.includes(this.gameList[i].vendor.toLowerCase());
				if(existsVendor === false){
					this.vendorData.push(this.gameList[i].vendor.toLowerCase());
				}
			}
			if(this.gameList[i].platform){
				var existsPlatform  = this.platformData.includes(this.gameList[i].platform);
				if(existsPlatform === false){
					this.platformData.push(this.gameList[i].platform);
				}
			}

			
			
		}
  	})
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  },

  computed: {
    filteredList: function(){
    	let filteredList = this.gameList;

		filteredList = filteredList.filter(post => { 
			return post.title.toLowerCase().includes(this.search.toLowerCase());
		});
		if (this.checkedPlatforms.length > 0){
			filteredList = filteredList.filter(post => {
		 		return this.checkedPlatforms.includes(post.platform);
			});
		}

		if (this.ownedBoolean){
			filteredList = filteredList.filter(post => {
				return post.owned === true;
			});
		} 

		if (this.pricerange > 0){
			filteredList = filteredList.filter(post => {
				return post.priceBought >= this.pricerange;
			});
		}

		if (this.selectedVendor != null){
			filteredList = filteredList.filter(post => {
				return post.vendor.includes(this.selectedVendor);
			});
		} 


		
          

      return filteredList;
        
      
    },
    sortedArray: function() {
      function compare(a, b) {
        if (a < b)
          return -1;
        if (a > b)
          return 1;
        return 0;
      }

      return this.platformData.sort(compare);
    }
 
 //    filteredProjects: function(){
	//   let filterProjects = this.projects;

	//   if (this.checkedHealths.length > 0){
	//     filterProjects = filterProjects.filter(project => {
	//       return this.checkedHealths.includes(project.Health);
	//     })
	//   }

	//   if (this.checkedStatuses.length > 0){
	//     filterProjects = filterProjects.filter(project => {
	//       return this.checkedStatuses.includes(project.Status)
	//     })
	//   }

	//   return filterProjects;
	// }
  }
});