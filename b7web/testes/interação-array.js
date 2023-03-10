let fruits = ['Banana', 'Laranja', 'Maça', 'Pêra', 'Uva']


let bigFruits = fruits.filter((item) => item.length > 4)
// filtra elementos com mais do que quatro letras
console.log(bigFruits)


let ok = fruits.every((value) => value.length > 3)
// retorna true se todos os elemento do array satisfazer a condição
if (ok) {
    console.log('Maiores que 3')
} else {
    console.log('Não são todos maiores que 3')
}


let a = fruits.some((value) => value.length > 3)
// retorna true se algum elemento satisfazer a condiçaõ
if (a) {
    console.log('Algum item é maior que 3')
} else {
    console.log('Nenhum item é maior que 3')
}


if (fruits.includes('Uva')) {
    console.log('Tem Uva')
} else {
    console.log('Não tem Uva')
}
// verifica se tem algum item no array