const disponiveis = {
	Pipoca: 10,
	Macarrão: 8,
	Carne: 15,
	Feijão: 12,
	Brigadeiro: 8,
};

function microondas(prato, tempo) {
	const pratoEscolhido = disponiveis[prato];
	return pratoEscolhido > tempo
		? console.log("Tempo insuficiente")
		: !pratoEscolhido
		? console.log("Prato inexistente")
		: 3 * pratoEscolhido < tempo
		? console.log("Kabum!")
		: 2 * pratoEscolhido < tempo
		? console.log("A comida queimou")
		: console.log("Prato pronto, bom apetite!");
}
