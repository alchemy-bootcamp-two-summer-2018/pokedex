<template>
  <li>
    <div class="type-color" 
    v-bind:class="{ grass: pokemon.type_1 === 'grass',
     fire: pokemon.type_1 === 'fire',
     poison: pokemon.type_1 === 'poison',
     water: pokemon.type_1 === 'water'}">
    <h3>{{ pokemon.pokemon }}</h3>
    <p>type 1: {{ pokemon.type_1 }}</p>
        <p>type 2: {{ pokemon.type_2 }}</p>
    <p>attack: {{ pokemon.attack }}</p>
    <p>defense: {{ pokemon.defense }}</p>
    <img v-bind:src="pokemon.url_image" alt="pokemon.url_image" width="200">
    </div>
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