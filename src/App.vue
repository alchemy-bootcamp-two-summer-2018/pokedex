<template>
  <div id="app">
    <Header v-bind:sort="sort" v-bind:filter="filter" v-bind:types="types"/>
    <Results v-bind:list="list"/>
  </div>
</template>

<script>
import pokedex from './services/pokedex.js';
import Results from './components/Results.vue';
import Header from './components/Header.vue';

export default {
  name: 'app',
  data() {
    return { 
      pokedex,
      filter: {
        type: 'all'
      },
      sort: {
        props: 'id'
      }
    };
  },
  components: {
    Results,
    Header
  },
  computed: {
    filtered() {
      const { type } = this.filter;
      return this.pokemon.slice().filter(p => type === 'all' || p.type_1 === type || p.type_2 === type);
    },
    list() {
      const { props } = this.sort;
      return this.filtered.slice().sort((a, b) => {
        const propA = a[props];
        const propB = b[props];
        if(propA > propB) return 1;
        if(propA < propB) return -1;
        return 0;
      });
    },
    types() {
      const typeOne = this.pokemon.map(p => p.type1);
      const typeTwo = this.pokemon.map(p => p.type_2);
      const set = new Set(typeOne.caoncat(typeTwo));
      return [...set.values()];
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
