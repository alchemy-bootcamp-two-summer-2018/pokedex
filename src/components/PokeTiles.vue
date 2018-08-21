<template>
    <div>
    <li>
        <img :src=pokemonList.url_image >
        <h3>{{ pokemonList.pokemon }}</h3>
        <p>type: {{ pokemonList.type_1 }}</p>
        <p>ability: {{ pokemonList.ability_1 }}</p>
    </li>
    </div>
</template> 

<script>

export default {
    props: {
        pokemonList: Object
    }
};
</script>

<style>
li {
    list-style: none;
    text-align: center;
    border: 1px solid black;
}

</style>
