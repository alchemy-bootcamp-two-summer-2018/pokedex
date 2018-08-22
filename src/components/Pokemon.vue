<template>
  <div class="container">
    <li>
     <h3>{{ pokemon.pokemon }}</h3>
      <img class="images" v-bind:src="pokemon.url_image">
      <p>type: {{ pokemon.type_1}}</p>
      <p>special-attack: {{ pokemon.special_attack }}</p>
      <p>speed: {{ pokemon.speed }}</p>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
};
</script>

<style scoped>
  .container {
    border: 1px solid #aaa;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    background-color: cornsilk;

}
.images {
  width:150px;
}
</style>