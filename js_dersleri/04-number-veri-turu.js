//number veri türü tanımlamak

let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax

console.log(
    "fiyat :",price,
    "kdvli fiyat :",priceTax,
    "kdv tutarı :",tax,
    "toplam fiyat :",total
)

//artırma ve azaltma işlemleri

let counter = 320
counter =counter + 1
counter +=1
counter++
console.log(counter)

counter--
counter -=1
console.log(counter)

counter *=10
console.log(counter)

counter /=2
console.log(counter)

//işlem önceliği

console.log(2+3*10)
console.log((2+3)*10)

//mod alma

console.log(14%2)

//üs alma

console.log(2**4)

//aşağı yuvarlama

console.log(Math.floor(1.9))

//yukarı yuvarlama

console.log(Math.ceil(1.9))

//yakına yuvarlama

console.log(Math.round(1.9))