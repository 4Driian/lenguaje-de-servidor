const readline = require('readline');
const pokemonAPI = require('./pokeApi');
const menu = require('./menu');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function buscarPokemonPorNombre() {
  rl.question('Ingrese el nombre de un Pokémon: ', async (nombrePokemon) => {
    try {
      const pokemon = await pokemonAPI.buscarPokemonPorNombre(nombrePokemon);
      menu.mostrarInformacionPokemon(pokemon);
    } catch (error) {
      console.log(error.message);
    }

    rl.close();
  });
}

async function obtenerMovimientosPokemon() {
  rl.question('Ingrese el nombre de un Pokémon: ', async (nombrePokemon) => {
    try {
      const movimientos = await pokemonAPI.obtenerMovimientosPokemon(nombrePokemon);
      menu.mostrarMovimientosPokemon(movimientos);
    } catch (error) {
      console.log(error.message);
    }

    rl.close();
  });
}

function ejecutarOpcion(opcion) {
  switch (opcion) {
    case '1':
      buscarPokemonPorNombre();
      break;
    case '2':
      obtenerMovimientosPokemon();
      break;
    case '3':
      console.log('¡Hasta luego!');
      process.exit(0);
    default:
      console.log('Opción inválida. Intente nuevamente.');
  }
}

async function iniciarPokedex() {
  let opcion = '';

  while (opcion !== '3') {
    opcion = menu.mostrarMenu();

    if (opcion === '1') {
      buscarPokemonPorNombre();
    } else if (opcion === '2') {
      obtenerMovimientosPokemon();
    }

    console.log('\n');
  }
}

iniciarPokedex();