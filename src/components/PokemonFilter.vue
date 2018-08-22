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
    <label>
        Filter by Minimum Attack:
    </label>
    <input v-model="minimum" placeholder="Minimum Attack">
    <p>Minimum attack: {{ minimum }}</p>
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
      types: pokemonsApi.getTypes(),
      selected: '',
      minSelected: '',
    };
  },
  methods: {
    handleSubmit() {
      const filter = {
        type: this.selected
      };
      this.onFilter(filter);
    }
  }
};
</script>

<style>
</style>