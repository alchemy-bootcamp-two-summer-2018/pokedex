<template>
    <ul>
        <Pokemon v-for="pokemon in pokemon"
            v-bind:key="pokemon.pokemon" 
            v-bind:pokemon="pokemon"/>
    </ul>
</template>

<script>
import pokedex from "../pokedex.js";

import Pokemon from "./Pokemon.vue";
export default {
    data() {
        return {
            pokemon: pokedex,
            type_1: pokedex
        };
    },
    components: {
        Pokemon
    }

}
</script>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
        grid-gap: 5px;
    }

</style>
