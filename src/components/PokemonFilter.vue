<template>
  <form v-on:submit.prevent="handleSubmit">
    <p>
      <label>
        Type:
        <select v-model="selected">
          <option value="">All Types</option>
          <option v-for="type_1 in types"
            v-bind:key="type_1"
            v-bind:value="type">
            {{ type_1 }}
          </option>
        </select>
      </label>
    </p>
    <p>
      <button>Apply</button>
    </p>
  </form>    
</template>

<script>

import pokedex from '../../pokedex.js';

export default {
  props: {
    onFilter: Function
  },
  data() {
    return {
      types: pokedex.getTypes(),
      selected: ''
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
