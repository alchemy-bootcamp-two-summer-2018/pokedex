<template>
    <ul>
        <Pokemon v-for="pokemon in pokemons"
            v-bind:key="pokemon.pokemon" 
            v-bind:pokemon="pokemon"/>
    </ul>
</template>

<script>
import pokedex from "../pokedex.js";
import type from "./type.js";
import Pokemon from "./Pokemon.vue";
export default {
    props: {
        filter: Object
    },
    data() {
        return {
            pokemons: pokedex,
            type_1: pokedex,
            attack: pokedex,
            defense: pokedex,
            url_image: pokedex,
            types: type.getPokemons(),
        };
    },
    computed: {
        filteredPokemons() {
            
            const { type } = this.filter;
            if (!type) return this.pokemons;

            return this.pokemons.filter(pokemon => {
                return pokemon.type === type;
            });
        }
    },
    components: {
        Pokemon
    }

}
</script>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
        grid-gap: 5px;
    }

</style>
