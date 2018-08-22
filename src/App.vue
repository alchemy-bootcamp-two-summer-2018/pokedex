<template>
    <div id="app">
      <header>
        <PokemonFilter :onFilter="handleFilter"/>
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
