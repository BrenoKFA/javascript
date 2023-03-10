function clique() {
    const teste = document.querySelector('#teste')

    // console.log(teste.children)
    // filhos imediatos do elemento "#teste"


    const ul = teste.querySelector('ul')

    ul.children[0].innerHTML = 'Item alterado'
    // altera um elemento específico

    // ul.outerHTML = '<strong>Cadê a lista??</strong>'
    // altera o elemento (ul) e seus childerns

    ul.innerHTML = ul.innerHTML + '<li>Item adicionado</li>'
    // adiciona um elemento (forma menos eficiente)

    let newLi = document.createElement("li")
    newLi.innerText = "Novo Item"
    ul.appendChild(newLi)
    // adiciona um elemento no final (forma mais eficiente)

    let newLi = document.createElement("li")
    newLi.innerText = "Novo Item"
    ul.prepend(newLi)
    // adiciona um elemento no começo (forma mais eficiente)
}


