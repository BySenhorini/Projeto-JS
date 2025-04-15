//Crie um sistema que permita cadastrar nomes. Antes de adicionar,
//verifique se o nome já está na lista (ignore maiúsculas/minúsculas). Se
//não estiver, adicione o usuário.

var prompt = require('prompt-sync')();
let lista = ['isabelle'];  // Inicializa a lista de nomes

// Solicitar o nome do usuário
let Nome = prompt("Digite seu nome: ").toLowerCase();  
// Converte o nome para minúsculas para evitar diferenças de maiúsculas/minúsculas

// Verificar se o nome já existe na lista
if (lista.includes(Nome)) {  // Verifica se o nome já está na lista
    console.log("Nome já utilizado.");
} else {
    lista.push(Nome);  // Adiciona o nome à lista
    console.log("Nome adicionado ao sistema.");
}