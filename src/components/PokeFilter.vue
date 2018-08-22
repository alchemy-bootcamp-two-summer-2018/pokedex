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
      <p>Minimum attack:</p>
      <input v-model="filter.attack" placeholder="Enter min attack value">
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['types', 'filter'],
  // methods: {
  //   handleSubmit() {
  //     const filter = {
        
  //     }
  //   }
  // }

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
