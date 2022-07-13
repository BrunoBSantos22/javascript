function carregar() {
	var msg = document.getElementById('msg')
	var img = document.getElementById('imagem')
	var txt = document.getElementById('texto')
	var data = new Date()
	var hora = data.getHours()
	msg.innerHTML = `Agora são ${hora} horas.`
	msg.style.color = 'white'


	if (hora >= 0 && hora < 12) {
		img.src = 'imagens/foto-manha.png'
		document.body.style.background = '#D1A110'

	} else if (hora >= 12 && hora < 18) {
		img.src = 'imagens/foto-tarde.png'
		document.body.style.background = '#B66E25'

	} else {
		img.src = 'imagens/foto-noite.png'
		document.body.style.background = '#131227'
	}
}