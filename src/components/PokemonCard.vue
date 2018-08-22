<template>

    <li class="pokemon-card">
        <img class="pokemon-img" :src=pokemonList.url_image>
        <h2> {{pokemonList.pokemon}} </h2>
        <p> {{pokemonList.type_1}} </p>
        <p> {{pokemonList.species_id}} </p>
        
    </li>
    
</template>

<script>

export default {

props: {
   pokemonList: Object
}

}
</script>

<style>
.pokemon-card {
list-style:none;
border: solid 1px lightgray;
border-radius: 20px;
padding: 40px;
}
.pokemon-img {
    max-width: 250px;
}

</style>
