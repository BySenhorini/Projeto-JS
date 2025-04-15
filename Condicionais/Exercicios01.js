//Verificar se um número é positivo, negativo ou zero.
var prompt = require('prompt-sync')();

let n = Number(prompt("Digite um numero:"));

if ( n  >= 1 ){
console.log("O numero é positivo");
}else if(n  < 0){
    console.log("O numero é negativo");
}else if(n === 0){  
    console.log("O numero é zero");
}else{
    console.log("resposta invalida");
}