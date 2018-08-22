<template>
  <li>
    <h3>{{ character.name }}</h3>
    <p>category: {{ character.category }}</p>
    <p>type: {{ character.type }}</p>
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