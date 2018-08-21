<template>
  <section>
    <p>Results</p>
    <Tile
      v-for="pokemon in list"
      v-bind:key="pokemon.pokemon"
      v-bind:pokemon="pokemon"
    />
  </section>
</template>

<script>
import Tile from './Tile.vue';

export default {
  props: ['list'],
  components: {
    Tile
  }
};
</script>

<style scoped>

</style>
