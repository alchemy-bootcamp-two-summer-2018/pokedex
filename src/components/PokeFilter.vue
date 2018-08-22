<template>
  <div>
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
        <form>
          <input placeholder="min value"/>
          <button>Filter</button>
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

</style>
