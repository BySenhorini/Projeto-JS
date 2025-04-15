//Somar números de 1 a 100(Use o for)
var prompt = require('prompt-sync')();

let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i; // isso é igual a: soma = soma + i
}

console.log("Resultado da soma de 1 até 100 é:", soma);