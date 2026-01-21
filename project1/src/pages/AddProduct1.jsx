import React, { useState } from 'react'
import './AddProduct.css'

const AddProduct1 = () => {

  const p1 = {
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  };

  const [values, setValues] = useState(p1)

  function handleChange(e) 
  {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value  }))
  }

  function handleSubmit(e) {
  e.preventDefault()
  saveData()
}

  async function saveData() {
    try {
      const response = await fetch('http://localhost:8087/products/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)  // Use 'values' here instead of 'product'
      });

      if (response.ok) {
        const data = await response.json();
        alert("Product Added successfully!");
        console.log(data);
      } else {
        alert("Failed to Add Product");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  }


  return (
    <>
      <div className="container mt-5">
        <form className="form-container" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Product Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              onChange={handleChange}
              value={values.title} />
          </div>

          <div>
            <label htmlFor="price">Product Price</label>
            <input
              type="text"
              name="price"
              id="price"
              className="form-control"
              onChange={handleChange}
              value={values.price} />
          </div>

          <div>
            <label htmlFor="description">Product Description</label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              onChange={handleChange}
              value={values.description} />
          </div>

          <div>
            <label htmlFor="category">Product Category</label>
            <input
              type="text"
              name="category"
              id="category"
              className="form-control"
              onChange={handleChange}
              value={values.category} />
          </div>

          <div>
            <label htmlFor="image">Product Image</label>
            <input
              type="text"
              name="image"
              id="image"
              className="form-control"
              onChange={handleChange}
              value={values.image} />
          </div>

          <div className="button-group">
            <button type="submit">Register</button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default AddProduct1