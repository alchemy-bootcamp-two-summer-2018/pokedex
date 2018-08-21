<template>
  <div id="app">
    <img alt="Pokemon logo" src="./assets/logo.png" width="400px">
    <header>
      <PokemonFilter />
    </header>
    <main>
      <Results v-bind:pokemons="pokemons"/>
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
      pokemons: pokedex
    };
  },
  components: {
    Results,
    PokemonFilter    
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
