<template>
  <li>
    <img class="pokemon-background" v-bind:src="pokemon.url_image"/>
    <p><strong>{{ pokemon.pokemon }}</strong></p>
    <p><em>Type:</em> {{ pokemon.type_1 }}</p>
    <p><em>Attack:</em> {{ pokemon.attack }}</p>
    <p><em>Defense:</em> {{ pokemon.defense }}</p>
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
