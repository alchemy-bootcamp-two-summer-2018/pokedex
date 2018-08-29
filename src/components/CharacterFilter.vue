<template>
    <p>
      <label>
        type:
        <select v-model="selected" v-on:change="handleChange">
          <option value="">All Types</option>
          <option v-for="type in types"
            v-bind:key="type"
            v-bind:value="type">
            {{ type }}
          </option>
        </select>
      </label>
      <label>
        attack: 
        <input v-model.number="attack" type="number" v-on:keyup="handleChange">
      </label>
       <label>
        defense: 
        <input v-model.number="defense" type="number" v-on:keyup="handleChange">
      </label> 
    </p>
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
      selected: '',
      attack: '',
      defense: ''
    };
  },
  methods: {
    handleChange() {
      const filter = {
        type: this.selected,
        attack: this.attack,
        defense: this.defense
      };
      this.onFilter(filter);
    }
  }
};
</script>

<style>
</style>