let carros = ['BMW', 'Ferrari', 'Mercedes']
let x = 1
console.log('1. ' + carros[x])

carros[1] = 'Audi'
console.log('2. Lista como Audi: ')
console.log(carros)

carros.push('Volvo')
console.log('3. Adicionar Volvo: ')
console.log(carros)

console.log('4. Carros no array: ')
console.log(carros.length)