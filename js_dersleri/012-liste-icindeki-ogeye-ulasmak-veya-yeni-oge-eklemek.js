let lastChield = document.querySelector("ul#list>li:last-child")
lastChield.innerHTML = "son öğe gg"

let firstChield = document.querySelector("ul#list>li:first-child")
firstChield.innerHTML = "ilk öğe gg"

let ulDOM =document.querySelector("ul#list")
let liDOM =document.createElement("li")

liDOM.innerHTML="asdasd"
ulDOM.append(liDOM)

ulDOM.prepend(liDOM)