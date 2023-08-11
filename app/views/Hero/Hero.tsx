import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Feather1 from "@/app/Images/Featured1.webp"
import Feather2 from "@/app/Images/Featured2.webp"
import Feather3 from "@/app/Images/Featured3.webp"
import Feather4 from "@/app/Images/Featured4.webp"
import Hero1 from "@/app/Images/Hero.webp"
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
export const Hero = () => {
  return (
    <>
    <section className='flex flex-col lg:flex-row gap-y-10 py-6'>

      {/* left side */}
      <div className='flex-1'>
        <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-200' variant="outline">Sale 70%</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
        </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
    <Button className='bg-black h-12 px-8 mt-4 gap-3'>
      <ShoppingCart/> 
       Start Shopping
      </Button>
      <div className='flex mt-[90px] gap-x-20 '>
        <Image src={Feather1} alt='feather1'/>
        <Image src={Feather2} alt='feather2'/>
        <Image src={Feather3} alt='feather3'/>
        <Image src={Feather4} alt='feather4'/>
      </div>
      </div>

      {/* right side  */}
      <div className='flex-1'>
        <div className='rounded-full absolute bg-pink-100 flex justify-center items-center'>
        <Image className='w-100 h-100 mt-[-27px]' src={Hero1} alt='Hero1'/>
        </div>
        
      </div>

    </section>
    </>
  )
}
