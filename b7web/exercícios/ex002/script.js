function verificar() {
    const idade = Number(document.getElementById('idade').value)
    const res = document.getElementById('res')
    
    if (idade >= 18) {
        let resDiv = document.getElementById("res")
        resDiv.innerHTML = "Você é maior de idade"
    } else {
        let resDiv = document.getElementById("res")
        resDiv.innerHTML = "Você é menor de idade"
    }
}