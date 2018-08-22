<template>
  <header>
   <PokeFilter/>
   <Sort/>
  </header>
</template>

<script>
import PokeFilter from './PokeFilter.vue';
import Sort from './Sort.vue';

export default {
  name: 'Header',
  components: {
    PokeFilter,
    Sort
  }

};
</script>

<style>

</style>
