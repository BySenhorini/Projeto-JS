//Verificar se um aluno foi aprovado

let nota = prompt("Digite a nota do aluno:");

nota = Number(nota); // Converte para número

if (nota >= 6) {
  console.log("Aluno aprovado!");
} else {
  console.log("Aluno reprovado.");
}
