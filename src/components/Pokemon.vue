<template>
  <li>
    <h3>{{ pokemon.name }}</h3>
    <p>pokemon: {{ pokemon.pokemon }}</p>
    <p>special-attack: {{ pokemon.special_attack }}</p>
    <p>base: {{ pokemon.pokebase }}</p>
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
</style>