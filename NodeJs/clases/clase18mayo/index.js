console.log("HI");
// app.js

global.username = "william";
// Ejemplo de uso del objeto global
console.log("Hola, " + global.username);

// Ejemplo de uso del objeto process
console.log("Directorio actual: " + process.cwd());
console.log("ID del proceso: " + process.pid);
console.log("Argumentos de línea de comandos: " + process.argv);
