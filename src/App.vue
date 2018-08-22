<template>
  <div id="app">
    <header>
      <CharacterFilter v-bind:onFilter="handleFilter"/>
      <CharacterSort v-bind:onSort="handleSort"/>
    </header>
    <main>
      <Characters v-bind:filter="filter"
        v-bind:sort="sort"/>
    </main>
  </div>
</template>

<script>
import Characters from './components/Characters.vue';
import CharacterFilter from './components/CharacterFilter.vue';
import CharacterSort from './components/CharacterSort.vue';
export default {
  name: 'app',
  data() {
    return {
      filter: {
        name: ''
      },
      sort: {
        sort: 'name',
        direction: 1
      }
    };
  },
  components: {
    Characters,
    CharacterFilter,
    CharacterSort
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
</style>
