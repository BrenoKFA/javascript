function soltou(event) {
    const input = document.querySelector('input')
    const ul = document.querySelector('ul')
    if (event.keyCode === 13) {
        const li = document.createElement('li')
        li.innerText = input.value
        ul.appendChild(li)

        input.value = ' '
    }
}

input.addEventListener('keyup', soltou)