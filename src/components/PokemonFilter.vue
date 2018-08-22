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
// import pokedex from '../../pokedex.js';
import types from '../../types.js';
export default {
  data() {
    return {
      types: types.getTypes()
    };
  }

};
</script>

<style>

</style>
