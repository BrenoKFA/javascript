let num = [5, 1, 9, 3]
num.push(2)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
let pos = num.indexOf(6)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}