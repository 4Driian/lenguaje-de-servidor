const axios = require('axios');

const pokemonId = 1;

axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  .then(response => {
    const pokemon = response.data;
    console.log('Nombre:', pokemon.name);
    console.log('Altura:', pokemon.height);
    console.log('Peso:', pokemon.weight);
    console.log('Habilidades:', pokemon.abilities.map(ability => ability.ability.name));
    console.log('Movimientos:', pokemon.moves.map(move => move.move.name));
  })
  .catch(error => {
    console.error('Error al obtener el Pokémon:', error.message);
  });