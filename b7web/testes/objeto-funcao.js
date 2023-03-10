let pessoa = {
    nome: 'Breno',
    sobrenome: 'Kauã',
    idade: '17',
    nomeComp: function() {
        return this.nome + ' ' + this.sobrenome
    }
}

console.log(pessoa.nomeComp())