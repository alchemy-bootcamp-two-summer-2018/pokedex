<template>
    <li v-bind:class="{ [pokemon.type_1]: true }">
        <img v-bind:src="pokemon.url_image"/>
        <h3>Name: {{ pokemon.pokemon }}</h3>
        <h3>Type: {{ pokemon.type_1 }}</h3>
        <h3>Attack: {{ pokemon.attack }}</h3>
        <h3>Defense: {{ pokemon.defense }}</h3>
    </li>
</template>

<script>
export default {
    props: {
        pokemon: Object,
    }
}
</script>

<style>
li {
  list-style: none;
  text-align: center;
  color: rgb(250, 211, 211);
  border: 5px solid rgb(43, 12, 12);
}

img {
    width: 150px;
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

