<template>
  <div class="app">
      <Header v-bind:onFilter="handleFilter" v-bind:onSort="handleSort"/>
    <main>
      <Results v-bind:filter="filter" v-bind:sort="sort"/>
    </main>
  </div>
</template>

<script>
import Results from './components/Results.vue';
import Header from './components/Header.vue';

export default {
  name: 'app',
  data() {
    return {
      filter: {
        type: '',
        min: 0
      },
      sort: {
        sort: 'pokemon',
        direction: 1
      }
    };
  },
  components: {
    Header,
    Results

  },
  methods: {
    handleFilter(filter) {
      this.filter = filter;
    },
    handleSort(sort) {
      this.sort = sort;
    }
  }
};
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
