<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Results v-bind:pokemon="pokemon"/>
  </div>
</template>

<script>
import pokemon from '../pokedex.js';
import Results from './components/Results.vue';

export default {
  name: 'app',
  data(){
    return {
      pokemon
    };
  },
  components: {
    Results
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
