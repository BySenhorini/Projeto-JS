//Verificar se um número é par ou ímpar
var prompt = require('prompt-sync')();

let n = Number(prompt("Digite um numero: "));
var total=n/2;

if (n % 2 == 0){
console.log("O numero é par");
}else if(n % 2 == 1){
    console.log("O numero é impar");
}else{
    console.log("resposta invalida");
}

