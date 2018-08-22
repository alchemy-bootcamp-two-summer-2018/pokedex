<template>
    <div>
        <Pokemon v-for="pokemon in sortedPokedex"
          :key="pokemon.pokemon"
          :pokemon="pokemon"/>
    </div>
</template>

<script>
import pokedex from '../services/pokedex.js';
import Pokemon from './Pokemon.vue';

export default {
  props: {
    filter: Object,
    sort: Object
  },
  data() {
    return { 
      pokedex: pokedex.getPokedex()
    };
  },
  computed: {
    filteredPokedex() {
      const { type } = this.filter;
      if(!type) return this.pokedex;

      return this.pokedex.filter(pokemon => {
        if(pokemon.type_1 === type || pokemon.type_2 === type) {
          return pokemon;
        }
      });
    },
    sortedPokedex() {
      let { sort, direction } = this.sort;
      if(!sort) {
        sort = 'pokemon';
      }

      return this.filteredPokedex.slice().sort((a, b) => {
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

<style>


</style>
