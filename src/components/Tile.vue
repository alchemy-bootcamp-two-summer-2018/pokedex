// create tile containing info from a single pokemon

<template>
  <li>
    <h3>{{ pokemon.pokemon }}</h3>

    <!-- color code types -->
    <div class="type-color" 
    v-bind:class="{ grass: pokemon.type_1 === 'grass',
     fire: pokemon.type_1 === 'fire',
     poison: pokemon.type_1 === 'poison',
     water: pokemon.type_1 === 'water'}">
    <p>type 1: {{ pokemon.type_1 }}</p></div>
    <div class="type-color" 
    v-bind:class="{ grass: pokemon.type_2 === 'grass',
     fire: pokemon.type_2 === 'fire',
     poison: pokemon.type_2 === 'poison',
     water: pokemon.type_2 === 'water'}">

    <p>type 2: {{ pokemon.type_2 }}</p></div>
    <p>attack: {{ pokemon.attack }}</p>
    <p>defense: {{ pokemon.defense }}</p>
    <img v-bind:src="pokemon.url_image" alt="pokemon.url_image" width="200">
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
.grass {
    color: green;
}
.fire {
    color: red;
}
.poison {
    color: orange;
}
.water {
    color: blue;
}
</style>