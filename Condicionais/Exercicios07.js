//g. Verificar o mês pelo número(Switch case)
var prompt = require('prompt-sync')();

let mes = Number(prompt("Digite o numero do Mes: "));

switch (mes) {
    case 1:
        console.log("o dia escolhido foi:Janeiro")
        break;
    case 2:
        console.log("o dia escolhido foi:Fevereiro")
        break;
    case 3:
        console.log("o dia escolhido foi:Março")
        break;
    case 4:
        console.log("o dia escolhido foi:Abril")
        break;
    case 5:
        console.log("o dia escolhido foi:Maio")
        break;
    case 6:
        console.log("o dia escolhido foi:Junho")
        break;
    case 7:
        console.log("o dia escolhido foi:Julho")
        break;
    case 8:
        console.log("o dia escolhido foi:Agosto")
        break;
    case 9:
        console.log("o dia escolhido foi:Setembro")
        break;
    case 10:
        console.log("o dia escolhido foi:Outubro")
        break;
    case 11:
        console.log("o dia escolhido foi:Novembro")
        break;
    case 12:
        console.log("o dia escolhido foi:Dezembro")
        break;
    case 13:
        console.log("o mes escolhido foi: INVALIDO")
        break;


}