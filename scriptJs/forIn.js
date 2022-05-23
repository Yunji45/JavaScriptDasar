// const person = {
//     firstName = "ihya"
//     middleName = "Natik"
//     lastName = "wibowo"
// }
for (const property in person){
    document.writeln ('<p>${property} : ${ person[property]}</p>')
}

const names =["ihya", "Natik" , "wibowo"]
for (const index in names ){
    document.wrileln('<p>${index} : ${names [index]}</p>')

}