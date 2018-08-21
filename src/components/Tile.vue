<template>
  <li>
    <img class="pokemon-background" v-bind:src="pokemon.url_image"></img>
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

<style scoped>
li {
  list-style: none;
  text-align: center;  
}

</style>
