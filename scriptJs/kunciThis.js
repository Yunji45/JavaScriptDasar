console.info (this)

function sample (){
    console.info (this)
    function inner (){
        console.info (this)
    }
    inner ()
}
sample ()

const person = {
    names:  "ihya", 
    sayHello: function (value ){
        console.info (`hello ${value } my name is ${this.name}`)
    }
}

person.sayHello ("budi")
person.sayHello("joko")