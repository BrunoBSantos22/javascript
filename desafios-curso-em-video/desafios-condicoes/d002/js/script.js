function verificar() {
	var data = new Date()
	var ano = data.getFullYear()
	var fano = document.getElementById('txtano')
	var res = document.getElementById('res')

	if (fano.value == 0 || fano.value > ano) {
		alert('[ERRO] Verifique os dados informados, e tente novamente.')
	} else {
		var fsex = document.getElementsByName('radsex')
		var idade = ano - Number(fano.value)
		res.innerHTML = `Você tem ${idade} anos.`
	}
}