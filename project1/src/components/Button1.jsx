import React from 'react'
import './Button1.css'
const Button1 = ({
  children,
  icon,
  isWhite = false,
  onClick,
  className = ""
}
) => {
  return (
    <>
    <button
      onClick={onClick}
      className={`btn ${isWhite ? "btn-white" : "btn-black"} ${className}`}
    >

      {icon && <span className="icon">{icon}</span>}
      {children}

    </button>
    </>
  )
}

export default Button1