import React from 'react'

const PriceSlider = (props) => {
  return (
   <>
   <input type="range" onChange={props.handleChange} min="1" max="1000"></input>
   </>
  )
}

export default PriceSlider