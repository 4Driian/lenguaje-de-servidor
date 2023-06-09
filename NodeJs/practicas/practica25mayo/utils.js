const chalk = require('chalk');

class Operaciones {
  sumar(a, b) {
    const resultado = a + b;
    return chalk.red(resultado);
  }

  restar(a, b) {
    const resultado = a - b;
    return chalk.yellow(resultado);
  }

  multiplicar(a, b) {
    const resultado = a * b;
    return chalk.rgb(255, 128, 0)(resultado);
  }

  dividir(a, b) {
    if (b !== 0) {
      const resultado = a / b;
      return chalk.white(resultado);
    } else {
      return chalk.red('Error: No se puede dividir por cero');
    }
  }
}

module.exports = Operaciones;