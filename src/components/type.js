import pokedex from "../pokedex.js"



const pokemons = pokedex;


const allTypes = pokemons.map(pokemon => {
    return pokemon.type_1;
});


const seen ={};

const types = allTypes.filter(type => {
  if(seen[type]) return false;
  seen[type] = true;
  return true;
});


export default {
    getPokemons() {
        return pokemons;
    },
    getTypes() {
        return types;
    }
}
