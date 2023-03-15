function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age
    }
} // uma função que cria objetos

let person1 = createPerson('Breno', 'Kauã', 17)
let person2 = createPerson('Pedro', 'Fulano', 19)

console.log(person1.name)
