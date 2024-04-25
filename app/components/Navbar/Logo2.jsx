import React from 'react'
import logo from '../../../public/images/logo.png'
import Image from "next/image";

 
 const Logo2 = () => {
   return (
    <Image
      src = {logo}
      width={90}
      height={90}
      alt='Logo2'
      />
   )
 }
 
 export default Logo2