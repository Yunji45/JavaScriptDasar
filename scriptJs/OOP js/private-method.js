class masuklagiah {
    hello (name){
        if (name) {
            this.#helloWithName(name)
            
        }else {
            this.#helloWithoutName()
        }
    }

        #helloWithoutName(){
            console.info ("hello")
        }

        #helloWithName (name){
            console.info (`hello ${name}`)
        }
}

const ihya = new masuklagiah()
ihya.hello("natik")