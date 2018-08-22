<template>
  <div id="filters">

    <div id="type-filter">
      <p>Filter by type:</p>
      <select v-model="filter.type">
        
        <option value="all">
          All types
        </option>

        <option 
          v-for="type in types"
          v-bind:key="type">
            {{ type }}
        </option>

      </select>
    </div>

    <div id="attack-filter">
      <p>Filter by attack:</p>
      <form>
        <input placeholder="Min value">
        <button>Filter</button>
      </form>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['types', 'filter']

};
</script>

<style scoped>

#filter {
  padding: 15px;
}

p, select, div {
  display: inline;
}

form {
  display: inline;
}

</style>
