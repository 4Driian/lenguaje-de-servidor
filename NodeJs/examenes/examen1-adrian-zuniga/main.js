const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');

async function fetchPokemon(numero) {
  const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
  const response = await axios.get(url);
  return response.data;
}

async function fetchAndDisplayPokemon() {
  try {
    const numero = 1000;
    if (numero < 1 || numero > 898) {
      throw new Error('Número de Pokémon inválido');
    }
    const data = await fetchPokemon(numero);
    const nombre = data.name;
    const tipos = data.types.map((tipo) => tipo.type.name);
    console.log(`Nombre: ${chalk.yellow(nombre)}`);
    console.log(`Tipos: ${chalk.yellow(tipos.join(', '))}`);
  } catch (error) {
    console.log(error.message);
  }
}

function formatPokemon(nombre, tipo1, tipo2) {
  if (!nombre || !tipo1) {
    throw new Error('Datos de Pokémon incompletos');
  }
  let formattedText = `El Pokémon ${chalk.yellow(nombre)} es de tipo ${chalk.yellow(tipo1)}`;
  if (tipo2) {
    formattedText += ` y ${chalk.yellow(tipo2)}`;
  }
  return formattedText;
}

try {
  fetchAndDisplayPokemon();

  const nombre = 'Pikachu';
  const tipos = ['Eléctrico'];
  const formattedResult = formatPokemon(nombre, ...tipos);
  console.log(formattedResult);

  try {
    const contenido = fs.readFileSync('datos.txt', 'utf8');
    console.log(contenido);
  } catch (error) {
    console.log(`El archivo 'datos.txt' no existe`);
  }

  function writeToFile(message) {
    try {
      fs.writeFileSync('resultados.txt', message);
    } catch (error) {
      throw new Error(`Error al escribir en el archivo 'resultados.txt'`);
    }
  }

  try {
    writeToFile('Examen finalizado');
    console.log('Mensaje escrito en el archivo correctamente.');
  } catch (error) {
    console.log(error.message);
  }
} catch (error) {
  console.log(error.message);
}