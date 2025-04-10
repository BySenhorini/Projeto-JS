//Somar números até que o usuário digite 0(Use o While)


var prompt = require('prompt-sync')();


let soma =0;
let num = Number(prompt("Digite um número"));


while(num !== 0){
   //soma!!!!!!!!!!!!
   soma += num;
   num = Number(prompt("Digite um número(Caso queira sair, digite 0)"));
}


console.log(soma);


