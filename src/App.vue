<template>
<div id="app">
  <header>
  <div class="title">
    <h1> POKEMON DICTONARY </h1>
    <p> filter and sort your favorit pokemon </p>
  </div>
    <PokemonFilter v-bind:onFilter="handleFilter"/>
    <Sort v-bind:onSort="handleSort"/>
  </header>
  <main class="results">
    <Results 
    v-bind:filter="filter" 
    v-bind:sort="sort"
    v-bind:pokemons="pokemonData"/>
  </main>
</div>
</template>

<script>
import pokemonData from '../pokedex.js';
import Results from './components/Results.vue';
import PokemonFilter from './components/PokemonFilter.vue';
import Sort from './components/Sort.vue';

export default {
  name: 'app',
  data() {
    return {
      pokemonData: pokemonData.getPokemon(),
      filter: {
        attack:'',
        type: ''
      },
      sort: {
        sort: 'pokemon',
        direction: 1
      }
    };
  },

  components: {
    Results,
    PokemonFilter,
    Sort
  },

  methods: {
    handleFilter(filter) {
      this.filter = filter;
    },
    handleSort(sort){
      this.sort = sort;
    }
  },
};
</script>

<style>
</style>
