let cars = [
    {marca: 'Fiat', ano: 2022},
    {marca: 'Bmw', ano: 2018},
    {marca: 'Ferrari', ano: 2020}
]

cars.sort((a, b) => {
    if (a.ano > b.ano) {
        return 1
    } else if (a.ano < b.ano) {
        return -1
    } else {
        return 0
    }
}) // forma completa

cars.sort((a, b) => a.ano - b.ano) // forma simplificada

console.log(cars)

// coloca em ordem de acordo com o ano do carro