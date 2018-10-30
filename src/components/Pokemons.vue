<template>
    <ul>
        <Pokemon v-for="pokemon in sortedPokemons"
            :key="pokemon.pokemon"
            :pokemon="pokemon"
        />
    </ul>
</template>

<script>
import data from './data.js'
import pokedex from '../pokedex.js';
import Pokemon from './Pokemon.vue';

export default {
    props: {
        filter: Object,
        sort: Object
    },
    data() {
        return {
            pokemons: pokedex,
        }
    },
    components: {
        Pokemon,
    },
    computed:{
        
        filteredPokemons() {
            const { type, attack } = this.filter;
            if (!type && (attack || 0) <=0) return this.pokemons;

            return this.pokemons.filter(pokemon => {
                return (
                    (!type || pokemon.type_1 === type) &&
                    (!attack || pokemon.attack > attack)
                );                    ;
            });
        },
        sortedPokemons() {
            let { sort, direction } = this.sort;
            if (!sort) {
                sort = 'pokemon'
            }

            return this.filteredPokemons.slice().sort((a, b) => {
                if(a[sort] > b[sort]) return 1 * direction;
                if(b[sort] > a[sort]) return -1 * direction;
                if(b[sort] === a[sort]) return 0;
            });
        }
    }
}
</script>

<style>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}
</style>
