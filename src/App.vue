<template>
  <div id="app">
    <header>
      <img alt="Pokemon logo" src="./assets/logo.png" width="400px">
      <PokemonFilter v-bind:onFilter="handleFilter"/>
    </header>
    <main>
      <Results v-bind:filter="filter"/>
    </main>
    
  </div>
</template>

<script>

import pokedex from '../pokedex.js';
import Results from './components/Results.vue';
import PokemonFilter from './components/PokemonFilter.vue';
// import PokemonSort from './components/PokemonSort.vue';

export default {
  name: 'app',
  data() {
    return {
      filter: {
        type: ''
      },
      pokemons: pokedex
    };
  },
  components: {
    Results,
    PokemonFilter    
  },
  methods: {
    handleFilter(filter) {
      this.filter = filter;
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
