function sayHello (name){
    document.writeln (`<p>Hello ${name}</p>`)
}

sayHello ("ihya")

const say = sayHello;
say ("Budi ")

function giveName (callback){
    callback("ihya")
}

giveName (sayHello)
giveName (say)