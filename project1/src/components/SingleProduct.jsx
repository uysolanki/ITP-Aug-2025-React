import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Product from './Product'
import {Link} from 'react-router-dom'
import BreadCrumbs from './BreadCrumbs'
const SingleProduct = () => {

    const {productid}=useParams()
    console.log(productid)
    const [product,setProduct]=useState(null)
    useEffect(
        ()=>{
                loadSingleProduct()
        },[productid]
    )

    if(!product)
    {
        return (<h1>Product Loading.....</h1>)
    }

    async function loadSingleProduct()
    {
         try {
            //const apiproducts = await axios.get("http://localhost:8087/products/getAllProducts")
            const singleproduct = await axios.get(`https://fakestoreapi.com/products/${productid}`)
            console.log('Single Product ',singleproduct)
            setProduct(singleproduct.data)
            }
        catch (error) {
            console.log(error)
        }
    }

  return (
   <>
   <BreadCrumbs prod={product}/>
   <Product prod={product} />
   <Link className="btn btn-secondary" to="/prod">       Back To Shopping      </Link>
   </>
  )
}

export default SingleProduct