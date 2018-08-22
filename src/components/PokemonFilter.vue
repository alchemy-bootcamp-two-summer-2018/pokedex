<template>
    <form v-on:submit.prevent="handleSubmit">
        <p>
            <label>
                <select v-model="selected">
                    <option value="">All types</option>
                    <option v-for="type in types"
                        v-bind:key="type"
                        v-bind:value="type">
                        {{ type }}
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
import pokedex from '../services/pokedex.js';

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

<style scoped>

  select {
    color: rgb(3, 95, 148);
    font-size: 1em;
  }

</style>