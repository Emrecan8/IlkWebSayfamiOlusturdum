
// function helloWorld (){
//     console.log("Hello World")
// }

// function hello(){
//     console.log("merhaba")
//     helloWorld()
// }

// function userCheck (){

// }

// hello()

// let firstName ="Lorem"

// function greetings(firstName){
//     console.log(`Merhaba ${firstName}`);
// }

// greetings()


function greetings(firstName=""){
    console.log(`Merhaba ${firstName ? firstName : ""}`);
}

greetings("emre")

function greetings2(firstName,lastName){
    let info =`Merhaba ${firstName} ${lastName}`
    return info
}

let greetingInfo = greetings2("Ad" , "Soyad")   
console.log(greetingInfo);    

function domIdWriteInfo(id,info){
    let domObject =document.querySelector(`#${id}`)
    domObject.innerHTML=info
}

let htmlInfo =`<span style ="color:red">asdasdgajhsd</span>`

domIdWriteInfo('greeting',greetings2("Ad" , "Soyad"))
domIdWriteInfo('greeting',htmlInfo)