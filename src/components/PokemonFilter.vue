<template>
  <form v-on:submit.prevent="handleSubmit">
    <p>
      <label>
        Filter by attack:
        <select v-model="selected">
          <option value="">All attacks</option>
          <option v-for="attack in attacks"
            v-bind:key="attack"
            v-bind:value="attack">
            {{ attack }}
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
import pokemonsApi from '../services/pokemonsApi';
export default {
  props: {
    onFilter: Function
  },
  data() {
    return {
      attacks: pokemonsApi.getAttacks(),
      selected: ''
    };
  },
  methods: {
    handleSubmit() {
      const filter = {
        attack: this.selected
      };
      this.onFilter(filter);
    }
  }
};
</script>

<style>
</style>