function sayHello (FirstName, LastName) {
    const say = `Hello ${FirstName} ${LastName}`;
    return say ;
}
const result = sayHello ("ihya", "natik")
document.writeln(`<p>${result }</p>`)

function getNilai (value){
    if (value > 90 ){
        return "A"
    }else if (value >80){
        return "B"
    }else if (value > 70 ){
        return "C"
    }else if(value > 60 ){
        return "D"
    }else {
        return "E"
    }
}

const finalValue = getNilai(76)
document.writeln (`<p>${finalValue }</p>`)

function isContain (array , searchValue){
    for (const element of array){
        console.log (`Iterasi Element ${element}`)
        if (element === searchValue ){
            return true 
        }
    }
    return false 
}
const array =[23,345,7544,45,5,65,6,5,77,99]
const search = 99
const found = isContain(array , search)
document.writeln (`<p>${found}</p>`)