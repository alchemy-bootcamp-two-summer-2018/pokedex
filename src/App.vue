<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header v-bind:types="types" v-bind:filter="filter"/>
    <Results v-bind:list="list"/>
  </div>
</template>

<script>
import pokemon from '../pokedex.js';
import Header from './components/Header.vue';
import Results from './components/Results.vue';

export default {
  name: 'app',
  data(){
    return {
      pokemon,
      filter: {
        type: 'all'
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
      return this.pokemon.slice().filter(p => type === 'all' || p.type_1 === type || p.type_2 === type);
    },

    list() {
      return this.filtered;
    },

    types() {
      const typeOne = pokemon.map(p => p.type_1);
      const typeTwo = pokemon.map(p => p.type_2);
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
