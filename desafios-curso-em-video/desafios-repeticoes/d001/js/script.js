function contar() {
	let inicio = document.getElementById('txti')
	let fim = document.getElementById('txtf')
	let passo = document.getElementById('txtp')
	let res = document.getElementById('res')

	if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
		alert('[ERRO] Dados Inválidos!')
	} else {
		res.innerHTML = 'Contando...'
	}
}