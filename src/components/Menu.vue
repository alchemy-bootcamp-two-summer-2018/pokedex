<template>
  <section>
    <h2>Options:</h2>
    <PokeFilter 
      v-bind:filter="filter"
      v-bind:types="types"
    />
    <Sort
      v-bind:sort="sort"
    />
  </section>
</template>

<script>
import PokeFilter from './PokeFilter.vue';
import Sort from './Sort.vue';

export default {
  props: ['types', 'filter', 'sort'],
  components: {
    PokeFilter, Sort
  },
};
</script>

<style scoped>

h2 {
  margin: 15px;
}

</style>
