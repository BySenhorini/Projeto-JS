//Crie um array de objetos com produtos e preços. Exiba no console o
//nome e o preço com R$ formatado.
var prompt = require('prompt-sync')();

// Array de produtos com preços
let produtos = [
    { nome: "Caneta Senai", preco: 10.00 },
    { nome: "Bloquinho Senai", preco: 14.00 },
    { nome: "Computador Senai", preco: 3500.00 },
    { nome: "Carregador Senai", preco: 136.00 }
];

// Exibindo os produtos e preços formatados
produtos.forEach(produto => {
    console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2).replace(".", ",")}`);
});

