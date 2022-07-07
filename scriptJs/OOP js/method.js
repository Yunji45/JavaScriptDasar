class Person {
    constructor (name ){
        this.name = name
    }
    sayHello (name ){
        console.info (`helo,${name},my name is ${this.name}`)
    }
}

const ihya = new Person ("ihya")
console.info (ihya)
ihya.sayHello ('parmin')

const tukimin = new Person ("tukimin")
console.info (tukimin)
tukimin.sayHello('parmin')
