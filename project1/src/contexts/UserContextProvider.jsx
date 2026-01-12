import { useState } from "react";
import UserContext from './UserContext';

function UserContextProvider({children}) 
{
    const[user,setUser]=useState( { username:'Alice'} )	//data u wish to share with other components
    let fruit="Apple";
    let num=10

    function test()
    {
        console.log('Welcome to React JS')
    }

    let sharedData = { user, fruit, setUser, test};          //put all the data into an object
  return (
   
   <UserContext.Provider value={sharedData}>		//assign the object u wish to share to the value attribute
    {children}
   </UserContext.Provider>
  )
}

export default UserContextProvider
