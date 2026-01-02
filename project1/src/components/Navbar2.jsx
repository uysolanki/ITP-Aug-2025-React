import React from 'react'
import './Navbar.css'
import menus from '../data/mymenus.js'
const Navbar2 = () => {
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

export default Navbar2