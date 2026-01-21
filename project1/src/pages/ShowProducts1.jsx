import { useContext, useState } from 'react'
import ProductContext from '../contexts/ProductContext.js'
import Navbar3 from '../components/Navbar3.jsx'
import PriceSlider from '../components/PriceSlider.jsx'
import Product from '../components/Product.jsx'
import Searchbar from '../components/Searchbar.jsx'
import '../components/Test.css'

const ShowProducts1 = () => {
   
   const o1=useContext(ProductContext)
   const [allProducts, setAllProducts] = useState(o1.products)
   const [buAllProducts, setBuAllProducts] = useState(o1.products)
   const [basePrice, setBasePrice] = useState(0)
   
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

export default ShowProducts1