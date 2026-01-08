import React from 'react'

const Searchbar = (props) => {
  return (
    <>
    <input type="text" onChange={props.handleChange}/>
    </>
  )
}

export default Searchbar