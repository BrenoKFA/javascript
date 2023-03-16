function clickCallback() {
    alert("clicou no botão")
}

document.querySelector('#botao').addEventListener('click', clickCallback)

// callback é uma função passada para alguém, e ele excutar quando quiser (nesse caso, quando ouver um click)