<template>
  <div class="filter">
    <div>
      <label>
        Filter by Type:
        <select v-model="filter.type">
          <option value="all">all types</option>
          <option v-for="type in types" v-bind:key="type"> {{ type }}</option>
        </select>
      </label>
    </div>
    <div>
      <label>
        Filter by Attack:
        <form >
          <input v-model="filter.attack" placeholder="min value"/>
        </form>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokeFilter',
  props: ['types', 'filter'],

  methods: {

  }
};
</script>

<style>

.filter {
  display: inline;
}


</style>
