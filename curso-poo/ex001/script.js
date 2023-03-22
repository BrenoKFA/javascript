// feito de uma forma mais simples e não está orientado a objetos

var ingredientes  = ['mel', 'água', 'sal', 'mostarda']
var modificado = []

for (var c = 0; c < ingredientes.length; c++) {
    var letraInicial = ingredientes[c].charAt(0).toUpperCase()
    // mostra a primeira letra em maiúculo de cada item
    var restoTexto = ingredientes[c].slice(1)
    // mostra as outras letras do item
    var resultado = letraInicial + restoTexto

    modificado[c] = resultado
}

var ordenado = modificado.sort(function (a, b) {
    return a.localeCompare(b)
})
console.log(ordenado)
