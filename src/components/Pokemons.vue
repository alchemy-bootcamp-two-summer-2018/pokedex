<template>
  <ul>
    <Pokemon v-for="pokemon in sortedPokemons"
      v-bind:key="pokemon.pokemon"
      v-bind:pokemon="pokemon"/>
  </ul>
</template>

<script>
import pokemonsApi from '../services/pokemonsApi';
import Pokemon from './Pokemon.vue';

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
      const { type } = this.filter;
      if(!type) return this.pokemons;
      return this.pokemons.filter(pokemon => {
        return pokemon.type_1 === type;
      });
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
    Pokemon
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