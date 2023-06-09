const axios = require('axios');

async function crearEquipoPokemonAleatorio() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const pokemonList = response.data.results;

    const team = [];
    while (team.length < 6) {
      const randomIndex = Math.floor(Math.random() * pokemonList.length);
      const randomPokemon = pokemonList[randomIndex];

      if (!team.find(pokemon => pokemon.name === randomPokemon.name)) {
        team.push(randomPokemon);
      }
    }

    return team;
  } catch (error) {
    throw new Error('Ha ocurrido un error al crear el equipo de Pokémon.');
  }
}

module.exports = {
  crearEquipoPokemonAleatorio
};