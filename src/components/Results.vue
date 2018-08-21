<template>
  <div>
    <ul>
      <Tile v-for="tile in pokemon"
      v-bind:key="tile.id"
      v-bind:tile="tile"/>
    </ul>
  </div>
   
</template>

<script>
import pokemon from '../../pokedex.js';
import Tile from './Tile.vue';
export default {
  props: {
  },
  data(){
    return {
      pokemon
    };
  },
  components: {
    Tile
  },
  computed: {

    // type() {
    //   const typeOne = this.pokemon.map(type =>)
    //   const typeTwo
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}
</style>
