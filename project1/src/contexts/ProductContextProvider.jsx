
import { useEffect, useState } from 'react';
import ProductContext from './ProductContext';
import axios from 'axios'

function ProductContextProvider({children}) 
{

    const [products, setProducts] = useState(null)
   
    useEffect(
        () => {
            loadDataFromServer();
        }, []
    )

    async function loadDataFromServer() {
        try {
            //const apiproducts = await axios.get("http://localhost:8087/products/getAllProducts")
            const apiproducts = await axios.get("https://fakestoreapi.com/products")
            console.log('API Products ',apiproducts)
            setProducts(apiproducts.data)
            }
        catch (error) {
            console.log(error)
        }

    }

    let fruit="Apple"
    let car="Audi"

    let sharedData = {products,fruit,car};          
  return (
   
   <ProductContext.Provider value={sharedData}>		
    {children}
   </ProductContext.Provider>
  )
}

export default ProductContextProvider