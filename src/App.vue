<template>
  <div id="app">
        <h1>Pokedex</h1>
        <Results
          v-bind:pokemonList="pokemonData"/>
  </div>
</template>

<script>
import pokemonData from '../pokedex.js';
import Results from './components/Results.vue';

export default {
  name: 'app',
  data() {
    return { pokemonData };
  },
  components: {
    Results
  },
  methods: {

  }
}

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
