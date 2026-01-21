import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'
import Product from '../components/Product'
import ProductContext from '../contexts/ProductContext'
import './SingleProduct3.css'
const SingleProduct3 = () => {

  const { productid } = useParams()
  // console.log(productid)
  const { products } = useContext(ProductContext)
  const [product, setProduct] = useState({})

  useEffect(() => {
    if (products && productid) {
      const sinPro = products.find((pro) => pro.id == productid)
      setProduct(sinPro)
    }
  }, [products, productid])

  if (!product) {
    return <h1>Product Loading.....</h1>
  }

  const star = '/myimages/star.png'
  const star_dull = '/myimages/star_dull.png'

  const totalStars = 5;
  const rating = product?.rating?.rate || 0;
  const filledStarsCount = Math.round(rating);
  const dullStarsCount = totalStars - filledStarsCount;
  const stars = [];

  for (let i = 0; i < filledStarsCount; i++) {
    stars.push(<img key={`f-${i}`} src={star} alt="star" />);
  }

  for (let i = 0; i < dullStarsCount; i++) {
    stars.push(<img key={`d-${i}`} src={star_dull} alt="star dull" />);
  }


  return (
    <>
      <BreadCrumbs prod={product} />
      <div className='productdisplay'>
        <div className="product-display-left">
          <div className="product-display-img-list">
            <img src={product.image} alt={product.title} />
          </div>

        </div>

        <div className="product-display-right">
          <h1>{product.title}</h1>

          <div className="productdisplay-right-star">
            {stars}
            <p>({product?.rating?.count})</p>
          </div>

          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              ₹{product.price}
            </div>
            <div className="productdisplay-right-price-new">
              ₹{product.price}
            </div>
          </div>

          <div className="productdisplay-right-description">
            {product.description}
          </div>

          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size-options">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>

          <button>
            ADD TO CART
          </button>


        </div>

      </div>

      <Link className="btn btn-secondary" to="/prod">       Back To Shopping      </Link>
    </>
  )
}

export default SingleProduct3