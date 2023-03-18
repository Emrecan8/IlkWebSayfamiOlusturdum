let email = "emrecanyasar@gmail.com"
let firstName = "emre"
let lastName = "CAN"

//karakter sayısı
console.log(email.length)
//ilk karakter
console.log(firstName[0])
console.log(firstName.charAt(0))
//büyük/küçük harf
firstName=firstName.toUpperCase()
console.log(firstName)
firstName=firstName.toLowerCase()
console.log(firstName)
//string içinde arama
console.log(email.search("@"))
console.log(email[12])
//belli bir yere kadar almak
let domain =email.slice(email.search("@")+1,email.indexOf('.'))
console.log(domain)
//bilgiyi değiştir
let emre = email.replace('gmail.com','outlook.com')
console.log(emre)
//istediğim bigi var mı
email.includes('@')
//istediğim bilgiyle başladı mı bitti mi
email.endsWith('m')
email.startsWith('a')
//ilk harfleri büyük yapma
let fullName =`${firstName[0].toUpperCase()}${firstName.slice(1,firstName.length)}`
console.log(fullName)