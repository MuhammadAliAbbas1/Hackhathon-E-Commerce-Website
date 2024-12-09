import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div>
      <div className="w-screen h-[100px] bg-white flex items-center px-10 justify-between">
        {/* Logo */}
        <img className="w-44 h-10" src="/images/Logo.png" alt="Logo" />
        
        {/* Navigation Links centered */}
        <div className="flex-1 flex justify-center space-x-16 font-bold">
          <Link href="/"><Button dodi="Home" /></Link>
          <Link href="/Blog"><Button dodi="Blog" /></Link>
          <Link href="/Contact"><Button dodi="Contact" /></Link>
          <Link href="/Shop"><Button dodi="Shop" /></Link>
        </div>

        {/* Icons on the right */}
        <div className="flex space-x-10">
          <TbUserExclamation size={24} style={{ color: 'black', display: 'inline-block' }} />
          <CiSearch size={24} style={{ color: 'black', display: 'inline-block' }} />
          <IoHeartOutline size={24} style={{ color: 'black', display: 'inline-block' }} />
          <IoCartOutline size={24} style={{ color: 'black', display: 'inline-block' }} />
        </div>
      </div>
    </div>
  )
}