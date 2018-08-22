<template>
  <div id="app">
    <Header/>
    <Menu/>
    <Results v-bind:list="list"/>
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
      return this.pokedex.slice().filter( () => type === 'all');

    },
    list() {
      
      return this.filtered;
    }
  }
};
</script>

<style scoped>






</style>
