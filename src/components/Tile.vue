<template>
  <div class="tile">
    <h2>{{ pokemon.pokemon.toUpperCase() }}</h2>
    <div class="stats">
      <p>Type: {{ pokemon.type_1.toUpperCase() }}</p>
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
}

h2, p {
  border-bottom: 1px solid rgb(138, 0, 11);
}

</style>
