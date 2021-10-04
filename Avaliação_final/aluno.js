export class Aluno {
	constructor(nome) {
		this._nome = nome;
		this._quantidadeDeFaltas = 0;
		this._notas = [];
	}

	get nome() {
		return this._nome;
	}

	get quantidadeDeFaltas() {
		return this._quantidadeDeFaltas;
	}

	get notas() {
		return this._notas;
	}

	adicionarNota(nota) {
		this._notas.push(nota);
	}

	calcularMedia() {
		const somaDasNotas = this.notas.reduce((acc, now) => acc + now);
		return somaDasNotas / this.notas.length;
	}

	faltas() {
		this._quantidadeDeFaltas++;
	}
}
