<template>
    <div>
        <img :src="pokemon.url_image">
        <h3>Name: {{ pokemon.pokemon }}</h3>
        <p><em>Type 1: </em>{{ pokemon.type_1 }}</p>
        <p><em>Type 2: </em>{{ pokemon.type_2 }}</p>
        <p><em>Attack: </em>{{ pokemon.attack }}</p>
        <p><em>Defense: </em>{{ pokemon.defense }}</p>
    </div>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
};
</script>

<style>

</style>
