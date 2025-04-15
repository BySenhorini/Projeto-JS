//Verificar se um aluno foi aprovado
//Verificar se um aluno foi aprovado

var prompt = require('prompt-sync')();

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));
let media = nota1 + nota2 + nota3 / 3
if ( media  >= 5 ){
console.log("Voce foi aprovado");
}else{
    console.log("Voce foi reprovado");
}
