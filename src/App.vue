<template>
  <div id="app">
    <Header />
    <Results />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Results from './components/Results.vue';

export default {
  name: 'app',
  components: {
    Header,
    Results
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>