import pokemons from '../assets/pokedex.js';
// gets all of the pokemons and their types


// create a unique list of all types (including types 1 and 2)
// using sets
const allTypes1 = pokemons.map(pokemon => {
  return pokemon.type_1;
});

const allTypes2 = pokemons.map(pokemon => {
  return pokemon.type_2;
});

const allTypes = new Set(allTypes1.concat(allTypes2));
const types = Array.from(allTypes);


export default {
  // get all of the pokemons from the pokedex.js file
  getPokemons() {
    return pokemons;
  },
  // get all of the unique types for the dropdown menu
  getTypes() {
    return types;
  }
};