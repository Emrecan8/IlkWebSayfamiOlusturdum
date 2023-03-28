const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

// PRODUCTS.forEach((product,index,array) =>console.log(array[index]=product+"111"))
PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}` )  // toUpperCase

const userListDOM = document.querySelector('#userList')

PRODUCTS.forEach( item => {
  const liDOM = document.createElement('li')
  liDOM.innerHTML = item
  userListDOM.append(liDOM)
})