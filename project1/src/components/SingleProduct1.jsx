import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BreadCrumbs from './BreadCrumbs'
import Product from './Product'
import ProductContext from '../contexts/ProductContext'
const SingleProduct1 = () => {

    const {productid}=useParams()
    // console.log(productid)
    const o1=useContext(ProductContext)
    const [product,setProduct]=useState({})

    useEffect(() => {
    if (o1.products && productid) {
    const sinPro = o1.products.find((pro) => pro.id == productid)
    setProduct(sinPro)
    }
    }, [o1.products, productid])

if (!product) {
  return <h1>Product Loading.....</h1>
}

   

  return (
   <>
   <BreadCrumbs prod={product}/>
   <Product prod={product} />
   <Link className="btn btn-secondary" to="/prod">       Back To Shopping      </Link>
   </>
  )
}

export default SingleProduct1