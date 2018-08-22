<template>
  <li>
    <h3>{{ pokemon.pokemon }}</h3>
    <img class="images" v-bind:src="pokemon.url_image">
    <p>special-attack: {{ pokemon.special_attack }}</p>
    <p>pokebase: {{ pokemon.pokebase }}</p>
    <p>speed: {{ pokemon.speed }}</p>
  </li>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
};
</script>

<style scoped>
li {
  list-style: none;
  text-align: center;
  border: 1px solid #aaa;
}
.images {
  width:100px;
}
</style>