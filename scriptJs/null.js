//null merupakan representasi sudah definisika tapi kosong
//atau sudah di set tapi data nya kosong 

let name = null 

if (name == null ){
    alert("hello null")
}else if(name == undefined){
    alert ("helo undifined")
}else {
    alert ('helo ${name}')
}