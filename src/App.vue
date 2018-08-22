<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header v-bind:types="types" v-bind:filter="filter" v-bind:sort="sort"/>
    <Results v-bind:sorted="sorted"/>
  </div>
</template>

<script>
import pokedex from '../pokedex.js';
import Header from './components/Header.vue';
import Results from './components/Results.vue';

export default {
  name: 'app',
  data(){
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
    Header,
    Results
  },
  computed: {
    filtered() {
      const { type } = this.filter;
      return this.pokedex.slice().filter(p => type === 'all' || p.type_1 === type || p.type_2 === type);
    },

    sorted() {
      return this.filtered;
    },

    types() {
      const typeOne = pokedex.map(pokemon => pokemon.type_1);
      const typeTwo = pokedex.map(pokemon => pokemon.type_2);
      const allTypes = new Set (typeOne.concat(typeTwo));

      return [...allTypes.values()];
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
