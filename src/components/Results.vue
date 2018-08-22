<template>
<div class="results">
    <ul>
    <h2> Pokemon</h2>

    <PokemonCard v-for="pokemon in pokemonSorted"
    v-bind:key="pokemon.id"
    v-bind:pokemonList="pokemon"/>
    </ul>
</div>
</template>

<script>
import PokemonCard from './PokemonCard.vue';

export default {

    props:{
        sort: Object,
        pokemonList: Array
    },

    computed:{
    
    pokemonFilter(){
        return this.pokemonList;
    },

    pokemonSorted() {
      let { sort, direction } = this.sort;
      if(!sort) {
        sort = 'name';
      }
      return this.pokemonFilter.slice().sort((a, b) => {
        if(a[sort] > b[sort]) return 1 * direction;
        if(b[sort] > a[sort]) return -1 * direction;
        if(b[sort] === a[sort]) return 0;
        });
        }
    },

    components:{
            PokemonCard
        }
}

</script>
<style>

ul{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 5px
}

.results {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
}

</style>