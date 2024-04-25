import React from 'react'
import patitas from '../../../public/images/patitas.png'
import Image from "next/image";

 
 const Logo = () => {
   return (
    <Image
      src = {patitas}
      width={150}
      height={150}
      alt='Logo1'
      />
   )
 }
 
 export default Logo