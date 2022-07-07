class Person {
    constructor (firstName ,lastName ,exit) {
        this.firstName = firstName
        this.lastName = lastName
        this.exit = exit
    }

    get fullName (){
        return `${this.firstName} ${this.lastName} ${this.exit}`
    }

    set fullName (value) {
        const result = value.split (" ")
        this.firstName = result [0]
        this.lastName = result[1]
        this.exit = result [2]

    }

}

const ihya = new Person ("ihya" , "natik " , "wibowo")
console.info(ihya)
console.info(ihya.fullName)


ihya.fullName = "errorr lagi dong "
console.info (ihya)