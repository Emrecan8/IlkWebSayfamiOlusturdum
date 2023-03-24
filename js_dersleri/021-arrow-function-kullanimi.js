
function hello(firstName){
    console.log(`Merhaba ${firstName}`);
}

hello()

const helloFunc = (firstName) =>{console.log(`Merhaba ${firstName}`);}

helloFunc("asda")

const helloFunc2 =firstName =>     console.log(`Merhaba ${firstName}`);

helloFunc2("asdas")
const helloFunc3 =(firstName,lastName) =>     console.log(`Merhaba ${firstName} ${lastName}`);

helloFunc3("asdas","asdasd")

const helloFunc4 =(firstName,lastName) => {  
let info = `Merhaba ${firstName} ${lastName}`
console.log(info);
return info 
}
helloFunc4("asdas","asdas")
