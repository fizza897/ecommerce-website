import React from 'react'
import Product1 from "@/app/Images/Product1.webp"
import Product2 from "@/app/Images/Product2.webp"
import Product3 from "@/app/Images/Product3.webp"
import { ProductCard } from '@/app/components/ProductCard/ProductCard'
export const ProductList = () => {
  return (
    <>
    <div className='flex justify-evenly mt-10 py-20'>
        <ProductCard title='sweet shirt' price={100} img={Product1}/>
        <ProductCard  title='abc' price={150} img={Product2 }/>
        <ProductCard title='xyz' price={200} img={Product3}/>

    </div>
    
    
    </>
  )
}
