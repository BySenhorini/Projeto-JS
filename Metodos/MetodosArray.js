//.lenght() => tamanho

//let frutas = ["maca", "banana", "kiwi", "manga", "carambola"];

//console.log(frutas.length)

//let numero = [20,5,3]
//console.log(numero.length);

//---------------------------------------------------------------------------

//.reverse +> reverte o nosso array
// let numeros = [70,100, 120,1000];
// numeros.reverse();
// console.log(numeros);

// --------------------------------------------------------------------------

// //.push() => adiciona no final do nosso array
// let nomes = ["Valdemir", "Jurandir", "Misael", "Aparecida"];
// nomes.push("Yasmin")
// console.log(nomes);

//unshift adiciona algo no começo da frase.
//shift remove no inicio.
// ---------------------------------------------------------------------------

//.pop vai remover no final, o que estiver no final sera removido.

//--------------------------------------------------------------------------------
//  let nomeAnimais = ["Jhulie", "Romeu", "Marry", "Bento"]

//  //.includes() => Se existe no Array, se existir ele retorna true

//  console.log(nomeAnimais.includes("Meg"));

// ---------------------------------------------------------------------------------
// let valores = [30, 14, 99, 56, 66];
// //Quero os valores maiores que 50.
// const maiores = valores.filter(num => num < 50);
// console.log(maiores);

// ---------------------------------------------------------------------------------
//.map() => Método usado em arrays que permite transformar os elememto do array originalem novos valores, 
// criando em novo aerray, sem modificar o original.]
// let calculos = [8, 9, 5, 3];

// let modifiedcalculos = calculos.map(function(element){
//     return element *3;
// });

// console.log(modifiedcalculos); 

//-------------------------------------------------------------------------------------------------
//Lista de alunos e suas respectivs notas. .Map()
// let alunos = [
//     { nome: 'Yasmin', nota: 8 },
//     { nome: 'Laura', nota: 10 },
//     { nome: 'Kayky', nota: 9 }

// ];
// //-----------------------------------------------------------------------------------
// //Lista de nomes dos alunos.
// let alunoNomes = alunos.map(alunos => alunos.nome);

// //Função:
// let alunosNomesDois = alunos.map(function (aluno) {
//     return aluno.nome;
// })

// console.log(alunoNomes);

// let alunoNota = alunos.map(aluno => aluno.nota);
// console.log(alunoNota);
//-----------------------------------------------------------------------------------
//Criar um array com mensagens personalizadas.
// let nomes = ['Dani', 'Caio','Ryan', 'VInicius'];

// let mensagem = nomes.map(itemDoArrayNomes => `Olá, ${itemDoArrayNomes}`);
// console.log(mensagem);
// // let mensagem = nomes.map(itemDoArrayNomes => `Olá, ${+itemDoArrayNomes}`);

//-----------------------------------------------------------------------------------
//Pegar apenas os primeiros caracteres de nomes.
// let nomes = ['Isabelly', 'Emilly', 'Machado', 'Guilherme'];
// let inicialNomes = nomes.map(element => element[0]);
// console.log(inicialNomes);

 //-----------------------------------------------------------------------------------
 // Lista de Email
  let emails = [
    'kaue@gmail.com',
    'pedro@hotmail.com',
    'julia@outlook.com'
  ];
  let dominios = emails.map(element => element.split("@")[1]);
  console.log(dominios);
  