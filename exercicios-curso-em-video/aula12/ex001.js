var idade = 21
console.log(`Voçê tem ${idade} anos.`)
if (idade < 16) {
	console.log('Não Vota!')
} else if (idade <= 18 || idade >= 70) {
		console.log('Voto Opcional!')
} else {
	console.log('Voto Obrigatório')
}