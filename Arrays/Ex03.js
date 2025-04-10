//Um professor quer imprimir as notas de um aluno.( usando ForEach).

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function perguntar(pergunta) {
    return new Promise((resolve) => {
      readline.question(pergunta, resolve);
    });
  }
  
  async function imprimirNotasAlunoNode() {
    const nomeAluno = await perguntar("Digite o nome do aluno: ");
    if (!nomeAluno) {
      console.log("Nome do aluno não informado.");
      readline.close();
      return;
    }
  
    const notas = [];
    let adicionarNota = true;
  
    while (adicionarNota) {
      const notaStr = await perguntar(`Digite uma nota para ${nomeAluno} (ou deixe em branco para finalizar): `);
      if (notaStr === null || notaStr.trim() === "") {
        adicionarNota = false;
      } else {
        const nota = parseFloat(notaStr);
        if (!isNaN(nota)) {
          notas.push(nota);
        } else {
          console.log("Nota inválida. Por favor, digite um número.");
        }
      }
    }
  
    readline.close();
  
    if (notas.length > 0) {
      console.log(`\nNotas de ${nomeAluno}:`);
      notas.forEach((nota, index) => {
        console.log(`Nota ${index + 1}: ${nota}`);
      });
  
      const somaNotas = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
      const media = somaNotas / notas.length;
      console.log(`Média: ${media.toFixed(2)}`);
    } else {
      console.log(`\nNenhuma nota registrada para ${nomeAluno}.`);
    }
  }
  
  imprimirNotasAlunoNode();