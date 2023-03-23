function fnCapitalizarNovo(colecao, atributo) {
    if (typeof colecao[0] == 'object') {
        var res = colecao.map((obj) => {
            var letraInicial = obj[atributo].charAt(0).toUpperCase()
            var restoTexto = obj[atributo].slice(1)

            obj[atributo] = letraInicial + restoTexto

            return obj
        })
    } else {
        var res = colecao.map((string) => {
            var letraInicial = string.charAt(0).toUpperCase()
            var restoTexto = string.slice(1)

            string = letraInicial + restoTexto

            return string
        })
    }
}

function fnCapitalizar(vetor) {
    var modificado = []

    for (var c = 0; c < vetor.length; c++) {
        var letraInicial = vetor[c].charAt(0).toUpperCase()
        var restoTexto = vetor[c].slice(1)
        var resultado = letraInicial + restoTexto
    
        modificado[c] = resultado
    }

    return modificado
}

function fnOrdenar(vetor) {
    return vetor.sort(function (a, b) {
        return a.localeCompare(b)
    })
}

function fnCaixaAlta(vetor) {
    var modificado = []

    for (var c = 0; c < vetor.length; c++) {
        modificado[c] = vetor[c].toUpperCase()
    }

    return modificado
}

export default {
    capitalizar: fnCapitalizar,
    capitalizarNovo: fnCapitalizarNovo,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
}
// exporta um objeto com as funções de capitalizar e ordenar