const prompt = require('prompt-sync')();

function mostrarMenu() {
  console.log('--- Pokédex Interactiva ---');
  console.log('1. Buscar Pokémon por nombre');
  console.log('2. Listar tipos de Pokémon');
  console.log('3. Salir');

  const opcion = prompt('Seleccione una opción: ');

  return opcion;
}

function mostrarInformacionPokemon(pokemon) {
  console.log('Información del Pokémon:');
  console.log(`Nombre: ${pokemon.name}`);
  console.log('Tipos:', pokemon.types.map(type => type.type.name).join(', '));
  console.log(`Altura: ${pokemon.height}`);
  console.log(`Peso: ${pokemon.weight}`);
}

function mostrarMovimientosPokemon(movimientos) {
  console.log('Movimientos del Pokémon:');
  movimientos.forEach((move, index) => {
    console.log(`${index + 1}. ${move.move.name}`);
  });
}

module.exports = {
  mostrarMenu,
  mostrarInformacionPokemon,
  mostrarMovimientosPokemon
};