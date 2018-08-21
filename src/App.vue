<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Menu/>
    <Results/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Results from './components/Results.vue';

export default {
  name: 'app',
  components: {
    Menu, Results
  }
};
</script>

<style scoped>

</style>
