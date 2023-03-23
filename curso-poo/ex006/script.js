import modificador from './modificador.js'
import ingredientes from './ingredientes.js'

var ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome')
var ingredientesCapitalizados = modificador.capitalizar(ingredientes, 'nome')
var containerIngredientes = document.querySelector('#container-ingredientes')

for (var ingrediente of ingredientesCapitalizados) {
    var textoHTML = `
    <div class="ingredientes">
        <img src="img/${ingrediente.img}" alt="">
        <p class="nome-ingrediente">${ingrediente.nome}</p>
    </div>
    `
    containerIngredientes.innerHTML += textoHTML
}