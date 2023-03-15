let person = {
    name: "Breno",
    lastName: "Kauã",
    age: 17,
    getFullName() {
        return `${this.name} ${this.lastName}`
    },
    start() {
        console.log('Deu start na pessoa')
    } // quando se quer executar alguma coisa antes de tudo (uma forma de "emular" o construtor)
}

person.start()

console.log(person.getFullName())
