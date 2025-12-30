import React, { Children } from 'react'
import './Button2.css'
const Button2 = ({children,...props}) => {
  return (
   <button className={props.isWhite? 'btn-white' : 'btn-black'}>{props.text}{props.icon}{children}</button>
  )
}

export default Button2