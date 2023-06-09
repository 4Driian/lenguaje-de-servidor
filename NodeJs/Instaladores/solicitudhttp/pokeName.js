const axios = require('axios');

const pokemonName = 'charizard';

axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then(response => {
    const pokemon = response.data;
    const moves = pokemon.moves.slice(0, 10);
    console.log('Movimientos de', pokemon.name);
    moves.forEach(move => {
      console.log(move.move.name);
    });
  })
  .catch(error => {
    console.error('Error al obtener el Pokémon:', error.message);
  });
