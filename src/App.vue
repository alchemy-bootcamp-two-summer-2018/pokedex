<template>
  <div id="app">
    <header>
      <PokemonFilter v-bind:onFilter="handleFilter"/>
      <!-- <PokemonSort/> -->
    </header>
    <main>
      <Pokemons v-bind:filter="filter"/>
    </main>
  </div>
</template>

<script>

import Pokemons from './components/Pokemons.vue';
import PokemonFilter from './components/PokemonFilter.vue'



export default {
  name: 'app',
  data() {
    return {
      filter: {
        type: ''
      }
    }
  },
  components: {
    Pokemons,
    PokemonFilter,
    // PokemonSort
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
