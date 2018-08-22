<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header/>
    <Results v-bind:sort="sort"/>
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
      pokemon
    };
  },
  components: {
    Header,
    Results
  },
  computed: {
    filtered() {
      return this.pokemon;
    },

    sort() {
      return this.filtered;
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
