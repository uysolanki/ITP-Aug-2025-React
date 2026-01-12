import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const One = () => {

 const o1=useContext(UserContext)
 console.log(o1.user.username)
 console.log(o1.fruit)
 o1.test()
 
  return (
   <>
    <h1>One Component</h1>
   </>
  )
}

export default One