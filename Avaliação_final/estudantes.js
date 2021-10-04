import { Aluno } from "./aluno.js";

let listaEstudantes = [];

const NUM_ALUNOS = 15;

for (let x = 0; x < NUM_ALUNOS; x++) {
	let aluno = new Aluno("aluno_" + (x + 1));

	aluno.adicionarNota(Math.floor(Math.random() * 10));
	aluno.adicionarNota(Math.floor(Math.random() * 10));
	aluno.adicionarNota(Math.floor(Math.random() * 10));

	aluno._quantidadeDeFaltas = Math.floor(Math.random() * 4);

	listaEstudantes.push(aluno);
}

export { listaEstudantes };
