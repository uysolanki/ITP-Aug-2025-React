import React from 'react'
import Button from './Button'
import './Counter.css'
import { useState } from 'react'
import Button1 from './Button1'
import { MdMessage } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const Counter1 = () => {
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
    <Button handleClick={incrementBy1} cssClass="increment-button" itpaugtext="Increment By 1"/>
    <Button handleClick={decrementBy1} cssClass="decrement-button" itpaugtext="Decrement By 1"/>
    <Button handleClick={incrementBy2} cssClass="increment-button" itpaugtext="Increment By 2"/>
    <Button handleClick={decrementBy2} cssClass="decrement-button" itpaugtext="Decrement By 2"/>
    <span id="display-counter">{count}</span>
    </>
  )
}

export default Counter1

