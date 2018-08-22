<template>
    <div id="app">
      <header>
        <img src="./assets/pokemon2.jpg" alt="pokemon header">
        <h2>Filter by Type</h2>
        <PokemonFilter :onFilter="handleFilter"/>
        <h2>Sort by Attack, Defense, or Pokemon</h2>
        <Sort :onSort="handleSort"/>
      </header>
      <main>
          <Results :filter="filter"
            :sort="sort"/>
      </main>
    </div>
</template>

<script>
import Results from './components/Results.vue';
import PokemonFilter from './components/PokemonFilter.vue';
import Sort from './components/Sort';

export default {
  name: 'app',
  data() {
    return { 
      filter: {
        type: '',
        minSelected: 0
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
    handleSort(sort) {
      this.sort = sort;
    }
  }
};
</script>

<style>
  h1 {
    margin: 30px 20px 40px;
  }
  h2 {
    margin: 40px 20px 20px;
  }

  img {
    width: 100vw;
  }
</style>
