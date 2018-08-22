<template>
  <li>
    <h3>{{ character.name }}</h3>
    <img class="images" v-bind:src="character.url_image">
    <p>type: {{ character.type }}</p>
    <p>attack: {{ character.attack }}</p>
    <p>defense: {{ character.defense }}</p>
  </li>
</template>

<script>
export default {
  props: {
    character: Object
  }
};
</script>

<style scoped>
li {
  list-style: none;
  text-align: center;
  border: 1px solid #aaa;
}
</style>