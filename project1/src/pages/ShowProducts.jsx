import React, { useEffect, useState } from 'react'
import './Test.css'
import Navbar3 from '../components/Navbar3.jsx'
import Product from '../components/Product.jsx'
import Searchbar from '../components/Searchbar.jsx'
import PriceSlider from '../components/PriceSlider.jsx'
import axios from 'axios'
const ShowProducts = () => {
   
    const [allProducts, setAllProducts] = useState([])
    const [buAllProducts, setBuAllProducts] = useState([])
    const [basePrice, setBasePrice] = useState(0)

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
            setAllProducts(apiproducts.data)
            setBuAllProducts(apiproducts.data)
            }
        catch (error) {
            console.log(error)
        }

    }
    
    let productCategories = buAllProducts.map(
        (product) => (product.category)
    )

    console.log(productCategories)

    let distinctCategories = new Set(productCategories)
    console.log(distinctCategories)

    let allCategories = [...distinctCategories, 'All']
    console.log(allCategories)

    function filterByCategory(selectedCateory) {
        console.log(selectedCateory)
        if (selectedCateory != 'All') {
            let filteredProductsByCategory = buAllProducts.filter(
                (prod) => (prod.category === selectedCateory)
            )

            setAllProducts(filteredProductsByCategory)
        }
        else
            setAllProducts(buAllProducts)

    }

    function searchByTitle(event) {
        let searchText = event.target.value.toLowerCase();
        console.log(searchText)
        if (searchText.length != 0) {
            let searchedProducts = buAllProducts.filter(
                (prod) => (prod.title.toLowerCase().includes(searchText) || prod.description.toLowerCase().includes(searchText))
            )
            setAllProducts(searchedProducts)
        }
        else {
            setAllProducts(buAllProducts)
        }

    }

    function filterByPrice(event) {
        let bp = parseFloat(event.target.value)
        console.log(bp)
        setBasePrice(bp)
        let priceFilteredProducts = buAllProducts.filter(
            (prod) => (prod.price <= basePrice)
        )
        setAllProducts(priceFilteredProducts)
    }
    return (
        <>
            <Searchbar handleChange={searchByTitle} />
            <PriceSlider handleChange={filterByPrice} /><span>{basePrice}</span>
            <Navbar3 list={allCategories} handleClick={filterByCategory} />
            <div className='parent-container'>
                {
                    allProducts.map(
                        (product, index) => {
                            // return <div key={index}className="card" style={{'width': '18rem'}}>
                            // <img className="card-img-top" src={product.image} alt="Card image cap"/>
                            // <div className="card-body">
                            // <h5 className="card-title">{product.title}</h5>
                            // <p className="card-text">{product.description}</p>
                            // <a href="#" className="btn btn-primary">Add To Cart</a>
                            // </div>
                            // </div>
                            return <Product key={index} prod={product} />
                        }
                    )
                }
            </div>
        </>
    )
}

export default ShowProducts