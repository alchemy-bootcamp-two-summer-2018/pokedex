<template>
  <ul>
    <Pokemon v-for="pokemon in pokemons"
      v-bind:key="pokemon.pokemon"
      v-bind:pokemon="pokemon"/>
  </ul>   
</template>

<script>
import pokedex from '../../pokedex.js';
import Pokemon from './Pokemon.vue';

export default {
  data() {
    return {
      pokemons: pokedex
    };
  },
  components: {
    Pokemon
  }
};
</script>

<style>

</style>
