<template>
  <div 
    class="tile"
    v-bind:class="{[pokemon.type_1]: true}"
  >
    <h2>{{ pokemon.pokemon.toUpperCase() }}</h2>
    <div class="stats">
      <p>Types: 
        {{ pokemon.type_1.toUpperCase() }}, 
        {{ pokemon.type_2.toUpperCase() }}
      </p>
      <p>Attack: {{ pokemon.attack }}</p>
      <p>Defense: {{ pokemon.defense }}</p>
    </div>
    <img v-bind:src=pokemon.url_image />
  </div>
</template>

<script>
export default {
  props: ['pokemon']
};
</script>

<style scoped>

img {
  width: 200px;
}

.tile {
  border: 2px solid rgb(138, 0, 11);
  opacity: 0.8;
}

.tile:hover {
  opacity: 1.0;
  box-shadow: 5px 5px rgb(139, 139, 0);
}

h2, p {
  color: white;
  padding: 5px;
}

.grass {
  background-color: green;
}
.fire {
  background-color: red;
}
.water {
  background-color: blue;
}
.bug {
  background-color: purple;
}
.normal {
  background-color: lightblue;
}
.poison {
  background-color: darkmagenta;
}
.electric {
  background-color: yellow;
}
.ground {
  background-color: brown;
}
.fairy {
  background-color: pink;
}
.fighting {
  background-color: maroon;
}
.psychic {
  background-color: lightcoral;
}
.rock {
  background-color: slategrey;
}
.ghost {
  background-color: lightgrey;
}
.ice {
  background-color: lightblue;
}
.dragon {
  background-color: darkorange;
}
.dark {
  background-color: midnightblue;
}
.steel {
  background-color: silver;
}
.flying {
  background-color: yellowgreen;
}




</style>
