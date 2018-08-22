<template>
    <form v-on:submit.prevent="handleSubmit">
        <p>
            <select v-model="selected">
              <option value="">All types</option>
              <option v-for="type in types"
                  v-bind:key="type"
                  v-bind:value="type">
                  {{ type }}
              </option>
            </select>
        </p>
        <p>Minimum Defense:</p>
        <p>
          <select v-model="minSelected">
            <option value="0">0</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
          </select>
        </p>
        <p>
            <button>Apply</button>
        </p>
    </form>
</template>

<script>
import pokedex from '../services/pokedex.js';

export default {
  props: {
    onFilter: Function
  },
  data() {
    return {
      types: pokedex.getTypes(),
      defense: pokedex.getDefense(),
      selected: '',
      minSelected: 0
    };
  },
  methods: {
    handleSubmit() {
      const filter = {
        type: this.selected,
        min: this.minSelected.value
      };
      this.onFilter(filter);
    }
  }
};

</script>

<style scoped>

  select {
    color: rgb(3, 95, 148);
    font-size: 1em;
  }

</style>