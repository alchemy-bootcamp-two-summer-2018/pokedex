<template>
  <header>
   <PokeFilter v-bind:filter="filter" v-bind:types="types"/>
   <Sort v-bind:sort="sort"/>
  </header>
</template>

<script>
import PokeFilter from './PokeFilter.vue';
import Sort from './Sort.vue';

export default {
  name: 'Header',
  props: 
    ['types', 'filter', 'sort'],
  components: {
    PokeFilter,
    Sort
  }

};
</script>

<style>

</style>
