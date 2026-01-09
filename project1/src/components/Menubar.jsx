import React from 'react'
import {Link} from 'react-router-dom'
const Menubar = () => {
   
  return (
   <>
        <ol>
        <Link to="/">           <li>Homepage</li>           </Link>
        <Link to="/about">      <li>About US</li>    </Link>
        <Link to="/prod">       <li>ECommerce</li>      </Link>
        <Link to="/career">     <li>Careers</li>         </Link>
        </ol>


   </>
  )
}

export default Menubar