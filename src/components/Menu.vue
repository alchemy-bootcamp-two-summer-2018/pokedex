<template>
  <section>
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

section {
  margin: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  margin: 15px;
}

</style>
