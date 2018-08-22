<template>
  <div id="filter-div">

    <div id="type-filter" class="filters">
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

    <div id="attack-filter" class="filters">
      <p>Minimum attack:</p>
      <input 
        v-model="filter.attack" 
        type="number" 
        placeholder="Enter min attack value"
      >
    </div>

    <div id="defense-filter" class="filters">
      <p>Minimum defense:</p>
      <input 
        v-model="filter.defense" 
        type="number" 
        placeholder="Enter min defense value"
      >
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['types', 'filter'],
};
</script>

<style scoped>

#filter-div {
  padding: 15px;
  display: flex;
  justify-content: center;
}

.filters {
  padding: 15px;
  /* border: solid 1px rgb(138, 0, 11); */
}

p, select, div.filters {
  display: inline;
  margin: 0px 5px;
}

form {
  display: inline;
}

</style>
