function verificar() {
    const idade = Number(document.getElementById('idade').value)
    const res = document.getElementById('res')
    
    if (idade >= 18) {
        let resultadoDiv = document.getElementById("res")
        resultadoDiv.innerHTML = "Você é maior de idade"
    } else {
        let resultadoDiv = document.getElementById("res")
        resultadoDiv.innerHTML = "Você é menor de idade"
    }
}