<template>
  <section>
    <div id="pokemon-list">
      <Tile
        v-for="pokemon in sorted"
        v-bind:key="pokemon.pokemon"
        v-bind:pokemon="pokemon"
      />
    </div>
  </section>
</template>

<script>
import Tile from './Tile.vue';

export default {
  props: ['sorted'],
  components: {
    Tile
  }
};
</script>

<style scoped>

section {
  margin-top: 15px;
}

div#pokemon-list{
  margin: 0 3em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}


</style>
