import React, { useCallback } from 'react'

const Test1 = () => {

//   function createFunction()
//   {
//     return function(){
//         console.log("Apple")
//     }
//   }

let createFunction=useCallback(
   ()=>{
     console.log("Apple")
   },[] 
)

  let ref1=createFunction();  //ref1=111     function body :  console.log("Apple")
  let ref2=createFunction();  //ref2=111     function body :  console.log("Apple")

  console.log(ref1===ref2)
  return (
   <>
   
   </>
  )
}

export default Test1