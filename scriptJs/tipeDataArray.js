//tipe data array pada JavaScript 
//array di dalam JavaScript memiliki sifat dinamis

let arrayKosong = []
let arrayIsi = ["ihya ", "Nayik ", "Wibowo"]

const names = []
names.push ("Ihya")
names.push ("Natik")
names.push ("Wibowo", "selesai")

console.table(names)

//Syntax array
//== array.push(value) = untuk menambahkan data kedalam array
//== array.length = mendapatkan panjang array 
//== array[index] = mendapatkan posisi index
//== array[index] = value = mendapatkan data posisi index
//== delete array [index] = menghapus data dalam index akan tetapi data tidak bergeser karna sudah ada didalm var

delete names [2]

names.push ("Wibowo lagi")

console.table (names )