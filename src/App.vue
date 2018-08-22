<template>
  <div id="app">
    <Header/>
    <Menu 
      v-bind:filter="filter"
      v-bind:types="types"
    />
    <Results 
      v-bind:list="list"
    />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';
import Results from './components/Results.vue';
import pokedex from './services/pokedex.js';


export default {
  name: 'app',
  data() {
    return {
      pokedex,
      filter: {
        type: 'all'
      }
    };
  },
  components: {
    Header, Menu, Results, Footer
  },
  computed: {
    filtered() {
      const { type } = this.filter;
      return this.pokedex.slice().filter(pokemon => type === 'all' || pokemon.type_1 === type || pokemon.type_2 === type);

    },
    list() {
      
      return this.filtered;
    },
    types() {
      const type1 = this.pokedex.map(pokemon => pokemon.type_1);
      const type2 = this.pokedex.map(pokemon => pokemon.type_2);
      const allTypes = new Set(type1.concat(type2));
      return [...allTypes.values()];
    }

  }
};
</script>

<style scoped>






</style>
