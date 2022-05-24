function factorial (value){
    let result =1 
    for (let i =1 ;i<=value;i++){
        result *=1
    }
    return result
}
alert (factorial(10))

function factorialRecursive (value){
    if (value === 1){
        return 1
    }else {
        return value * factorialRecursive(value -1)
    }
}

alert (factorialRecursive(10))
factorialRecursive(5)