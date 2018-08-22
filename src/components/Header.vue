<template>
    <header>
      <PokemonFilter v-bind:onFilter="onFilter"/>
      <PokemonSort v-bind:onSort="onSort"/>
    </header>
</template>

<script>
import PokemonFilter from './PokemonFilter.vue';
import PokemonSort from './PokemonSort.vue';

export default {
  props: {
    onFilter: Function,
    onSort: Function
  },
  components: {
    PokemonFilter,
    PokemonSort
  }
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
