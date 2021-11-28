// CRUD: Create (criar) - Read (ler) - Update (atualizar) - Delete (deletar)

const cursos = require('./database');
const readline = require('readline-sync');

//           ---------- FUNCOES ----------

// ---- CREATE --------------------
function criarCurso(){
  const novoCurso = readline.question('Deseja criar um novo curso? S/N ')

  if (novoCurso.toLocaleUpperCase() === 'S') {
    console.log('Digite os dados do novo curso:');
  
    const idNovoCurso = readline.question('Digite o ID: ')
    const tituloNovoCurso = readline.question('Digite o titulo do curso: ')
    const descricaoNovoCurso = readline.question('Digite a descricao do curso: ')
    const imagemNovoCurso = readline.question('Digite o caminho da imagem: ')
    const professorNovoCurso = readline.question('Digite o nome do professor: ')
    const aulasNovoCurso = readline.question('Digite o links das aulas: ')
  
    const criarCurso = cursos.push({id: idNovoCurso, titulo:tituloNovoCurso, descricao: descricaoNovoCurso,imagem: imagemNovoCurso, professor: professorNovoCurso, aulas: aulasNovoCurso});

    console.log('Curso criado!');
    console.log('');
    console.log('Cursos disponíveis:'); // Mostra os cursos
    console.table(cursos);
  } else {
  listaCursos(); 
  }
}

// ---- READ --------------------
function exibirCurso() {
   // Se SIM, mostrar os nomes dos cursos
  //Se NÃO, mostrar os nomes de cursos por ID
  const procurarCurso = readline.question('Deseja buscar um curso? S/N ');

  if (procurarCurso.toLocaleUpperCase() === 'S') {
    console.log('Esses são os IDs dos cursos disponíveis:');
    listaCursos();

    const idEscolhido = readline.question('Qual o ID do curso escolhido? ');
    const exibirCurso = cursos.filter(curso => curso.id === idEscolhido); 
    console.table(exibirCurso);
  } else {
    listaCursos();
  }
}

// ---- UPDATE ---------------------------
function atualizarCurso() {
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
}

// ---- DELETE ----------------------------
function deletarCurso() {
  const exluirCursos = readline.question('Deseja deletar um curso? S/N ');

  if (exluirCursos.toLocaleUpperCase() === 'S') {
    console.log('Esses são os cursos disponíveis:');
    console.table(cursos);
    const idCursoExcluir = readline.question('Qual o ID do curso que deseja exluir? ');
    const numero = parseInt(idCursoExcluir);
    cursos.splice(numero - 1, 1);
    console.log(`Curso ${numero} deletado!`);
    console.log('Cursos disponíveis:')
    console.table(cursos);
  } else {
    listaCursos();
  }
}

// ---- LISTA CURSOS ----------------------------
function listaCursos() {
  const mostraCursos= cursos.sort((a,b) => a.id - b.id);
  console.table(mostraCursos);
}

//-------------------------------------------
console.log('Cursos disponíveis:')
console.table(cursos);
criarCurso();
exibirCurso();
atualizarCurso()
deletarCurso();
