function* createNames (){
    yield "ihya"
    yield "natik"
    yield "wibowo"
}

const names  = createNames()
for (const name of names ){
    console.info (name )
}
function* buatganjil (value){
    for (let i =1 ;i<= value ;i++){
        if (i % 2 === 1){
            console.info (`Yield ${i}`)
            yield i
        }
    }
}

function buatganjilArray (value ){
    const result = []
    for (let i = 1;i <= value;i++){
        if (i % 2 === 1){
            console.info (`Yield ${i}`)
            result.push(i)
        }
    }
    return result
}

const numbers = buatganjil(100)

console.info (numbers.next().value)
console.info (numbers.next().value)