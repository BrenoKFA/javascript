class Person {
    age = 0

    constructor(name) {
        this.name = name
    }
}

function createPerson(name, age) {
    let p = new Person(name)
    p.age = age
    return p
} // factory: uma função que retorna o objeto já pronto

let p1 = createPerson("Breno", 17)

console.log(`${p1.name} tem ${p1.age} anos`)