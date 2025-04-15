//Verificar se uma senha digitada está correta
var prompt = require('prompt-sync')();

let senha = Number(prompt("Digite uma senha:"));
let senhaconfirmada = Number(prompt("Digite sua senha novamente:"));


if ( senhaconfirmada = senha ){
console.log("A sua senha está correta!");
}else{
    console.log("Senha inválida.");
}
