import React from 'react'
import './Button2.css'
const Button2 = (props) => {
  return (
   <button className={props.isWhite? 'btn-white' : 'btn-black'}>{props.text}{props.icon}</button>
  )
}

export default Button2