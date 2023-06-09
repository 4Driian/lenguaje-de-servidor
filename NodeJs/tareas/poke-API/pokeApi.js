const axios = require('axios');

async function obtenerPrimerosPokemon() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    return response.data.results;
  } catch (error) {
    throw new Error('Ha ocurrido un error al obtener los primeros Pokémon.');
  }
}

async function buscarPokemonPorNombre(nombre) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
    return response.data;
  } catch (error) {
    throw new Error('Ha ocurrido un error al buscar el Pokémon.');
  }
}

async function obtenerMovimientosPokemon(nombre) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
    return response.data.moves;
  } catch (error) {
    throw new Error('Ha ocurrido un error al obtener los movimientos del Pokémon.');
  }
}

module.exports = {
  obtenerPrimerosPokemon,
  buscarPokemonPorNombre,
  obtenerMovimientosPokemon
};