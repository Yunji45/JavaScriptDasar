function useStrictMode (){  
    'use strict'
    const person = {
        firstName : "ihya"
    }
    //error 
    with (person){
        console.info (firstName)
    }
}

useStrictMode()