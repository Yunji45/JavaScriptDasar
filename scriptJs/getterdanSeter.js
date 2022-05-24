const person = {
    firstName : "ihya",
    lastName : "wibowo",

    get fullName (){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName (value ){
        const array = value.split (" ")
        this.firstName = array [0]
        this.lastName = array [1]
    }
}

person.fullName = "budi Nugroho"
console.table (person)

person.fullName = "jokomoeo"
console.table (person)

person.fullName = "ihya wibowo"
console.table (person)