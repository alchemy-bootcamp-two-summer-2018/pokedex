<template>
    <li>
        <h3> {{ pokemon.pokemon }} </h3>
        <h3> {{ pokemon.type_1 }} </h3>
    </li>
</template>

<script>

export default {
    props: {
        pokemon: Object
    }
}
</script>

<style>


li {
  list-style: none;
  text-align: center;
  border: 1px solid #aaa;
}
</style>
