class apaAjadeh {
    sayHello (name){
        console.info (`hello ${name} , mys name is apaAjadeh ${this.name}`)
    }
}

class induk extends apaAjadeh {
    sayHello(name){
        console.info (`hello ${name} , perkenalkan nama saya ${this.name}`)
    }
}

const ihya = new apaAjadeh()
ihya.name = "natik"
ihya.sayHello("ida")

const budi = new induk ()
budi.name= "parmin"
budi.sayHello("wibowo")

console.info (ihya)
console.info(budi)