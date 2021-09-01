const notas = {
	A: [5, 8, 4, 9, 5],
	B: [8, 7, 8, 6, 8],
	C: [7, 5, 10, 8, 3],
};

function pontuacaoMedia(participante) {
	let sum = 0;
	for (const nota of participante) {
		sum += nota;
	}
	return sum / participante.length;
}

function pontuacaoMaior(participante) {
	let maior = 0;
	for (const nota of participante) {
		if (nota > maior) {
			maior = nota;
		}
	}
	return maior;
}

function competicao(participantes) {
	for (const participante in participantes) {
		let maiorNota = pontuacaoMaior(participantes[participante]);
		let media = pontuacaoMedia(participantes[participante]);
		console.log(
			`Participante ${participante}:\n
Maior nota: ${maiorNota}\n
Media: ${media} 
-----------------------------------`
		);
	}
}
competicao(notas);
