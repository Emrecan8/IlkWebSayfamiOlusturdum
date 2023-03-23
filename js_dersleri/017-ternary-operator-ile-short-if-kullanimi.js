let userName = prompt("kullanıcı adı")
let info = document.querySelector("#info")

info.innerHTML =`${userName.length > 0 ? userName : "kullanıcı adı bulunamadı :("}`