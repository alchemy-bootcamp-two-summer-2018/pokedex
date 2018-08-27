<template>
  <ul class="ul">
      <PokemonCard v-for="pokemon in pokemonSorted"
      v-bind:key="pokemon.pokemon"
      v-bind:pokemon="pokemon"/>
  </ul>
</template>

<script>
import pokemonData from '../../pokedex.js';
import PokemonCard from './PokemonCard.vue';

export default {
  props:{
    filter: Object,
    sort: Object,
  },
  data() {
    return {
      pokemons: pokemonData.getPokemon()
    };
  },
  computed:{
    pokemonFiltered() {
      const { type } = this.filter;
      if(!type) return this.pokemons;
      return this.pokemons.filter(pokemon => {
        return pokemon.type_1 === type;
      });
    },
    pokemonSorted() {
      let { sort, direction } = this.sort;
      if(!sort) {
        sort = 'pokemon';
      }
      return this.pokemonFiltered.slice().sort((a, b) => {
        if(a[sort] > b[sort]) return 1 * direction;
        if(b[sort] > a[sort]) return -1 * direction;
        if(b[sort] === a[sort]) return 0;
      });
    }
  },  
  components: {
    PokemonCard
  }
};
</script>
<style>
</style>