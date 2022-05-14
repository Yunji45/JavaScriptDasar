//alert
//promp
//confirm
// layaknya pemberitahuan di bar status popup
alert ("selamat datang di JavaScript dasar part 1")

const name = prompt ("Apakah kamu mau jadi pacar saya ?")

alert ('tidak ${name}')

const pertanyaan = confirm ("anda mau lanjut tidak ?")

if (pertanyaan ){
    const jawaban = prompt ("jelas mau dong ")
    alert  ('$ {jawaban}')
} else {
    alert ("sudahlah capek")
}