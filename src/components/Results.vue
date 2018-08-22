<template>
    <div class="">
        <Pokemon v-for="pokemon in pokedex"
        v-bind:key="pokemon.name"
        v-bind:pokemon="pokemon"/>
    </div>
</template>

<script>
import pokedex from '../services/pokedex.js';
import Pokemon from './Pokemon.vue';

export default {
  name: 'results',
  data() {
    return { pokedex: pokedex.getPokedex() };
  },
  components: {
    Pokemon
  }
};
</script>

<style>

</style>
