let counter =1

while (true){
    document.writeln('<p>percabangan ke ${counter}</p>')
    counter ++

    if (counter > 10){
        break ;
    }
}
//menguhitung ganjil dengan persentase 
for (let i =1;i <=10;i++){
    if (i %2 ===0){
        continue 
    }
    document.writeln('<p>Perulangan Ganjil ke ${i}</p>')
}