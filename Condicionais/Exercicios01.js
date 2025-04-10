//Verificar se um número é positivo, negativo ou zero.

let numero = prompt("Digite um número:");

numero = Number(numero); // Converte para número

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}
