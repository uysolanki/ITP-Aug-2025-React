import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Menubar = () => {
   const list=["Homepage", "About Us", "Careers" ,"Products"]
   const navigate=useNavigate()

   function handleClick(value)
   {
    switch(value)
            {
                case "Homepage" : navigate("/"); break;
                case "About Us" : navigate("/about"); break;
                case "Careers" :  navigate("/career"); break;
                case "Products" : navigate("/prod"); break;
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