<template>
  <section>
    <h2>Options:</h2>
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

h2 {
  margin: 15px;
}

</style>
