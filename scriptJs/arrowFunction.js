const person = {
    name : "ihya",
    sayHello : (name ) => {
        console.info (this)
        console.info (`hello ${name } my name is ${this.name}`)

    }
}
person.sayHello ("natik")