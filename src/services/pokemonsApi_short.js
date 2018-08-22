import pokemons from '../assets/pokedex_short.js';

const allTypes1 = pokemons.map(pokemon => {
  return pokemon.type_1;
});

const allTypes2 = pokemons.map(pokemon => {
  return pokemon.type_2;
});

const allTypes = new Set(allTypes1.concat(allTypes2));
const types = Array.from(allTypes);

export default {
  getPokemons() {
    return pokemons;
  },
  getTypes() {
    return types;
  }
};