// https://jsonplaceholder.typicode.com/posts

async function clicou() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    alert(json[0].title)
    // forma de transformar o fetch em sincrono
        
    alert('CLICOU!')
}

async function inserir() {
    let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        })
    let json = await response.json()
    console.log(json)
    // forma de transformar o fetch em sincrono
}

document.querySelector('#botao').addEventListener('click', clicou)
document.querySelector('#inserir').addEventListener('click', inserir)