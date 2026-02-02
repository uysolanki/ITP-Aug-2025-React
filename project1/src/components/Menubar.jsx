import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Menubar = () => {
   const list=["Homepage", "Add Product", "Register" ,"Products","Test"]
   const navigate=useNavigate()

   function handleClick(value)
   {
    switch(value)
            {
                case "Homepage" : navigate("/"); break;
                case "Add Product" : navigate("/add"); break;
                case "Register" :  navigate("/register"); break;
                case "Products" : navigate("/prod"); break;
                case "Test" : navigate("/test"); break;
            }

   }
  return (
   <>
        <ol>
        {
           list.map(
            (item,index)=><li key={index} onClick={()=>handleClick(item)}>{item}</li>
           ) 
        }
        </ol>


   </>
  )
}

export default Menubar