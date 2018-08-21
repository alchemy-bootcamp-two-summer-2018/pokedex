<template>
  <li>
    <h3>{{ pokemon.name }}</h3>
    <p>size: {{ pokemon.size }}</p>
    <p>type: {{ pokemon.type }}</p>
    <p>rank: {{ pokemon.rank}}</p>
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