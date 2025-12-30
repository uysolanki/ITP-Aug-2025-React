import React, { useState } from 'react'
import MyButton from './MyButton'

const Counter2 = () => {
    let [count,setCount]=useState(0)
    function inc()
    {
        setCount(count+1)
    }

    function dec()
    {
        setCount(count-1)
    }
  return (
    <>
    

    <MyButton text="Increment" handleClick={inc}/>
    <MyButton text="123Decrement" handleClick={dec}/>
    <span>{count}</span>
    </>
  )
}

export default Counter2