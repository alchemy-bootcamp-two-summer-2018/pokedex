import pokedex from "../pokedex.js"



const seen ={};

const allTypes = pokedex.map(pokemon => {
    return pokemon.type_1;
})
const filteredTypes = allTypes.filter(type => {
  if(seen[type]) return false;
  seen[type] = true;
  return true;
});


export default {
    getTypes() {
        return filteredTypes;
    }
}
