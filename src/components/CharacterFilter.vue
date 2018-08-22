<template>
  <form v-on:submit.prevent="handleSubmit">
    <p>
      <label>
        size:
        <select v-model="selected">
          <option value="">All categories</option>
          <option v-for="category in categories"
            v-bind:key="category"
            v-bind:value="category">
            {{ category }}
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
import categoriesApi from '../../pokedex.js';
export default {
  props: {
    onFilter: Function
  },
  data() {
    return {
      categories: charactersApi.getCategories(),
      selected: ''
    };
  },
  methods: {
    handleSubmit() {
      const filter = {
        category: this.selected
      };
      this.onFilter(filter);
    }
  }
};
</script>

<style>
</style>