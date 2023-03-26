let domain ="kodluyoruz"
let isActve =false
let items =[1,2,3,domain,isActve]
console.log(items);

let emptyArray=[] //boş liste

console.log(
    items.length
);

console.log(items[0]);

console.log(items[items.length-1]);

console.log(
    typeof(items)
);

console.log(
    Array.isArray(items)
);

console.log(Array.isArray([]));
console.log(Array.isArray(1));
console.log(Array.isArray(true));

console.log(items[Math.floor(items.length/2)]);