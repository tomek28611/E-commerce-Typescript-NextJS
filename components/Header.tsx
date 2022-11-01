import Image from "next/image"; 
import Link from "next/link"; 
import React from 'react';
import { SearchIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/outline";


function Header() {
  const session = false;
  return (
    <header className="sticky top-0 flex w-full items-center justify-between bg-[#E7ECEE]">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
        <div className="relative h-50 w-40 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image 
            src="https://www.pngitem.com/pimgs/m/485-4852378_sample-logo-png-transparent-png.png" 
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
        <div className="flex items-center justify-center gap-x-4 md:w-1/5">
            <SearchIcon className="headerIcon cursor-pointer" />
            <Link href="/checkout">
            <div className="relative cursor-pointer">
                <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center
                justify-center rounded-full bg-gradient-to-r from-pink-500 to violet-500
                text-[10px] text-white">
                  0</span>
                  <ShoppingBagIcon className="headerIcon" />
            </div>
            </Link>

            {session ? (
              <Image 
              src={
              // session.user?.image || 
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
              alt=""
              className="cursor-pointer rounded-full"
              width={34}
              height={34}
              // ocClikc={() => signOut()}
              />
            ) : (
              <UserIcon className="headerIcon"
              //  onClick={() => signIn()}
                />
            )
          }
        </div>
    </header>
  )
}

export default Header