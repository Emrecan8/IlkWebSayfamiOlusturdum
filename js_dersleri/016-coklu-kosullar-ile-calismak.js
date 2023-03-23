let userName = prompt("kullanıcı adı")
let age = prompt("yaş gir")
let info = document.querySelector("#info")

if(userName && age >=18){
    info.innerHTML = "ehliyet alabilir"
}else if( !userName ){
    info.innerHTML = "yaşını gir"
}else if( !( age >= 18 )){
    info.innerHTML = "yaş bilginiz yok veya 18 yaşından küçüksünüz"
}