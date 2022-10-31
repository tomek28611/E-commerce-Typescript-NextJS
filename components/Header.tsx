import Image from "next/image"; 
import Link from "next/link"; 
import React from 'react';
import { SearchIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/outline";


function Header() {
  return (
    <header className="sticky top-0 flex w-full items-center justify-between bg-[#E7ECEE]">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
        <div className="relative h-20 w-10 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image 
            src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" 
            width={100} 
            height={100} 
            layout="fill" 
            objectFit="contain" />
        </div>
        </Link>
        </div>
        <div className="hidden flex-1 items-center justify-center space-x-8 md:flex cursor-pointer" >
            <a className="headerLink">Product</a>
            <a className="headerLink">Explore</a>
            <a className="headerLink">Support</a>
            <a className="headerLink">Bussines</a>
        </div>
        <div className="">
            <SearchIcon className="headerIcon cursor-pointer" />
        </div>
    </header>
  )
}

export default Header