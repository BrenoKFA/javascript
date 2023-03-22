import modificador from './modificador.js'
// importa o objeto com as funções
console.log(modificador)

var ingredientes  = ['mel', 'água', 'sal', 'mostarda']
var resultadoCapitalizado = modificador.capitalizar(ingredientes)
var resultadoOrdenacao = modificador.ordenar(resultadoCapitalizado)
var resultadoCaixaAlta = modificador.caixaAlta(ingredientes)
// o "modificador." permite acessar as funções de capitalizar e de ordenar

console.log(resultadoCapitalizado)
console.log(resultadoOrdenacao)
console.log(resultadoCaixaAlta)