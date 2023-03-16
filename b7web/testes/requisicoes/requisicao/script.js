// https://jsonplaceholder.typicode.com/posts

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    // requisição
        .then((response) => {
            return response.json()
        })
        // transformou a resposta em um objeto
        .then((json) => {
            alert(json[0].title)
        })
        // mostra a resposta já em forma de objeto
        .catch(() => {
            alert('Erro na requisição')
        })
        // é executado quando acontece algum erro
        .finally(() => {
            alert('FIM :)')
        })
        // é executado idependentemente se deu certo ou errado
}

function inserir() {
    fetch(
        'https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, // tipo de dado que vai mandar
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            }) // dado que está mandando
        })
        // requisição com método POST

        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json)
        })
}

document.querySelector('#botao').addEventListener('click', clicou)
document.querySelector('#inserir').addEventListener('click', inserir)