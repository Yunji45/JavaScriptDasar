function createAdd (value ){
    const owner = "ihya"

    function add (param){
        return value + param
    }
    return add
}

const addTwo = createAdd (2)

console.info (addTwo(10))
console.info (addTwo(20))

const addTen = createAdd(10)
console.info (addTen(10))
console.info (addTen(20))