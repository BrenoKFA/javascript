function validar(usu, sen) {
    if (usu === 'pedro' && sen === '123') {
        return true
    } else {
        return false
    }
}

let usu = 'breno'
let sen = '321'
let validacao = validar(usu, sen)
if (validacao) {
    console.log('AUTORIZADO!')
} else {
    console.log('NEGADO!!!')
}