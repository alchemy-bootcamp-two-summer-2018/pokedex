<template>
  <ul>
    <Tile v-for="pokemon in filteredPokemons"
      v-bind:key="pokemon.pokemon"
      v-bind:pokemon="pokemon"/>
  </ul>   
</template>

<script>

import Tile from './Tile.vue';

export default {
  props: {
    filter: Object
  },
  computed: {
    filteredPokemons() {
      const { type } = this.filter;
      if(!type) return this.pokemons;

      return this.pokemons.filter(pokemon => {
        return pokemon.type === type;
      });
    }
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
