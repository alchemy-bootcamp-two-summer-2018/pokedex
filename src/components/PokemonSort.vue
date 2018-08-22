<template>
  <form v-on:submit.prevent="handleSubmit">
    <select v-model="sort">
      <option value="pokemon">Name</option>
      <option value="height">Height</option>
      <option value="weight">Weight</option>
    </select>
    <label>
      <input type="radio" value="1" name="direction" v-model="direction">Low-Hi
    </label>
    <label>
      <input type="radio" value="-1" name="direction" v-model="direction">Hi-Low
    </label>
    <button>Sort</button>
  </form>
</template>

<script>
export default {
  props: {
    onSort: Function
  },
  data() {
    return {
      sort: 'pokemon',
      direction: 1
    };
  },
  methods: {
    handleSubmit() {
      this.onSort({
        sort: this.sort,
        direction: this.direction
      });
    }
  }
};
</script>

<style>

</style>
