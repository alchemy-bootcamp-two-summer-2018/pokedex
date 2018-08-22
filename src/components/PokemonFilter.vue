<template>
  <form v-on:submit.prevent="handleSubmit">
    <p>
      <label>
        Filter by Type:
     </label>
    <select v-model="selected">
        <option value="">All types</option>
        <option v-for="type in types"
        v-bind:key="type"
        v-bind:value="type">
        {{ type }}
        </option>
    </select>
    <p> </p>

    <!-- use regex to only allow positive integers -->
    <p>Minimum attack:
    <input v-model="minSelected" pattern="^[0-9]*$" placeholder="Minimum Attack">
    </p>
    <p>
      <button>Apply</button>
    </p>
  </form>
</template>

<script>
import pokemonsApi from '../services/pokemonsApi';
export default {
  props: {
    onFilter: Function
  },
  data() {
    return {
      types: pokemonsApi.getTypes(), //get all types for dropdown menu
      selected: '', //initialize type filter to blank
      minSelected: 0, //initialize min preference to zero
    };
  },
  methods: {
    handleSubmit() {
      const filter = {
        type: this.selected,
        min: this.minSelected
      };
      this.onFilter(filter);
    }
  }
};
</script>

<style>
</style>