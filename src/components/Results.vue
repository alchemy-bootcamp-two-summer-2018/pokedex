<template>
  <div>
    <ul>
      <Tile v-for="tile in sortedList"
      v-bind:key="tile.id"
      v-bind:tile="tile"/>
    </ul>
  </div>
   
</template>

<script>
import Tile from './Tile.vue';
export default {
  props: {
    sortedList: Array
  },
  components: {
    Tile
  },
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
