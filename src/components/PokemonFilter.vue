<template>
  <form v-on:submit.prevent="handleSubmit">
    <p>
      <label>
        Type:
        <select v-model="selected">
          <option value="">All Types</option>
          <option v-for="type in types"
            v-bind:key ="type"
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
  data() {
    return {
      pokemons: pokedex
    };
  }

};
</script>

<style>

</style>
