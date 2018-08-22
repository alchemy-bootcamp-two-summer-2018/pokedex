import pokedex from './pokedex.js';

const allTypes = pokedex.map(pokemon => {
  return pokemon.type_1;
});

const seen = {};

const types = allTypes.filter(type => {
  if(seen[type]) return false;
  seen[type] = true;
  return true;
});

export default {
  getTypes() {
    return types;
  }
};