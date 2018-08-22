<template>
    <form v-on:submit.prevent="handleSubmit">
        <select v-model="sort">
            <option value="name">Name</option>
            <option value="type">Type</option>
            <option value="category">Category</option>
        </select>
        <label>
            <input type="radio" value="1" name="direction"> asc
        </label>
        <label>
            <input type="radio" value="-1" name="direction"> desc
        </label>
        <button>Apply Sort</button>
     </form>
</template>

<script>
export default {
  props: {
    onSort:Function
  },
  data() {
    return {
      sort: 'name',
      direction: 1
    };
  },
  methods: {
    handleSubmit() {
      this.onSort({

      });
    }
  }
};
</script>

<style>

</style>
