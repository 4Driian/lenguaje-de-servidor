const axios = require('axios');
const countryCode = 'CR';

const getCountryData = async (countryCode) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3/alpha/${countryCode}`);
    return response.data;
  } catch (error) {
    console.error('No se importaron los datos del país:', error);
    throw error;
  }
};

getCountryData(countryCode)
  .then((countryData) => {
    console.log('Datos del país:', countryData);
  })
  .catch((error) => {
    console.error('Se produjo un error:', error);
  });