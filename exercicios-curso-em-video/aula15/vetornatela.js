let valores = [2, 4, 9, 12, 25]

//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])


for(let pos = 0; pos < valores.length; pos++) {
	console.log(`Posição ${pos} e seu valor ${valores[pos]}`)
} */

for(let pos in valores) {
	console.log(`A posição é ${pos}, e seu valor é ${valores[pos]}`)
}