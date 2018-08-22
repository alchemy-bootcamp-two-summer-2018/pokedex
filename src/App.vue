<template>
<div id="app">
  <header>
    <Sort v-bind:onSort="handleSort"/>
  </header>
   <div class="results">
      <Results v-bind:pokemonList="pokemonData"
      v-bind:filter="pokemonFilter"
      v-bind:sort="sort"/> 
   </div>
</div>
</template>

<script>
// import PokemonFilter from './components/Filter.vue'
import Sort from './components/Sort.vue'
import Results from './components/Results.vue'
import pokemonData from '../pokedex.js'


export default {
   name: 'app',
  data() {
    return {
      pokemonData,
      pokemonFilter: {
        attack:''
      },

      sort: {
        sort: 'pokemon',
        direction: 1
      }
    };
  },


components: {
    
    Sort,
    Results
  },

   methods:{

  // getAttacks(allAttacks) {

  //   this.allAttacks = pokemonData.map(pokemon => {
  //    return pokemon.this.attack;

  //  });
  //  let seen = '';

  //  this.attacks = allAttacks.filter(attack =>{
  //    if(seen[attack]) return false;
  //    seen [attack] = true;
  //    return true;
  //  });
  // },

    //  handleFilter(pokemonFilter) {
    //   this.pokemonFilter = pokemonFilter;
    // },

    handleSort(sort) {
      this.sort = sort;
    }

  }

}
</script>

<style>
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
 
}

.results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  max-width: 1400px;
  
}
header {
  background: #297fca;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>
