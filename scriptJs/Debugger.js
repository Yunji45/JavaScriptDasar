function createfullName (firstName , middleName , lastName ){
    const fullName = `${firstName} ${middleName} ${lastName}`
    return fullName
}

const names = createfullName('ihya','budi','joko')
console.info (names)

function sum (...numbers ){
    debugger;
    let total =0
    for (const number of numbers){
        total += number
    }
    return total
}
console.info (sum(1,1,1,1,1,1))