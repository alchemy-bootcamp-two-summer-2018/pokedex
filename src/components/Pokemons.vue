<template>
    <ul>
        <Pokemon v-for="pokemon in pokemons"
            :key="pokemon.pokemon"
            :pokemon="pokemon"
        />
    </ul>
</template>

<script>
import pokedex from '../pokedex.js';
import Pokemon from './Pokemon.vue';

export default {
    props: {
        filter: Object,
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
            const { type } = this.filter;
            if (!type) return this.pokemons;

            return this.pokemons.filter(pokemeon => {
                return pokemon.type_1 === type;
            });
        },
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
