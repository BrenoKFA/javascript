function calcImovel(metros, quartos) {
    switch (quartos) {
        case 1:
            return 3000 * metros
            break
        case 2:
            return 3000 * 1.2 * metros
            break
        case 3:
            return 3000 * 1.5 * metros
            break
        default:
            break
    }
}

let metros = 123
let quartos = 3
let preco = calcImovel(metros, quartos)
console.log(preco)