class home {
    warna (){
        console.info("home warna")
    }
}

class circle extends home {
    warna(){
        super.warna ()
        console.info ("warna circle")
    }
}

const wilayah = new circle()
wilayah.warna()