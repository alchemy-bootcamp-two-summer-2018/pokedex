const pokemons = [
    {
      name: 'cat',
      category: 'small',
      generation: 5

    },
    {
      name: 'cat',
      category: 'small',
      generation: 5
    },
    {
      name: 'cat',
      category: 'small',
      generation: 5
    },
    {
      name: 'cat',
      category: 'small',
      generation: 5
    },
    {
      name: 'cat',
      category: 'small',
      generation: 5
    },
    {
      name: 'cat',
      category: 'small',
      generation: 5
    },
    {
      name: 'cat',
      category: 'small',
      generation: 5
    },
    {
      name: 'cat',
      category: 'small',
      generation: 5
    }
  ];
  
  const allSizes = pokemons.map(pokemon => {
    return pokemon.size;
  });
  
  const seen = {};
  
  const sizes = allSizes.filter(size => {
    if(seen[size]) return false;
    seen[size] = true;
    return true;
  });
  
  export default {
    getPokemons() {
      return pokemons;
    },
    getSizes() {
      return sizes;
    }
  };
  