class Person {
    age = 0

    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log(`${this.name} diz OI!`)
    }
}

class Student extends Person {
    constructor(name, id) {
        super(name) // pega o valor do pai (Person)
        this.id = id // pega o valor do propio Student
    }
    
    sayHello() {
        super.sayHi() // manda executar uma ação da Person
    }
}

let p1 = new Student("Breno", 1)
let p2 = new Student("Pedro", 2)

console.log(`${p1.name} tem ${p1.age} anos e sua matrícula é #${p1.id}`)
console.log(`${p2.name} tem ${p2.age} anos e sua matrícula é #${p2.id}`)

p1.sayHello()