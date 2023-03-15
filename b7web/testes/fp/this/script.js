let person = {
    name: "Breno",
    lastName: "Kauã",
    age: 17,
    getFullName() {
        return `${this.name} ${this.lastName}`
    } // forma de acessar o this com programação funcional
}

console.log(person.getFullName())
