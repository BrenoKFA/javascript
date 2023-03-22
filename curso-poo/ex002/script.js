// está mais organizado, mas está modificando o array original, dificultado o reaproveitamento

var ingredientes  = ['mel', 'água', 'sal', 'mostarda']

function capitalizar(ingredientes) {
    var modificado = []

    for (var c = 0; c < ingredientes.length; c++) {
        var letraInicial = ingredientes[c].charAt(0).toUpperCase()
        var restoTexto = ingredientes[c].slice(1)
        var resultado = letraInicial + restoTexto
    
        modificado[c] = resultado
    }

    return modificado
}

function ordenar(ingredientes) {
    return ingredientes.sort(function (a, b) {
        return a.localeCompare(b)
    })
}

var resultadoCapitalizado = capitalizar(ingredientes)
var resultadoOrdenacao = ordenar(resultadoCapitalizado)

console.log(resultadoCapitalizado)
console.log(resultadoOrdenacao)