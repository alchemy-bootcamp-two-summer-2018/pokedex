<template>
<div>
    <h2>Results</h2>
    <ul>  
        <PokeTiles v-for="pokemon in pokemonList"
        v-bind:key="pokemon.id"
        v-bind:pokemonList="pokemon"/>
    </ul>
</div>
</template>

<script>
// import pokemonData from '../App.vue'
import PokeTiles from './PokeTiles.vue'

export default {
    props: {
        pokemonList: Array,
        filter: Object,
        sort: Object
    },

    components: {
        PokeTiles
    }

    // computed: {
    //     filteredPokemon() {
    //         let { type_1 } = this.filter;
    //         if(!size) return this.pokemon;

    //         return this.pokemon.filter(pokemon =>
    //         return pokemon.type_1 === type_1;
    //     });
    //     },

    //     return this.filteredPokemon.slice().sort((a, b) => {
    //         if(a[sort] > b[sort]) return 1 * direction;
    //         if(b[sort] > a[sort]) return -1 * direction;
    //         if(b[sort] === a[sort]) return 0;
    //     });
    }

</script>
<style>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 5px;
}
</style>
