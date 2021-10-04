import { listaEstudantes } from "./estudantes.js";

const curso = {
	nome: "CTD",
	nota_de_aprovação: 7,
	num_max_faltas: 2,
	lista_de_estudantes: listaEstudantes,

	adicionarAlunos(aluno) {
		this.lista_de_estudantes.push(aluno);
	},

	alunoFoiAprovado(aluno) {
		const media = aluno.calcularMedia();
		const faltas = aluno.quantidadeDeFaltas;
		if (faltas == this.num_max_faltas) {
			return media > 1.1 * this.nota_de_aprovação;
		}
		return media > this.nota_de_aprovação && faltas < this.num_max_faltas;
	},

	alunosAprovados() {
		return this.lista_de_estudantes.map((aluno) =>
			this.alunoFoiAprovado(aluno)
		);
	},
};

console.log(curso.lista_de_estudantes);
console.log(curso.alunosAprovados());
