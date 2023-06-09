function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const datos = { 
        id: 1, nombre: 'Adrian',
        id: 2, Apellido: 'Zuñiga'};
      resolve(datos);
    }, 2000);
  });
}

console.log('Iniciando la operación...');
obtenerDatos()
  .then(datos => {
    console.log('Datos obtenidos:', datos);
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Operación finalizada.');
  });