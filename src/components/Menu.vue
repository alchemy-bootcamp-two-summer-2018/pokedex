<template>
  <section>
    <p>I'm the menu</p>
    <PokeFilter/>
    <Sort/>
  </section>
</template>

<script>
import PokeFilter from './PokeFilter.vue';
import Sort from './Sort.vue';

export default {
  components: {
    PokeFilter, Sort
  }
};
</script>

<style scoped>

</style>
