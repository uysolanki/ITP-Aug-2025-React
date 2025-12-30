import React from 'react'
import Button2 from './Button2'
import { BiSolidLogInCircle } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";
import myImg from '../../public/vite.svg'

const Counter3 = () => {
  return (
    <>
    <Button2 text="Login" icon={<BiSolidLogInCircle />}>Welcome to Pune</Button2>

    <Button2 text="Logout" icon={<CgLogOut />} isWhite><img src={myImg}/></Button2>
    </>
  )
}

export default Counter3