<template>
    <form v-on:submit.prevent="handleSubmit">
        <p>
            <label>
                Size:
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
        size: this.selected
      };
      this.onFilter(filter);
    }
  }
};

</script>