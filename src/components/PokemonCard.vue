<template>

    <li class="pokemon-card">
        <h2> {{pokemonList.pokemon}} </h2>
        <img class="pokemon-img" :src=pokemonList.url_image>
        
        <p> <span class="type">Type: {{pokemonList.type_1}}</span> <span class="species"> Species: {{pokemonList.species_id}}</span></p>
  
    </li>
    
</template>

<script>

export default {

props: {
   pokemonList: Object
}

}
</script>

<style scoped>

.pokemon-card {
list-style:none;
border: solid 20px #f7f0e8;
border-radius: 20px;

padding: 5px;
background: white; 
text-align: center;

}

.pokemon-card:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

h2 {
    
    padding-bottom: 10px;
    
}

p {
    font-size: 12px;
    font-weight: bold;
}
.type {
    padding: 8px;
    background: #d64444;
    color: white;
    border-radius: 20px;
    margin-right: 8px;
    margin-bottom: 15px;
}
.species {
    padding: 8px;
    background: #8a6390;
    color: white;
    border-radius: 20px;
    margin-bottom: 15px;
}
.pokemon-img {
    max-width: 190px;
}

</style>
