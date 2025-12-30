import React from 'react'
import './Button.css'

const Button = ({handleClick,itpaugtext,cssClass}) => {
  return (
   <>
    {/* <button onClick={props.handleClick} className={props.cssClass}>{props.itpaugtext}</button> */}
    <button onClick={handleClick} className={cssClass}>{itpaugtext}</button>
   </>
  )
}

export default Button