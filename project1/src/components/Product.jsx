import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({prod}) => {
  return (
   <>
   <div className="card" style={{'width': '18rem'}}>
            <Link to={`/single/${prod.id}`}><img className="card-img-top" src={prod.image} alt="Card image cap"/></Link>
            <div className="card-body">
            <h5 className="card-title">{prod.title}</h5>
            <p className="card-text">{prod.description}</p>
            <p className="card-text">{prod.price}</p>
            <a href="#" className="btn btn-primary">Add To Cart</a>
            </div>
            </div>
   </>
  )
}

export default Product