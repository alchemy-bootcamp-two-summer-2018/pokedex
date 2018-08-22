<template>
  <div id="app2">
      <!-- ahhhhh trying to separate out header -->
    <Header v-bind:onFilter="handleFilter" v-bind:onSort="handleSort"/>
    <main>
      <Results v-bind:filter="filter" v-bind:sort="sort"/>
    </main>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Results from './components/Results.vue';

export default {
  name: 'app2',
  data() {
    return {
      filter: {
        type: ''
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
