<template>
    <header>
      <PokemonFilter v-bind:onFilter="handleFilter"/>
      <PokemonSort v-bind:onSort="handleSort"/>
    </header>
</template>

<script>
import Pokemons from './Pokemons.vue';
import PokemonFilter from './PokemonFilter.vue';
import PokemonSort from './PokemonSort.vue';

export default {
  name: 'Header',
  data() {
    return {
      filter: {
        size: ''
      },
      sort: {
        sort: 'name',
        direction: 1
      }
    };
  },
  components: {
    Pokemons,
    PokemonFilter,
    PokemonSort
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