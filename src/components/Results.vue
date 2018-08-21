<template>
<div>
    <h2>Results</h2>
    <PokeTiles v-for="pokemon in pokemonList"
    v-bind:key="pokemon.id"
    v-bind:pokemonList="pokemon"/>
</div>
</template>

<script>
// import pokemonData from '../App.vue'
import PokeTiles from './PokeTiles.vue'
export default {
    props: {
        pokemonList: Array
    },
    components: {
        PokeTiles
    }
}
</script>
<style>

</style>
