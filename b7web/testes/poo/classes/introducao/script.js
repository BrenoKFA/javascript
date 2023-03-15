class Person {
    _age = 0
    steps = 0

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    takeAStep() {
        this.steps++
    } // quando acionada adicionará um passo

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    } // getter

    get age() {
        return this._age
    }

    set age(x) {
        if (typeof x == 'number') {
            this._age = x
        }
    } // setter
}

let p1 = new Person("Breno", "Kauã") // aciona o 'constructor'
let p2 = new Person("Maria", "Leite")
let p3 = new Person("Pedro", "Cunha")

p1.takeAStep() // adiciona um passo a p1
p1.takeAStep() // adiciona outro passso a p1
console.log(`Passos de ${p1.fullName}: ${p1.steps}`)
console.log(`Passos de ${p2.fullName}: ${p2.steps}`)

p1.age = 17
console.log(`${p1.fullName} tem ${p1.age} anos`)