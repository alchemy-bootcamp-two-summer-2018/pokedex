import pokedex from "../pokedex.js"

const pokemons = pokedex;

const allTypes = pokemons.map(pokemon => {
    return pokemon.type_1;
});

const seen = {};

const types = allTypes.filter(type => {
    if(seen[type]) {
        return false
    } else {
        seen[type] = true;
    };
    return true;
})


export default {
    getTypes() {
        return types;
    },
    // getPokemons() {
    //     return pokemons;
    // }
}