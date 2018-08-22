<template>
 <div>
<header>
  <Filter v-bind:onSort="handleFiler"/>
  <Sort v-bind:onSort="handleSort"/>
  </header>
    <Results v-bind:pokemonList="pokemonData"
    v-bind:filter="filter"
     v-bind:sort="sort"/> 
  </div>
</template>

<script>
import Filter from './components/Filter.vue'
import Sort from './components/Sort.vue'
import Results from './components/Results.vue'
import pokemonData from '../pokedex.js'

export default {
   name: 'app',
  data() {
    return {
      pokemonData,
      filter: {
        ability_1:''
      },

      sort: {
        sort: 'pokemon',
        direction: 1
      }
    };
  },

components: {
    Filter,
    Sort,
    Results
  },

   methods:{
     handleFilter(filter) {
      this.filter = filter;
    },

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
</style>
