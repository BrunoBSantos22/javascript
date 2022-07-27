let num = [2, 4, 7, 1]
num.push(9)

console.log(`A sequencia de vetores original é ${num}.`)
//console.log(`Mas agora iremos deixar na ordem crescente: ${num.sort()}`)
console.log(`O terceiro lugar do vetor é ${num[2]}`)

 let pos = num.indexOf(4)
 if (pos == -1) {
	console.log('O valor não foi localizado!')
 } else {
 	console.log(`O valor está na posição ${pos}`)
 }