//Um sistema de controle de presença precisa listar os alunos que compareceram à aula.(usando ForEach)

function listarAlunosPresentes() {
    const alunos = [
      { nome: "Ana", presente: false},
      { nome: "Bruno", presente: false },
      { nome: "Carla", presente: true },
      { nome: "Daniel", presente: true },
      { nome: "Eduardo", presente: false },
      { nome: "Fernanda", presente: false },
    ];
  
    const alunosPresentes = [];
  
    alunos.forEach((aluno) => {
      if (aluno.presente) {
        alunosPresentes.push(aluno.nome);
      }
    });
  
    if (alunosPresentes.length > 0) {
      console.log("Alunos presentes na aula:");
      alunosPresentes.forEach((nome) => {
        console.log(`- ${nome}`);
      });
    } else {
      console.log("Nenhum aluno compareceu à aula.");
    }
  }
  
  // Chama a função para listar os alunos presentes
  listarAlunosPresentes();