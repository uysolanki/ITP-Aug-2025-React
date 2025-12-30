import React from 'react'
import Button2 from './Button2'
import { BiSolidLogInCircle } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";

const Counter3 = () => {
  return (
    <>
    <Button2 text="Login" icon={<BiSolidLogInCircle />} isWhite={true}>Welcome to Pune</Button2>

    <Button2 text="Login" icon={<CgLogOut />} isWhite={false}><img src="abc.png"/></Button2>
    </>
  )
}

export default Counter3