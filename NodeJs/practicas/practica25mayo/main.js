const Operaciones = require('./utils');

const a = 30;
const b = 25;

const calculadora = new Operaciones();
console.log('Los resultados de las operaciones son:');
console.log(a,'+',b,'=',calculadora.sumar(a, b));
console.log(a,'-',b,'=',calculadora.restar(a, b));
console.log(a,'*',b,'=',calculadora.multiplicar(a, b));
console.log(a,'÷',b,'=',calculadora.dividir(a, b));