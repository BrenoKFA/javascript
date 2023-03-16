// https://jsonplaceholder.typicode.com/posts

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    // requisição
        .then((response) => {
            return response.json()
        })
        // transformou a resposta em um objeto
        .then((json) => {
            console.log(json[0].title)
        })
        // mostra a resposta já em forma de objeto
}

document.querySelector('#botao').addEventListener('click', clicou)