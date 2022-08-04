let amigo = {nome: 'Paulo', 
sexo: 'm', 
idade: 22,
peso: 72.3,
engordar(k=0) {
	console.log(`Meu amigo pesava ${amigo.peso} kg.`)
	console.log(`Mas engordou ${k} kg.`)
	this.peso += k
} }

amigo.engordar(7)
console.log(`E agora está pesando ${amigo.peso}.`)