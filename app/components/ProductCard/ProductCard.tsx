import React from 'react'
import Image, { StaticImageData } from 'next/image'
export const ProductCard = (props:{title:string,price:number,img:StaticImageData }) => {
  return (
    <>
    <div className='py-10 mt-20'>
        <Image src={props.img}  alt='product1'/>
        <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
       <h3 className='font-bold text-lg'>${props.price}</h3>
    </div>
    
    
    </>
  )
}
