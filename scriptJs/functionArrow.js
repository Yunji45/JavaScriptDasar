const sayHello = name => console.info (`Hello ${name}`)

sayHello ("ihya")

const sum =(first,second) => first + second
console.info (sum (100,200))

function giveName (callback){
    callback("ihya")
}

giveName(name => console.info (`hello ketemu lagi ${name}`))
