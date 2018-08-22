<template>
<div class="filter">
  <label>
    Sort By:
    <select v-model="sort.sorted">
      <option value="id">Sort</option>
      <option value="pokemon">Name</option>
      <option value="type_1">Type</option>
      <option value="attack">Attack</option>
      <option value="defense">Defense</option>
    </select>
  </label>
</div>
</template>

<script>
export default {
  props:['sort']
};
</script>

<style>

</style>
