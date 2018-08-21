<template>
  <div id="filters">
    <div id="type-filter">
      <p>Filter by type:</p>
      <select v-model="selected">
        <option value="all">All types</option>
        <option>Fire</option>
        <option>Grass</option>
        <option>Water</option>
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
