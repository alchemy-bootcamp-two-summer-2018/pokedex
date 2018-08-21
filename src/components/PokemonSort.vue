<template>
  <form v-on:submit.prevent="handleSubmit">
    <p> Sort by property: </p>
    <select v-model="sort">
      <option value="pokemon">Pokemon</option>
      <option value="attack">Attack</option>
      <option value="defense">defense</option>
      <option value="type_1">Type</option>

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
      sort: 'pokemon', //pokemon or name?
      direction: 1
    };
  },
  methods: {
    handleSubmit() {
      this.onSort({
        sort: this.sort, 
        direction: this.direction
      });
    }
  }
};
</script>

<style>
</style>