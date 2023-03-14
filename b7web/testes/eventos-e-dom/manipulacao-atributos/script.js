function clique() {
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao')

    if (input.hasAttribute('placeholder')) {
        console.log('Tem o elemento')
    } else {
        console.log('Não tem o elemento')
    }
    // diz se tem ou não o placeholder no input

    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text')
        botao.innerText = 'Esconder Senha'
    } else {
        input.setAttribute('type', 'password')  
        botao.innerText = 'Mostrar Senha'
    }
    // mostrar e ocultar senha
}

// getAtribute - pegar um atributo
// hasAtribute - conferir se existe o atributo
// setAtribute - trocar valor do atributo