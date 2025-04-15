//Verificar senha com tentativa até acertar(Use o While)


var prompt = require('prompt-sync')();

let num = Number(prompt("Digite sua senha"));
let numconfirmado = Number(prompt("Digite sua senha novamente"));


while(num !== 0){
   //soma!!!!!!!!!!!!
   soma += num;
   num = Number(prompt("Digite um número(Caso queira sair, digite 0)"));
}


console.log(soma);




