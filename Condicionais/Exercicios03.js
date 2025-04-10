//Verificar se um número é par ou ímpar

let numero = prompt("Digite um número: ");

numero = Number(numero); // Converte para número

if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}
