<template>
    <li>
      <!-- <div id="img" v-bind:style="{ backgroundImage: 'url(' + tile.url_image +')'}"> -->
        <h3> {{ tile.pokemon }} </h3>
        <!-- <div class="stats"> -->
          <p>Type: {{ tile.type_1 }}</p>
          <p>Attack: {{ tile.attack}}</p>
          <p>Defense: {{ tile.defense}}</p>
        <!-- </div> -->
      <!-- </div> -->
    </li>
</template>

<script>
export default {
  props: {
    tile: Object
  }  
};
</script>

<style scoped>
#img {
  background-position:center;
  background-size: contain;
  background-repeat: no-repeat;
}
li {
  list-style: none;
  text-align: center;
  border: 1px solid #aaa;
}
</style>
