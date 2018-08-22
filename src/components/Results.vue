//create a results view of all the filtered pokemon tiles

<template>
  <ul>
    <Tile v-for="pokemon in sortedPokemons"
      v-bind:key="pokemon.pokemon"
      v-bind:pokemon="pokemon"/>
  </ul>
</template>

<script>
import pokemonsApi from '../services/pokemonsApi';
import Tile from './Tile.vue';

export default {
  props: {
    filter: Object,
    sort: Object
  },
  data() {
    return {
      pokemons: pokemonsApi.getPokemons() //get all pokemons in data file
    };
  },
  computed: {
    filteredPokemons() {
      const { type, min } = this.filter;
  
      // display all pokemons upon page load
      if(!type && !min) {
        return this.pokemons;
      }
      // filter according to min and/or type if either specified
      else {
        return this.pokemons.filter(pokemon => {
          return pokemon.attack >= (min || 0)
          && (
            !type || 
            (pokemon.type_1 === type || pokemon.type_2 === type)
          );
        });
      }
    },
    sortedPokemons() {
      let { sort, direction } = this.sort;

      // sort by pokemon name by default
      if(!sort) {
        sort = 'pokemon'; 
      }
      // sort in ascending or decending order based on direction chosen
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}
</style>