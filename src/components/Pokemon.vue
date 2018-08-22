<template>
    <li>
        <img v-bind:src="pokemon.url_image"/>
        <h3>Name: {{ pokemon.pokemon }} </h3>
        <h3>Type 1: {{ pokemon.type_1 }} </h3>
        <h3>Attack: {{ pokemon.attack }} </h3>
        <h3>Defense: {{ pokemon.defense }} </h3>
    </li>
</template>

<script>

export default {
    props: {
        pokemon: Object
    }
}
</script>

<style>


li {
  list-style: none;
  text-align: center;
  border: 1px solid #aaa;
  background-color: rgb(192, 192, 245);
  border: 5px solid black;
}

img {
    width: 150px;
}
</style>
