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

    <p>Minimum attack: {{ minSelected }}</p>
    <input v-model="minSelected" pattern="^[0-9]*$" placeholder="Minimum Attack">

    <p>
      <button>Apply</button>
    </p>
  </form>
</template>

<script>
import pokemonsApi from '../services/pokemonsApi_short';
export default {
  props: {
    onFilter: Function
  },
  data() {
    return {
      types: pokemonsApi.getTypes(),
      selected: '',
      minSelected: '',
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