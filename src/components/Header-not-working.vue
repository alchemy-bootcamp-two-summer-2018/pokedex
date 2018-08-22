<template>
    <header>
      <PokemonFilter v-bind:onFilter="handleFilter"/>
      <PokemonSort v-bind:onSort="handleSort"/>
    </header>
</template>

<script>
import PokemonFilter from './PokemonFilter.vue';
import PokemonSort from './PokemonSort.vue';

export default {
  data() {
    return {
      filter: {
        type: '',
        min: 0
      },
      sort: {
        sort: 'pokemon',
        direction: 1
      },
      onHeader: Function
    };
  },
  components: {
    PokemonFilter,
    PokemonSort
  },
  methods: {
    handleFilter(filter) {
      this.filter = filter;
    },
    handleSort(sort) {
      this.sort = sort;
    },
    ///// ahhhhhhhhhh trying to separate out header
    handleHeader() {
      const filter = this.filter;
      const sort = this.sort;
      this.onFilter(filter);
      this.onSort(sort);
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
