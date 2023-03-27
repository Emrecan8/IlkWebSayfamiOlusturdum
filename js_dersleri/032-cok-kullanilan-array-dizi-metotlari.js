// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5] 

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items)

console.log(items.length)
console.log(items[0].length) // Array icindeki istedigimiz Array'in length bilgisini aldik
console.log(items[0][0]) // Ayse bilgisine ulastik :)

// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems = items.splice(1, 5)

console.log("newItems: ", newItems)
console.log("items: ", items)
// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
items.push("ipsum")

console.log( items.indexOf("ipsum") )

// Array Kopyalamak -> slice, [...ES6]

let copyItems = items
console.log(items);

copyItems.pop();
console.log("copyItems",copyItems);
console.log("items",items);

copyItems = items.slice()
copyItems.pop();
console.log("copyItems",copyItems);
console.log("items",items);

let es6Items = [...items]
console.log(es6Items);

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]

let allUsers = [...femaleUsers,...maleUsers]
console.log(allUsers);

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join

console.log(allUsers.toString());
console.log(allUsers.join("---"));

// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length,0,"Emre")
console.log(allUsers);
