<template>
  <li>
    <p>{{ pokemon.pokemon }}</p>
    <p>{{ pokemon.type_1 }}</p>
  </li>    
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
