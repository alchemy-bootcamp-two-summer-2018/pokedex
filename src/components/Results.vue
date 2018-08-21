<template>
  <ul>
    <Tile v-for="pokemon in pokemons"
      v-bind:key="pokemon.pokemon"
      v-bind:pokemon="pokemon"/>
  </ul>   
</template>

<script>
import pokedex from '../../pokedex.js';
import Tile from './Tile.vue';

export default {
  data() {
    return {
      pokemons: pokedex
    };
  },
  components: {
    Tile
  }
};
</script>

<style>

</style>
