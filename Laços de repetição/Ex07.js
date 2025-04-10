// Mostrar tabuada de um número(Use o for)

function mostrarTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso: mostrar a tabuada do número 7
  mostrarTabuada(8);
  
  // Você pode solicitar o número do usuário assim:
  // const numeroUsuario = parseInt(prompt("Digite um número para ver sua tabuada:"));
  // if (!isNaN(numeroUsuario)) {
  //   mostrarTabuada(numeroUsuario);
  // } else {
  //   console.log("Entrada inválida. Por favor, digite um número.");
  // }