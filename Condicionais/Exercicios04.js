const senhaCorreta = "1234"; // Senha definida
let senhaDigitada = prompt("Digite a senha:");

if (senhaDigitada === senhaCorreta) {
  console.log("Acesso permitido.");
} else {
  console.log("Senha incorreta. Acesso negado.");
}
