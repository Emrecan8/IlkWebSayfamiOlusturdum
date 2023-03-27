let users = ["lorem", "ipsum","dolor"]

// for (let index=0;index<10;index++){
//     console.log(index);
// }

let index = 0
const userLİstDOM = document.querySelector('#userList')
for(;index<users.length;index++){
    const liDOM = document.createElement('li')
    liDOM.innerHTML=users[index]
    userLİstDOM.appendChild(liDOM)
}