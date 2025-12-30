import React from 'react'
import './Counter.css'
import { useState } from 'react'

const Counter = () => {

    let [count,setCount]=useState(0)
    function incrementBy1()
    {
        setCount(count+1)
       // console.log(count)
    }

    function decrementBy1()
    {
       setCount(count-1)
       // console.log(count)
    }

    function incrementBy2()
    {
        setCount(count+2)
       // console.log(count)
    }

    function decrementBy2()
    {
       setCount(count-2)
       // console.log(count)
    }

    
  return (
    <>
    <div>Counter</div>
    <button onClick={incrementBy1} id="increment-button">Increment</button>
    <button onClick={decrementBy1} id="decrement-button">Decrement</button>
    <button onClick={incrementBy2} id="increment-button">Increment By 2</button>
    <button onClick={decrementBy2} id="decrement-button">Decrement By 2</button>
    <span id="display-counter">{count}</span>
    </>
  )
}

export default Counter