import React from 'react'

const Product = ({prod}) => {
  return (
   <>
   <div className="card" style={{'width': '18rem'}}>
            <img className="card-img-top" src={prod.image} alt="Card image cap"/>
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