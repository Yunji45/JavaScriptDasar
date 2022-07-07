class ValidasiError extends Error {
    constructor (massage , field){
        super (massage)
        this.field = field
    }
}

class Manut {
    static sum ( ...numbers){
        if (numbers.length === 0 ){
            throw new ValidasiError("total params harus lebih dari 0")
        }

        let total =0
        for (const number of numbers){
            total += number
        }
        return total
    }
}

try {
    console.info (Manut.sum())
    console.info ("ihya")
}catch (error) {

     if (error instanceof ValidasiError){
        console.info (`terjadi error di field ${error.field} dengan error ${error.massage}`)

     }else {
        console.info (`terjadi error ${error.massage}`)
     }
}finally {
    console.info ("program ga jelas arah")
}

console.info ("natik")
