const say = function (name ){
    document.writeln (`<p>Hello ${name}</p>`)
}

say ("natik")
say ("wibowo")

function giveName(callback){
    callback("natik")
}
giveName(say)

giveName (function (name ){
    document.writeln (`<p>hi ${name}</p>`)
})
giveName (function(name ){
    document.writeln(`<p>hi juga ${name }</p>`)
})

giveName (function(name ){
    document.writeln(`<p>iya ada apa ${name}</p>`)
})