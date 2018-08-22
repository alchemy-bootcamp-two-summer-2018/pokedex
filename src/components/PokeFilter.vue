<template>
  <label>
    Filter by Type:
    <select v-model="filter.type">
      <option value="all">all types</option>
      <option v-for="type in types" v-bind:key="type"> {{ type }}</option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'PokeFilter',
  props: ['types', 'filter']

};
</script>

<style>

</style>
