//Menu simples até o usuário sair(Use o do...While)

//Menu simples até o usuário sair(Use o do...While)
var prompt = require('prompt-sync')();
let opcao;

do {
    console.log("====== MENU ======");
    console.log("1 - Opção 1");
    console.log("2 - Opção 2");
    console.log("3 - Opção 3");
    console.log("0 - Sair");
    console.log("==================");
    opcao = Number(prompt("escolha uma opcao"));
} while (opcao > 0 );  