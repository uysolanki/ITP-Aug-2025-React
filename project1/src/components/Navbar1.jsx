import React from 'react'
import './Navbar.css'
const Navbar1 = () => {
  const menus=["File","Edit","Selection","View","Go"]
  return (
    <>
    <ol>
       {menus.map(
        (menu)=>(<li>{menu}</li>)
       )}
    </ol>
    </>
  )
}

export default Navbar1