function sum (name , ...data){
    let total =0
    for (const item of data ){
        total += item
    }
    document.writeln (`<p>total ${name} is ${total}</p>`)
}

sum ("biru", 10,20,30,40,50)
sum ("kuning" ,10,20,30,40,50)

const values = [10,10,10,10,10]
sum ("test ", ...values)

function Jumlah (){
    let total = 0
    for (const argument of arguments ){
        total += argument
    }
    document.writeln (`<p>total is ${total}</p>`)

}

Jumlah(1,2,3,4,5)