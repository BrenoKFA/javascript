let cores = [
    {nome: 'azul', qnt: 5},
    {nome: 'vermelho', qnt: 5},
    {nome: 'amarelo', qnt: 10}
]

for (c = 0; c < cores.length; c++) {
    console.log(`cor: ${cores[c].nome} - ${cores[c].qnt}`)
}

for (let c in cores) {
    console.log(`cor: ${cores[c].nome} - ${cores[c].qnt}`)
}

for (let cor of cores) {
    console.log(`cor: ${cor.nome} - ${cor.qnt}`)
}

// formas diferentes de fazer a mesma coisa