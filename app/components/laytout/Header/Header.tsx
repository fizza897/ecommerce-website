import Image from 'next/image'
import React from 'react'
import DineMarket from "@/app/Images/Logo.webp"
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react';
export const Header = () => {
  return (
    <>
    <div className='flex justify-between items-center py-10 px-10'>
        <Image src={DineMarket} alt='ecom'/>
        <ul className='flex gap-x-10'>
            <li className='text-lg'><Link href={"/"}>Female</Link></li>
            <li className='text-lg'><Link href={"/"}>Male</Link></li>
            <li className='text-lg'><Link href={"/"}>Kids</Link></li>
            <li className='text-lg'><Link href={"/"}>All Products</Link></li>
           
        </ul>
        <div className='flex justify-center items-center'>
        <Search />
            <Input type='search' placeholder='What are you looking for'/>
        </div>
        <div className='h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
            <ShoppingCart className='h-6 w-6'/>
        </div>
    </div>
    
    
    </>
  )
}
