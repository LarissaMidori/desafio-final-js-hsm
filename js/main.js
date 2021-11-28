// CRUD: Create (criar) - Read (ler) - Update (atualizar) - Delete (deletar)

const cursos = require('./database');
const readline = require('readline-sync');

// ---------- FUNCOES ----------

function deletarCurso() {
  const idCursoExcluir = readline.question('Qual o ID do curso que deseja exluir ? ');
  const numero = parseInt(idCursoExcluir);
  cursos.splice(numero - 1,1); // FUNÇAO deletar curso
  console.log(`Curso ${numero} deletado!`);
}  //Mostra qual o id do curso que foi deletado

function listaCursos() {
  const mostraCursos= cursos.sort((a,b) => a.id - b.id); //FUNÇAO listarCursos
  console.log('Esses são todos os cursos disponíveis:');
  console.table(mostraCursos);
}

//------------------
console.log('Cursos disponíveis:')
console.table(cursos)

// ---- CREATE --------------------
const novoCurso = readline.question('Deseja criar um novo curso? S/N ');

if (novoCurso.toLocaleUpperCase() === 'S') {
  console.log('Digite os dados do novo curso:');

  const idNovoCurso = readline.question('Digite o ID: ')
  const tituloNovoCurso = readline.question('Digite o titulo do curso: ')
  const descricaoNovoCurso = readline.question('Digite a descricao do curso: ')
  const imagemNovoCurso = readline.question('Digite o caminho da imagem: ')
  const professorNovoCurso = readline.question('Digite o nome do professor: ')
  const aulasNovoCurso = readline.question('Digite o links das aulas: ')

  const criarCurso = cursos.push({id: idNovoCurso, titulo:tituloNovoCurso, descricao: descricaoNovoCurso,imagem: imagemNovoCurso, professor: professorNovoCurso, aulas: aulasNovoCurso}); // FUNÇAO criarCurso

/*   const criarCurso = cursos.push({id:'4', titulo:'Curso 4', descricao:'Curso4',imagem: '/images/curso1.png', professor: 'Carlos', aulas: 'http://www.google.com'})  ---teste! */

  console.table(criarCurso);
  console.log(`Curso criado!`); //Mostra qual o id do curso que foi deletado
  console.log('');
  console.log('Cursos disponíveis:'); // Mostra os cursos que restaram
  console.table(cursos);
} else {
  listaCursos(); 
}

// ---- READ --------------------
const procurarCurso = readline.question('Deseja buscar um curso? S/N ');

  // Se SIM, mostrar os nomes dos cursos
  //Se NÃO, mostrar os nomes de cursos por ID

if (procurarCurso.toLocaleUpperCase() === 'S') {
  console.log('Esses são os Ids dos cursos disponíveis:');
  for (i= 0; i < cursos.length; i++){
    let todosCursos = console.table(cursos[i])
  }

  const idEscolhido = readline.question('Qual o ID do curso escolhido? ');
  const exibirCurso = cursos.filter(curso => curso.id === idEscolhido); // FUNÇAO exibirCurso
  console.table(exibirCurso);

} else {
  listaCursos();
}

// ---- UPDATE ---------------------------
const atualizarCurso = readline.question('Deseja alterar algum curso? S/N ')

if (atualizarCurso.toLocaleUpperCase() === 'S') {
  console.log('Esses são os cursos disponíveis:');
  console.table(cursos);

  const idCursoAlterar = readline.question('Qual o ID do curso que deseja alterar? ');
  const numero2 = parseInt(idCursoAlterar);
  cursos.splice(numero2- 1,1)

  console.log('Digite os dados do novo curso:');
  const idNovoCurso2 = numero2.toString()
  const tituloNovoCurso2 = readline.question('Digite o titulo do curso: ')
  const descricaoNovoCurso2 = readline.question('Digite a descricao do curso: ')
  const imagemNovoCurso2 = readline.question('Digite o caminho da imagem: ')
  const professorNovoCurso2 = readline.question('Digite o nome do professor: ')
  const aulasNovoCurso2 = readline.question('Digite o links das aulas: ')

  const criarCurso = cursos.push({id: idNovoCurso2, titulo:tituloNovoCurso2, descricao: descricaoNovoCurso2,imagem: imagemNovoCurso2, professor: professorNovoCurso2, aulas: aulasNovoCurso2});

  console.log('Cursos com os dados atualizados!')
  listaCursos();

} else {
  listaCursos()
}

// ---- DELETE ----------------------------
const exluirCursos = readline.question('Deseja deletar um curso? S/N ');
console.log('Escolha o número do ID do curso:')

if (exluirCursos.toLocaleUpperCase() === 'S') {
  console.log('Esses são os cursos disponíveis:');
  console.table(cursos);
  deletarCurso()
  console.table(deletarCurso);
  console.log('');
  console.log('Cursos disponíveis:'); // Mostra os cursos que restaram
  console.table(cursos);
} else {
  listaCursos();
}
