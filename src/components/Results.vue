<template>
  <ul>
    <Tile v-for="pokemon in pokemons"
      v-bind:key="pokemon.pokemon"
      v-bind:pokemon="pokemon"/>
  </ul>   
</template>

<script>

import Tile from './Tile.vue';

export default {
  props: {
    pokemons: Array
  },  
  components: {
    Tile
  }
};
</script>

<style scoped>
ul {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: auto auto auto;
  
}

</style>
