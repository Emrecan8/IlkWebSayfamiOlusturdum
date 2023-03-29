let laptop1 ={
    brand :"Apple",
    model :"MacBook pro",
    "2kg" :2,
    model_name : "MacBook Pro"
}

console.log(laptop1);
console.log(laptop1.brand,laptop1["brand"]);
console.log(laptop1.model);
console.log(laptop1["2kg"]);

laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1);

laptop1.version ="10.16.7"
console.log(laptop1);

keys = Object.keys(laptop1)
console.log(keys);
console.log(Object.keys(laptop1));

for (const key in keys){
    console.log(key);
}

keys.forEach(item => {
    console.log(item);
    console.log(laptop1[item]);
});

let values = Object.values(laptop1)

values.forEach(item=>{
    console.log("value:",item);
})

let settings ={
    password :1234,
    userName:"user1"
}