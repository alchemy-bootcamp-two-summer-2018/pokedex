<template>
    <main>
      <Pokemons v-bind:filter="filter"
        v-bind:sort="sort"/>
    </main>
</template>

<script>
import Pokemons from './Pokemons.vue';
import PokemonFilter from './PokemonFilter.vue';
import PokemonSort from './PokemonSort.vue';

export default {
  name: 'Results',
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
    Pokemons
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