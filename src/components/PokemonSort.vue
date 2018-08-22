<template>
  <form v-on:submit.prevent="handleSubmit">
    <p> Sort by property: </p>
    <select v-model="sort">
      <option value="pokemon">Name</option>
      <option value="attack">Attack</option>
      <option value="defense">Defense</option>
      <option value="type_1">Type 1</option>
      <option value="type_2">Type 2</option>

    </select>
    <label>
      <input type="radio" value="1" name="direction" v-model="direction"> asc
    </label>
    <label>
      <input type="radio" value="-1" name="direction" v-model="direction"> desc
    </label>
    <button>Apply Sort</button>
  </form>
</template>

<script>
export default {
  props: {
    onSort: Function
  },
  data() {
    return {
      sort: 'pokemon', // sort by pokemon name by default
      direction: 1
    };
  },
  methods: {
    handleSubmit() {
      this.onSort({
        sort: this.sort, //choose which attribute to sort by
        direction: this.direction //choose ascending or descending
      });
    }
  }
};
</script>

<style>
</style>