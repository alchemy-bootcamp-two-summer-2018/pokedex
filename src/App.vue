<template>
  <div id="app">
    <Header/>
    <Menu/>
    <Results/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
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
    Header, Menu, Results
  }
};
</script>

<style scoped>






</style>
