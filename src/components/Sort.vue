<template>
  <div id="sort">
    <p>Sort by:</p>
    <select v-model="selected">
      <option value="">Name</option>
      <option>Type</option>
      <option>Attack</option>
      <option>Defense</option>
    </select>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

p, select, div {
  display: inline;
}

</style>
