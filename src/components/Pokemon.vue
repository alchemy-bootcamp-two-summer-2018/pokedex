<template>
    <li>
        <img v-bind:src="pokemon.url_image"/>
        <h3>Name: {{ pokemon.pokemon }}</h3>
        <h3>Type: {{ pokemon.type_1 }}</h3>
        <h3>Attack: {{ pokemon.attack }}</h3>
        <h3>Defense: {{ pokemon.defense }}</h3>
    </li>
</template>

<script>
export default {
    props: {
        pokemon: Object,
        // selected: Object,
    }
}
</script>

<style>
li {
  list-style: none;
  text-align: center;
  border: 5px solid #aaa;
}

img {
    width: 150px;
}
</style>
