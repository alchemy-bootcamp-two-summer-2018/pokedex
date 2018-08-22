<template>
  <div id="sort">
    <p>Sort by:</p>
    <select v-model="sort.props">
      <option value="id">Sort</option>
      <option value="pokemon">Name</option>
      <option value="attack">Attack</option>
      <option value="defense">Defense</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['sort']
};
</script>

<style scoped>

p, select, div, form {
  display: inline;
}

#sort {
  padding: 15px;
  border: solid 1px rgb(138, 0, 11);
}

</style>
