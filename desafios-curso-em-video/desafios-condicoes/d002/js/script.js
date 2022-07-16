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
		var genero = ''
		var img = document.createElement('img')
		img.setAttribute('id', 'foto')

		if (fsex[0].checked) {
			genero = 'Homem'
			if (idade >= 0 && idade < 15) {
				//criança
				img.setAttribute('src', 'fotos/crianca-mas.png')
			} else if (idade < 25) {
				//jovem
				img.setAttribute('src', 'fotos/jovem-mas.png')
			} else if (idade < 55) {
				//adulto
				img.setAttribute('src', 'fotos/adulto-mas.png')
			} else {
				//idoso
				img.setAttribute('src', 'fotos/idoso-mas.png')
			}
		} else if (fsex[1].checked) {
			genero = 'Mulher'
			if (idade >= 0 && idade < 15) {
				//criança
				img.setAttribute('src', 'fotos/crianca-fem.png')
			} else if (idade < 25) {
				//jovem
				img.setAttribute('src', 'fotos/jovem-fem.png')
			} else if (idade < 55) {
				//adulto
				img.setAttribute('src', 'fotos/adulto-fem.png')
			} else {
				//idoso
				img.setAttribute('src', 'fotos/idoso-fem.png')
			}
		} 
		res.style.textAlign = 'center'
		res.innerHTML = `Sou ${genero}, e tenho ${idade} anos.`
		res.appendChild(img)
	}
}