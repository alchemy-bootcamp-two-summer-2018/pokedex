<template>
    <div>
        <h3>{{ pokemon.pokemon }}</h3>
        <img :src="pokemon.url_image">
        <p><em>Type 1: </em>{{ pokemon.type_1 }}</p>
        <p><em>Type 2: </em>{{ pokemon.type_2 }}</p>
        <p><em>Attack: </em>{{ pokemon.attack }}</p>
        <p class="last"><em>Defense: </em>{{ pokemon.defense }}</p>
    </div>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
};
</script>

<style scoped>

    div {
        border: 2px solid rgb(196, 249, 255);
        max-width: 500px;
        background-color: white;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: rgb(58, 75, 172);
    }

    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        margin: 0 auto;
    }

    h3 {
        background-color: rgb(196, 249, 255);
        padding: 10px;
        letter-spacing: 2px;
        width: 100%;
        box-sizing: border-box;
        margin-top: -3px;
    }

    p {
      font-size: 1em;
    }

    .last {
        margin-bottom: 40px;
    }

</style>
