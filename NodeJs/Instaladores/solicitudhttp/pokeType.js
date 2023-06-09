const axios = require('axios');

const type = 'electric';

axios.get(`https://pokeapi.co/api/v2/type/${type}`)
  .then(response => {
    const pokemonList = response.data.pokemon;
    console.log('Pokémon del tipo', type);
    pokemonList.forEach(pokemon => {
      console.log(pokemon.pokemon.name);
    });
  })
  .catch(error => {
    console.error('Error al obtener los Pokémon:', error.message);
  });