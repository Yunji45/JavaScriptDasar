//global scope 
let counter = 0

function hitMe (){
    counter ++

}
function other (){
    //local scope
}
hitMe ()
hitMe()

alert (counter)

function first (){
    let firstVariable = "first"

    function firstNested (){
        alert (firstVariable)
        const firstNestedVariable = "firstNested"

    }
    firstNested ()
    alert (firstNestedVariable)
    
}

function second (){
    let secondVariable = "second"
}
first()
second()
