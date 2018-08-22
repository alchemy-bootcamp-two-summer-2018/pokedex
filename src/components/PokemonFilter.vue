<template>
  <form v-on:submit.prevent="handleSubmit">
    <p>
      <label>
        Filter by Speed:
        <select v-model="selected">
          <option value="">All speeds</option>
          <option v-for="speed in speeds"
            v-bind:key="speed"
            v-bind:value="speed">
            {{ speed }}
          </option>
        </select>
      </label>
    </p>
    <p>
      <button>Apply</button>
    </p>
        <p>
      <label>
        Filter by Type:
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
    <p>
      <label>
        Filter by SpecialAttack:
        <select v-model="selected">
          <option value="">All special_attack</option>
          <option v-for="special_attack in special_attacks"
            v-bind:key="special_attack"
            v-bind:value="special_attack">
            {{ special_attack }}
          </option>
        </select>
      </label>
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
      speeds: pokemonsApi.getSpeeds(),
      types: pokemonsApi.getTypes(),
      special_attack: pokemonsApi.getSpecialAttack(),
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

<style>
</style>