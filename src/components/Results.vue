<template>
  <ul>
    <Tile v-for="pokemon in sortedPokemons"
      v-bind:key="pokemon.pokemon"
      v-bind:pokemon="pokemon"/>
  </ul>
</template>

<script>
import pokemonsApi from '../services/pokemonsApi_short';
import Tile from './Tile.vue';

export default {
  props: {
    filter: Object,
    sort: Object
  },
  data() {
    return {
      pokemons: pokemonsApi.getPokemons()
    };
  },
  computed: {
    filteredPokemons() {
      const { type, min } = this.filter;
      if(!type && !min) {
        console.log('1', 'min', min, 'type', type);
        return this.pokemons;
      }
      else if(!type){
        return this.pokemons.filter(pokemon => {
          return pokemon.attack > min;
        });
      }
      else {
        return this.pokemons.filter(pokemon => {
          return pokemon.attack >= min 
          && (pokemon.type_1 === type || pokemon.type_2 === type);
        });
      }
    },
    sortedPokemons() {
      let { sort, direction } = this.sort;
      if(!sort) {
        sort = 'pokemon'; //pokemon or name?
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}
</style>