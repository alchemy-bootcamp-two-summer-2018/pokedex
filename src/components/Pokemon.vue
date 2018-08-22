<template>
  <li>
    <h3>{{ pokemon.pokemon }}</h3>
    <p>type 1: {{ pokemon.type_1 }}</p>
        <p>type 2: {{ pokemon.type_2 }}</p>
    <p>attack: {{ pokemon.attack }}</p>
    <p>defense: {{ pokemon.defense }}</p>
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