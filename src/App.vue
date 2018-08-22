<template>
  <div id="app">
    <header>
      <PokemonFilter v-bind:onFilter="handleFilter"/>
      <PokemonSort v-bind:onSort="handleSort"/>
    </header>
    <!-- <Header /> -->
    <main>
      <Pokemons v-bind:filter="filter"
        v-bind:sort="sort"/>
    </main> -->
  </div>
</template>

<script>
import Pokemons from './components/Pokemons.vue';
import PokemonFilter from './components/PokemonFilter.vue';
import PokemonSort from './components/PokemonSort.vue';
import Header from './components/Header.vue';

export default {
  name: 'app',
  data() {
    return {
      filter: {
        attack: ''
      },
      sort: {
        sort: 'pokemon',
        direction: 1
      }
    };
  },
  components: {
    // Header,
    Pokemons,
    PokemonFilter,
    PokemonSort,

  },
  methods: {
    handleFilter(filter) {
      this.filter = filter;
    },
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
  color: #2c3e50;
}
</style>
