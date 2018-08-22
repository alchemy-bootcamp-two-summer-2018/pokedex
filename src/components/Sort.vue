<template>
  <div id="sort">
    <p>Sort by:</p>
    <select v-model="sort.props">
      <option value="id">Sort</option>
      <option value="pokemon">Name</option>
      <option value="attack">Attack</option>
      <option value="defense">Defense</option>
    </select>


    <!-- <form v-on:submit.prevent="handleSubmit">
      <select v-model="sort">
        <option value="name">Name</option>
        <option value="size">Size</option>
        <option value="weight">Weight</option>
      </select>
      <label>
        <input type="radio" value="1" name="direction" v-model="direction"> asc
      </label>
      <label>
        <input type="radio" value="-1" name="direction" v-model="direction"> desc
      </label>
      <button>Apply Sort</button>
    </form> -->
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

</style>
