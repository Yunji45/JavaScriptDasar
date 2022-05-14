const nilai =75
let ucapan 
//if statements
if (nilai >= 80){
    ucapan = "selamat anada berhasil"
}else {
    ucapan = "anda telah gagal"
}

document.writeln('<p>${ucapan}</p>')
//ternary operator
ucapan = nilai >= 80 ? "selamat anda lulus" : "anda gagal"
document.writeln('<p>${ucapan}</p>')