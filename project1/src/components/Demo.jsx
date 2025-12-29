import React from 'react'
import cars from '../data/cars.js'
const Demo = () => {



const bat="Virat"
const bowl="Bumrah"
const capt="Rohit"


console.log("Welcome to React JS")

console.log(`My Fav batter is ${bat}`)
const olElement=document.getElementById("one")
console.log(olElement)


    return (
    <div>
        {cars.map(
            (car)=>(<li>{car}</li>)
        )}
    </div>
  )
}

export default Demo