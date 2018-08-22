<template>
  <ul>
    <Tile v-for="pokemon in sortedPokemons"
      v-bind:key="pokemon.pokemon"
      v-bind:pokemon="pokemon"/>
  </ul>   
</template>

<script>

import Tile from './Tile.vue';

export default {
  props: {
    filter: Object,
    sort: Object,
    pokemons: Array
  },
  computed: {
    filteredPokemons() {
      const { type } = this.filter;
      if(!type) return this.pokemons;

      return this.pokemons.filter(pokemon => {
        return pokemon.type_1 === type;
      });
    },
    sortedPokemons() {
      let { sort, direction } = this.sort;
      if(!sort) {
        sort = 'pokemon';
      }

      return this.filteredPokemons.slice().sort((a, b) => {
        if(a[sort] > b[sort]) return 1 * direction;
        if(b[sort] > a[sort]) return -1 * direction;
        if(b[sort] === a[sort]) return 0;
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
