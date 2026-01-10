import React from 'react'
import './BreadCrumbs.css'
import {Link} from 'react-router-dom'
const BreadCrumbs = ({prod}) => {
    const arrowImg='/myimages/Arrow.png'

  return (
   <>
   <Link to="/">HOME</Link>
   <img id="arrow-img" src={arrowImg} />
    <Link to="/prod">SHOP</Link>
    <img id="arrow-img" src={arrowImg} />
   {prod.category}
    <img id="arrow-img" src={arrowImg} />
   {prod.title}
   </>
  )
}

export default BreadCrumbs