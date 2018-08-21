<template>
  <div id="app">
    <main>
      <Results v-bind:pokedex="pokedex"/>
    </main>
  </div>
</template>

<script>
import pokedex from './services/pokedex.js';
import Results from './components/Results.vue';

export default {
  name: 'app',
  data() {
    return { pokedex: pokedex.getPokedex() };
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
