<template>
  <div id="app">
        <header>        
          <Sort
          v-bind:onSort="handleSort"/>
        </header>
        <h1>Pokedex</h1>
        <Results
          v-bind:pokemonList="pokemonData"
          v-bind:sort="sort"/>

  </div>
</template>

<script>
import pokemonData from '../pokedex.js';
import Results from './components/Results.vue';
import Sort from './components/Sort.vue';

export default {
  name: 'app',
  data() {
    return { 
        pokemonData,
        sort: {
          sort: 'name',
          direction: 1
        }
    }
  },

  components: {
    Results,
    Sort
  },

  methods: {
   handleSort(sort) {
     this.sort = sort;
   }
  }

};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
