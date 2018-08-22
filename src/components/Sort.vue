<template>
    <form v-on:submit.prevent="handleSubmit">
        <select v-model='sort'>
            <option value="pokemon">Pokemon</option>
            <option value="attack">Attack</option>
            <option value="defense">Defense</option>
        </select>
        <label>
            <input type="radio" value="1" name="direction" v-model="direction">Ascending
        </label>
        <label>
            <input type="radio" value="-1" name="direction" v-model="direction">Decending
        </label>
        <button>Apply Sort</button>
    </form>
</template>

<script>
export default {
  props: {
    onSort: Function
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
        sort: this.sort,
        direction: this.direction
      });
    }
  }
};
</script>

<style scoped>
  
  input {
    margin-left: 20px;
    margin-right: 5px;
  }
  select {
    color: rgb(3, 95, 148);
    font-size: 1em;
  }
</style>
