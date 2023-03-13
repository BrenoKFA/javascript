function soltou(event) {
    console.log('Tecla apertada: ' + event.key)
    console.log('Com Shift? ' + event.shiftKey)
}

const input = document.querySelector('input')
input.addEventListener('keyup', soltou)