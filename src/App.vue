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
      pokedex
    };
  },
  components: {
    Header, Menu, Results, Footer
  },
  computed: {
    list() {
      return this.pokedex;
    }
  }
};
</script>

<style scoped>






</style>
