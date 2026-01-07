import React from 'react'
import './Navbar.css'
const Navbar3 = (props) => {
  return (
  <>
  <ol>
       {props.list.map(
        (menu,index)=>(<li key={index} onClick={()=>props.handleClick(menu)}>{menu}</li>)
       )}
    </ol>
  </>
  )
}

export default Navbar3