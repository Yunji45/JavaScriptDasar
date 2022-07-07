class ngodinglagideh {
    #ngodinglagideh =0
    increment (){
        this.#ngodinglagideh++

    }

    decrement (){
        this.#ngodinglagideh--
    }

    get (){
        return this.#ngodinglagideh
    }

}

const error = new ngodinglagideh()

error.increment()
error.increment()


console.info (error.get())
error.error = 100

console.info (error)