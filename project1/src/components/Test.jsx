import React, { useState } from 'react'
import products from '../data/products.js'
import './Test.css'
import Navbar3 from './Navbar3.jsx'
import Product from './Product.jsx'
const Test = () => {
    console.log(products) //20

    const [allProducts,setAllProducts]=useState(products)
    const [buAllProducts,setBuAllProducts]=useState(products)

    let productCategories=products.map(
        (product)=>(product.category)
    )

    console.log(productCategories)

    let distinctCategories=new Set(productCategories)
    console.log(distinctCategories)

    let allCategories=[...distinctCategories,'All']
    console.log(allCategories)

    function filterByCategory(selectedCateory)
    {
        console.log(selectedCateory)
        if(selectedCateory!='All')
        {
        let filteredProductsByCategory=buAllProducts.filter(
            (prod)=>(prod.category===selectedCateory)
        )

        setAllProducts(filteredProductsByCategory)
        }
        else
        setAllProducts(buAllProducts)    

    }

   return (
   <>
   <Navbar3 list={allCategories} handleClick={filterByCategory}/>
   <div className='parent-container'>
   {
    allProducts.map(
        (product,index)=>{
            // return <div key={index}className="card" style={{'width': '18rem'}}>
            // <img className="card-img-top" src={product.image} alt="Card image cap"/>
            // <div className="card-body">
            // <h5 className="card-title">{product.title}</h5>
            // <p className="card-text">{product.description}</p>
            // <a href="#" className="btn btn-primary">Add To Cart</a>
            // </div>
            // </div>
            return <Product key={index} prod={product}/>
        }
    )
   }
   </div>
   </>
  )
}

export default Test