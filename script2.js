import cars from './data.js' 
import {bat,bowl,capt} from './data.js' 
console.log("Welcome to React JS")

console.log(`My Fav batter is ${bat}`)
const olElement=document.getElementById("one")
console.log(olElement)
cars.forEach(
    (car)=>{
    const listItem=document.createElement("li")
    listItem.innerText=car
    olElement.appendChild(listItem)
    }
)

