//02. Verificar se o usuário pode tirar carteira de motorista


//Qual a sua idade?
// SE Você é maior de idade, então, pode tirar a cateira.
// SENAOOOOOO você não pode tirar a carteira de motorista


//Pessoas maiores de idade(>=18)


var prompt = require('prompt-sync')();


let idade = Number(prompt("Olá, digite sua idade:"));


if(idade >= 18){
    console.log("Você poderá tirar a carteira 🤪!");
}else if(idade < 18){
    console.log("Você não poderá tirar a carteira.")
}else{
    console.log("Essa informação não é válida!😢")
}
